const conn = require("../config/db.config");
const bycrpt = require("bcrypt");

// A function to check if employee exists in the database
async function checkIfEmployeeExists(email) {
  const query = "SELECT * FROM employee WHERE employee_email = ? ";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// create a function to creaye a new employee
const createNewEmploy = async (employee) => {
    let employeData={}
  try {
    const salt=await bycrpt.genSalt(10);
    const hashedPassword=await bycrpt.hash(employee.password,salt);
    const query1 = `
      INSERT INTO employee (employee_email, active_employee) 
      VALUES (?, ?)
    `;
    const result = await conn.query(query1, [
      employee.email,
      employee.active_employee,
    ]);
    console.log(result);

    const employed_id = result.insertId;
    const query2 =
      "INSERT INTO employee_info(employee_id, employee_first_name, employee_last_name, employee_phone) VALUES(?,?,?,?)";
    const row2 = await conn.query(query2, [
      employed_id,
      employee.first_name,
      employee.last_name,
      employee.phone,
    ]);

    const query3 =
      "INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)";
    const rows3 = await conn.query(query3, [employed_id, hashedPassword]);
    const query4 =
      "INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)";
    const rows4 = await conn.query(query4, [
      employed_id,
      employee.company_role_id,
    ]);
    
    employeData = {
      employee_id: employed_id,
    };

  } catch (error) {
    console.log(error);
  }
    return employeData;
};
async function getEmployeeByEmail(employee_email) {
  const query =
    "SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id = employee_info.employee_id INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id WHERE employee.employee_email = ?";
  const rows = await conn.query(query, [employee_email]);
  return rows;
}


module.exports = {
  checkIfEmployeeExists,
  createNewEmploy,
  getEmployeeByEmail,
};
