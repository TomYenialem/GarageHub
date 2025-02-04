const express = require("express");
const routes = express.Router();
// import vehicle controller

const vehicleController = require("../controllers/vehicle.controller");

// vehicle routes
routes.post("/api/addvehicle/:customer_id", vehicleController.addVehicle);

module.exports = routes


