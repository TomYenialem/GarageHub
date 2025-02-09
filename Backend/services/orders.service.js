const conn = require("../config/db.config");

const sendOrders = async (order) => {
  try {
    let ordersData = {};

    // Step 1: Insert into `orders` table
    const insertOrderQuery = `
      INSERT INTO orders (employee_id, customer_id, vehicle_id, active_order, order_hash)
      VALUES (?, ?, ?, ?, ?)`;

    const orderResult = await conn.query(insertOrderQuery, [
      order.employee_id,
      order.customer_id,
      order.vehicle_id,
      order.active_order,
      order.order_hash || "default_hash", // Handle order_hash if missing
    ]);

    if (orderResult.affectedRows !== 1) {
      throw new Error("Failed to insert order.");
    }

    const order_id = orderResult.insertId; // Get the newly created order ID

    // Step 2: Insert into `order_info` table
    const insertOrderInfoQuery = `
      INSERT INTO order_info (order_id, order_total_price, additional_requests_completed)
      VALUES (?,  ?, ?)`;

    const orderInfoResult = await conn.query(insertOrderInfoQuery, [
      order_id,
      order.order_total_price || 0, // Default price = 0 if not provided
      order.additional_requests_completed || 0,
    ]);

    if (orderInfoResult.affectedRows !== 1) {
      throw new Error("Failed to insert order info.");
    }

    // Step 3: Insert multiple services using `Promise.all`
    if (order.order_services && order.order_services.length > 0) {
      const insertServiceQuery = `
        INSERT INTO order_services (order_id, service_id, service_completed)
        VALUES (?, ?, ?)`;

      await Promise.all(
        order.order_services.map(async (service) => {
          await conn.query(insertServiceQuery, [
            order_id,
            service.service_id,
            service.service_completed || 0,
          ]);
        })
      );
    }

    // Step 4: Insert into `order_status` table
    const insertOrderStatusQuery = `
      INSERT INTO order_status (order_id, order_status)
      VALUES (?, ?)`;

    const orderStatusResult = await conn.query(insertOrderStatusQuery, [
      order_id,
      order.order_status || 0,
    ]);

    if (orderStatusResult.affectedRows !== 1) {
      throw new Error("Failed to insert order status.");
    }

    // Step 5: Return response with order ID
    ordersData.order_id = order_id;
    return ordersData;
  } catch (error) {
    console.log("Error in sendOrders:", error);
    return false; // Return false on failure
  }
};

module.exports = { sendOrders };
