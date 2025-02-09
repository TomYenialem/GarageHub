// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// import vehicle routes
 const vehicleRouter = require("./vehicle.routes");
// Import the employee routes
const employeeRouter = require("./employee.routes");
// Import the login routes
// add serivce routes
 const serviceRouter = require("./service.routes");
const loginRoutes = require("./login.routes");
// Add the install router to the main router
const addCustomerRoutes = require('./customer.routes')
const orderRoutes = require("./orders.routes");
router.use(installRouter);
// Add the employee routes to the main router
router.use(employeeRouter);
// Add the login routes to the main router
router.use(loginRoutes);
router.use(addCustomerRoutes)
router.use(vehicleRouter)
router.use(serviceRouter)
router.use(orderRoutes)

// Add the vehicle routes to the main router

module.exports = router;
