
const vehicleService=require('../services/vehicle.service') 

const addVehicle = async (req, res) => {
  try {
    const { customer_id } = req.params; // Get customer_id from URL params
    const vehicleData = req.body;

    if (!customer_id || isNaN(customer_id)) {
      return res.status(400).json({ message: "Invalid Customer ID" });
    }

    // Ensure customer_id is a number
    const parsedCustomerId = parseInt(customer_id);

    const vehicle = { ...vehicleData, customer_id: parsedCustomerId };

    const newVehicleId = await vehicleService.addVehicleForCustomer(vehicle);

    if (!newVehicleId) {
      return res.status(400).json({ message: "Failed to add vehicle" });
    }

    res.status(201).json({
      message: "Vehicle added successfully",
      vehicle_id: newVehicleId,
    });
  } catch (error) {
    console.error("Error in addVehicle:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addVehicle,
};
