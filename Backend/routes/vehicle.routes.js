const express = require("express");
const router = express.Router();
// import vehicle controller

const vehicleController = require("../controllers/vehicle.controller");

// vehicle routes
router.post("/addvehicle", vehicleController.addVehicle);

module.exports = router;
