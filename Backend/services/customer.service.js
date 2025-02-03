// import db connection
const conn = require("../config/db.config");
const checkIfCustomerExists = async (email) => {
  const checkEmail =
    "SELECT * FROM customer_identifier WHERE customer_email = ?";
  const rows = await conn.query(checkEmail, [email]);
  if (rows.length > 0) {
    return true;
  }
  return false;
};

const addCustomer = async (customer) => {
    let returnDatas={}
  try {
    const quary1 =
      "INSERT INTO customer_identifier(customer_email,customer_phone_number) VALUES(?,?)";
    const row1 = await conn.query(quary1, [
      customer.customer_email,
      customer.customer_phone_number,
    ]);
    const customer_id = row1.insertId;

    const quary2 =
      "INSERT INTO customer_info(customer_id,customer_first_name,customer_last_name,active_customer_status) VALUES(?,?,?,?)";
    const row2 = await conn.query(quary2, [
      customer_id,
      customer.customer_first_name,
      customer.customer_last_name,
      customer.active_customer_status,
    ]);
    returnDatas={
        
   customer_id:customer_id

    }
  } catch (error) {
    console.log(error);
  }

  return returnDatas;
};
const getAllCustomers=async()=>{
  // selelct all customers fro those two tables

  try {
    
    const allCustomers =
      "SELECT * FROM customer_identifier INNER JOIN  customer_info  ON customer_identifier.customer_id = customer_info.customer_id ORDER BY customer_identifier.customer_id DESC limit 10 "; 
      const rows = await conn.query(allCustomers);
      return rows;
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  checkIfCustomerExists,
  addCustomer,
  getAllCustomers,
};
