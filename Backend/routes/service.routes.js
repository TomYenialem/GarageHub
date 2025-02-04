const express = require("express");
const routes = express.Router();
// import vehicle controller

const serviceController = require("../controllers/service.controller");

// vehicle routes
routes.post("/api/service", serviceController.addService);

routes.get("/api/service", serviceController.getAllServcies);

routes.delete("/api/service/:id", serviceController.deleteService);

module.exports = routes;
