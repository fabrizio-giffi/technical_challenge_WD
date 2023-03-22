require("dotenv").config();
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// Api routes
const apiRoutes = require("./routes/api.routes");
app.use("/", apiRoutes);

require("./error-handling")(app);

module.exports = app;
