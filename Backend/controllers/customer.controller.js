// import customer service
const customerService = require("../services/customer.service");

const addCustomer = async (req, res) => {
  try {
    const checkEmail = await customerService.checkIfCustomerExists(
      req.body.customer_email
    );

    if (checkEmail) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      const customerData = req.body;
      const newCustomer = await customerService.addCustomer(customerData);
      if (!newCustomer) {
        return res.status(500).json({ message: "failed to add customer due to server" });
      }
      res.status(201).json({
        message: "Customer added successfully",
        customer: newCustomer,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addCustomer,
};
