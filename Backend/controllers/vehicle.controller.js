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
const singelVehicleInfo=async(req,res)=>{
  try {
    const { customer_id } = req.params;
    const vehicles = await vehicleService.customerVehicle(customer_id);
    if(!vehicles){
      return res.status(400).json({ error: "Failed to fetch vehicle" });
    }
    return res.status(200).json({
    data: vehicles
    })
    
  } catch (error) {
    console.log(error)
     res.status(500).json({ error: "Internal Server Error" });
  }

}

const eachVehicleInfo=async(req,res)=>{
  try {
    const { vehicle_id } = req.params;
    const vehicle = await vehicleService.singleVehicle(vehicle_id);
    if(!vehicle){
      return res.status(400).json({ error: "Failed to fetch vehicle" });
    }
    return res.status(200).json({
    data: vehicle
    })
    
  } catch (error) {
    
  }
}
const editVehicles=async(req,res)=>{
  try {
    const { vehicle_id } = req.params;
    const vehicleData = req.body;
    const vehicle = await vehicleService.editVehicleInfo(vehicle_id, vehicleData);
    if(!vehicle){
      return res.status(400).json({ error: "Failed to edit vehicle" });
    }
    return res.status(200).json({
    message: "Vehicle edited successfully",
    data: vehicle
    })
    
  } catch (error) {
    console.log(error)
     res.status(500).json({ error: "Internal Server Error" });
    
  }
}
module.exports = {
  addVehicle,
  singelVehicleInfo,
  eachVehicleInfo,
  editVehicles,
 
};
