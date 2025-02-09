const express = require("express");
const routes = express.Router();
// import vehicle controller

const vehicleController = require("../controllers/vehicle.controller");

// vehicle routes
routes.post("/api/addvehicle/:customer_id", vehicleController.addVehicle);
routes.get("/api/addvehicle/:customer_id", vehicleController.singelVehicleInfo)
routes.get("/api/getvehicle/:vehicle_id",vehicleController.eachVehicleInfo)

module.exports = routes


