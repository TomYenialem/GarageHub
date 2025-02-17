// Import the express module
const express = require("express");
const authMiddleware = require("../middlewares/authorization")
// Call the router method from express to create the router
const router = express.Router();
// Import the employee controller
const employeeController = require("../controllers/employee.controller");
// Import middleware
// const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add employee request on post
router.post(
  "/api/employee",
  // [authMiddleware.authorization, authMiddleware.isAdmin],

  employeeController.createEmployee
);
router.get('/api/employees',
  employeeController.getAllEmployees)

  router.put('/api/employees/:id',employeeController.editEmployesInfo)
  router.get("/api/employees/:id", employeeController.getSingleEmployeeInfo);
  router.delete("/api/employees/:id", employeeController.deleteEmployees);
// Export the router
module.exports = router;
