const vehicleService = require("../services/vehicle.service");

const addVehicle = async (req, res) => {
  try {
    const { customer_id } = req.params; // Get customer_id from URL params
    const vehicleData = req.body;

    if (!customer_id || isNaN(customer_id)) {
      return res.status(400).json({ error: "Invalid Customer ID" });
    }

    const newVehicleId = await vehicleService.addVehicleForCustomer(
      customer_id,
      vehicleData
    );

    if (!newVehicleId) {
      return res.status(400).json({ error: "Failed to add vehicle" });
    }

    res.status(201).json({
      message: "Vehicle added successfully",
      vehicle_id: newVehicleId,
    });
  } catch (error) {
    console.error("Error in addVehicle:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addVehicle,
};
