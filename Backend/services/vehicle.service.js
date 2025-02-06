const conn = require("../config/db.config");

const addVehicleForCustomer = async(customer_id,vehicle) => {
  try {
    // Step 1: Get customer_id using customer_emai


    // Step 2: Insert vehicle data
    const vehicleQuery = `
            INSERT INTO customer_vehicle_info
            (customer_id,vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [
     customer_id,
      vehicle.vehicle_year,
      vehicle.vehicle_make,
      vehicle.vehicle_model,
      vehicle.vehicle_type,
      vehicle.vehicle_mileage,
      vehicle.vehicle_tag,
      vehicle.vehicle_serial,
      vehicle.vehicle_color,
    ];

    const result = await conn.query(vehicleQuery, values);
    return result
  } catch (error) {
    console.error("Error inserting vehicle:", error);
    throw error;
  }
};

module.exports = {
  addVehicleForCustomer,
};

// Example Usage