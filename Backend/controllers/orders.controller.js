const orderServices = require("../services/orders.service");

const sendOrdersRequest = async (req, res) => {
  try {
    const order = req.body;
    const result = await orderServices.sendOrders(order);
    if (!result) {
      return res.status(400).json({ error: "Failed to send orders" });
    }
    res.status(200).json({ message: "Orders sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllOrdersInfo = async (req, res) => {
  try {
    const orders = await orderServices.getAllOrders();
    if (!orders) {
      return res.status(400).json({ error: "Failed to get orders" });
    } else {
      return res.status(200).json({
        data: orders,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
const editOrdersInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const order = req.body;

    const result = await orderServices.editOrders(id, order);
    if (!result) {
      return res.status(400).json({ error: "Failed to edit orders" });
    }
    res.status(200).json({ message: "Orders edited successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getsingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderServices.getSingleOrderInfo(id);
    if (!order) {
      return res.status(400).json({ error: "Failed to get order" });
    } else {
      return res.status(200).json({
        data: order,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  sendOrdersRequest,
  getAllOrdersInfo,
  editOrdersInfo,
  getsingleOrder,
};
