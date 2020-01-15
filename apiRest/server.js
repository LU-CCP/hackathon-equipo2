const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8085;
const sqlConfig = require("./config");
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.listen(port, "0.0.0.0", function() {
  console.log("Corriendo servidor", port);
});

module.exports = app;
