// Import the express module
const express = require("express");
// Import the dotenv module and call the config method to load the environment variables
require("dotenv").config();
// Import the sanitizer module
const sanitize = require("sanitize");
// Import the CORS module
const cors = require("cors");
// Set up the CORS options to allow requests from our front-end

// Create a variable to hold our port number
const port = process.env.PORT || 3000;
// Import the router
const router = require("./routes");
// Create the webserver
const app = express();
app.use(express.json());
// Add the CORS middleware
app.use(cors());
// Add the express.json middleware to the application
// Add the sanitizer to the express middleware
app.use(sanitize.middleware);
// Add the routes to the application as middleware
app.use(router);
// Start the webserver
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
// Export the webserver for use in the application
module.exports = app;
