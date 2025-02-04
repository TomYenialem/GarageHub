const express = require("express");
const routes = express.Router();
// import vehicle controller

const serviceController = require("../controllers/service.controller");

// vehicle routes
routes.post("/api/service", serviceController.addService);

module.exports = routes


