const express = require("express");
const router = express.Router();
const installController = require("../controllers/install");

router.get("/install", installController.install);

module.exports = router;
