// import customer service
const customerService = require("../services/customer.service");

const addCustomer = async (req, res) => {
  try {
    const checkEmail = await customerService.checkIfCustomerExists(
      req.body.customer_email
    );

    if (checkEmail) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      const customerData = req.body;
      const newCustomer = await customerService.addCustomer(customerData);
      if (!newCustomer) {
        return res
          .status(500)
          .json({ error: "failed to add customer due to server" });
      }
      res.status(201).json({
        message: "Customer added successfully",
        customer: newCustomer,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    if (!customers) {
      return res
        .status(500)
        .json({ error: "Failed to get customers due to server" });
    } else {
      res.status(200).json({ data: customers });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const singleCustomer = async(req,res)=>{
  try {
    const {id}=req.params
    const customer=await customerService.getSingleCustomer(id)
    if(!customer){
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json({data:customer})
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}
const editCustomerInfo=async(req,res)=>{
  try {
    const {id}=req.params
    const customerData=req.body
    const updatedCustomer=await customerService.editCustomer(id,customerData)
    if(!updatedCustomer){
      return res.status(404).json({ error: "Customer not found" });
    }
    
    res.status(200).json({ message: "Customer updated successfully", customer: updatedCustomer });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  addCustomer,
  getAllCustomers,
  singleCustomer,
  editCustomerInfo,
};
