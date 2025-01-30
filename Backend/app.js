const express = require("express");
const app = express();
require("dotenv").config();
const routers = require("./routes");
const cors = require("cors");
const santizer = require("sanitize");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: process.env.FRONTEND_UR,

  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(santizer.middleware);
app.use(routers);
// add santizer

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
