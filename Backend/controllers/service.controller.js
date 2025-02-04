// import serive.serive from serive
const service = require("../services/service.service");

const addService = async (req, res) => {
  try {
    const services = req.body;
    const result = await service.addNewSerive(services);
    if (!result) {
      res.status(400).json({
        error: "Failed to add service",
      });
    }
    res.status(200).json({
      message: "Service added successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
const getAllServcies = async (req, res) => {
  try {
    const result = await service.getAllServcies();
    res.status(200).json({
      message: "Services retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await service.deleteService(id);
    if (!result) {
      return res.status(404).json({
        error: "Service not found",
      });
    }
    return res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
const editServices = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = req.body;
    const result = await service.editServices(id, updatedService);
    if (!result) {
      return res.status(404).json({
        error: "Service not found",
      });
    }
    return res.status(200).json({
      message: "Service updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
module.exports = {
  addService,
  getAllServcies,
  deleteService,
  editServices,
};
