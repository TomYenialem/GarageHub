const express = require("express");
const routes = express.Router();
// import vehicle controller

const vehicleController = require("../controllers/vehicle.controller");

// vehicle routes
routes.post("/api/addvehicle/:customer_id", vehicleController.addVehicle);
routes.get("/api/addvehicle/:customer_id", vehicleController.singelVehicleInfo)
routes.get("/api/getvehicle/:vehicle_id",vehicleController.eachVehicleInfo)
routes.put("/api/editvehicle/:vehicle_id", vehicleController.editVehicles);

module.exports = routes


