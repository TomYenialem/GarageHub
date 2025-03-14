const installService = require("../services/install");

// Create a function to install the database tables
async function install(req, res) {
  try {
    const result = await installService.install();
    console.log("Service result:", result);
    if (result.status === 200) {
      res.status(200).json({ message: "All tables are created" });
    } else {
      res.status(500).json({ message: result.message });
    }
  } catch (error) {
    console.error("Error in install controller:", error.message);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { install };
