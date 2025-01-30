const express = require("express");
const routers = express.Router();
const intialInstall = require("./installRoute");
const employeeRoute = require("./employee.routes");
const loginRoute = require("./login.routes");

// Initial setup route

routers.use(intialInstall);
routers.use(employeeRoute);
routers.use(loginRoute);
module.exports = routers;
