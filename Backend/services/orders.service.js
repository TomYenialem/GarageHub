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
      order.order_hash || "default_hash", 

    ]);

    if (orderResult.affectedRows !== 1) {
      throw new Error("Failed to insert order.");
    }

    const order_id = orderResult.insertId; // Get the newly created order ID

    // Step 2: Insert into `order_info` table
    const insertOrderInfoQuery = `
      INSERT INTO order_info (order_id, order_total_price, additional_requests_completed,additional_request)
      VALUES (?,  ?, ?,?)`;

    const orderInfoResult = await conn.query(insertOrderInfoQuery, [
      order_id,
      order.order_total_price,
      order.additional_requests_completed || 0,
      order.additional_request || "", 
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

const getAllOrders=async()=>{
  try {
    const allOrders = ` SELECT orders.*, 
  order_info.*, 
  order_services.*, 
  order_status.*, 
  customer_info.customer_first_name,  
  customer_info.customer_last_name,
  customer_identifier.customer_phone_number,
  customer_identifier.customer_email,
  customer_vehicle_info.vehicle_type, 
   customer_vehicle_info.vehicle_year,
   customer_vehicle_info.vehicle_mileage,
   employee_info.employee_first_name,
   employee_info.employee_last_name
  
    FROM orders 
      INNER JOIN  order_info  ON orders.order_id=order_info.order_id
      INNER JOIN order_services ON order_services.order_id=orders.order_id 
      INNER JOIN order_status ON order_status.order_id=orders.order_id 
      INNER JOIN customer_info ON orders.customer_id=customer_info.customer_id
      INNER JOIN customer_identifier ON orders.customer_id=customer_identifier.customer_id
      INNER JOIN employee_info ON orders.employee_id=employee_info.employee_id
       INNER JOIN customer_vehicle_info ON orders.vehicle_id = customer_vehicle_info.vehicle_id 
       ORDER BY orders.order_date DESC`;
      
    const result = await conn.query(allOrders);
    return result;
    
  } catch (error) {
    console.log(error)
  }
}

const editOrders=async(order_id,order)=>{ 
  try {
    const editOrder = ` UPDATE order_status SET order_status =? WHERE order_id =? `;
    const result = await conn.query(editOrder, [order.order_status, order_id]);
    return result;
  } catch (error) {
    console.log(error)
  }
}
const getSingleOrderInfo=async(order_id)=>{
  try {
    const singleOrderInfo = `SELECT orders.*, 
  order_info.*, 
  order_services.*, 
  order_status.*, 
  customer_info.customer_first_name,  
  customer_info.customer_last_name,
  customer_identifier.customer_phone_number,
  customer_identifier.customer_email,
  customer_vehicle_info.vehicle_type, 
   customer_vehicle_info.vehicle_year,
   customer_vehicle_info.vehicle_mileage,
   employee_info.employee_first_name,
   employee_info.employee_last_name
  
    FROM orders 
      INNER JOIN  order_info  ON orders.order_id=order_info.order_id
      INNER JOIN order_services ON order_services.order_id=orders.order_id 
      INNER JOIN order_status ON order_status.order_id=orders.order_id 
      INNER JOIN customer_info ON orders.customer_id=customer_info.customer_id
      INNER JOIN customer_identifier ON orders.customer_id=customer_identifier.customer_id
      INNER JOIN employee_info ON orders.employee_id=employee_info.employee_id
       INNER JOIN customer_vehicle_info ON orders.vehicle_id = customer_vehicle_info.vehicle_id 
       WHERE orders.order_id=?
       ORDER BY orders.order_date DESC `;
       const result = await conn.query(singleOrderInfo, [order_id]);
       return result;
    
  } catch (error) {
    console.log(error)
  }
}
module.exports = { sendOrders,getAllOrders,editOrders,getSingleOrderInfo};
