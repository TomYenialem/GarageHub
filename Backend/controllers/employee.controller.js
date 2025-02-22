// Import the employee service
const employeeService = require("../services/employee.service");
// Create the add employee controller
async function createEmployee(req, res, next) {
  // console.log(req.headers);

  // Check if employee email already exists in the database
  const employeeExists = await employeeService.checkIfEmployeeExists(
    req.body.employee_email
  );
  // If employee exists, send a response to the client
  if (employeeExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!",
    });
  } else {
    try {
      const employeeData = req.body;
      // Create the employee
      const employee = await employeeService.createEmployee(employeeData);
      if (!employee) {
        res.status(400).json({
          error: "Failed to add the employee!",
        });
      } else {
        res.status(200).json({
          message: "Employee added successfully!",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
}
async function getAllEmployees(req, res) {
  try {
    const allEmployees = await employeeService.getAllEmployees();
    res.status(200).json({
      data: allEmployees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong!",
    });
  }
}

const editEmployesInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedEmployee = await employeeService.editEmployee(id, data);
    if (!updatedEmployee) {
      return res.status(404).json({
        error: "Employee not found!",
      });
    }
    return res.status(200).json({
      messge: "Employee updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Something went wrong!",
    });
  }
};
const getSingleEmployeeInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getSingleEmployee(id);
    if (!employee) {
      return res.status(404).json({
        error: "Employee not found!",
      });
    }
    return res.status(200).json({
      data: employee,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteEmployees = async (req, res) => {
  const { id } = req.params;

  try {
    // Now, delete the employee
    const deleteEmployeeRequest = await employeeService.deleteEmployee(id);

    if (!deleteEmployeeRequest) {
      return res.status(404).json({
        error: "Employee not found!",
      });
    }

    return res.status(200).json({
      message: "Employee deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while deleting the employee.",
    });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  editEmployesInfo,
  getSingleEmployeeInfo,
  deleteEmployees,
};
