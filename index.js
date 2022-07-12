const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//Create express server
const app = express();

//Database
dbConnection();

//Public folder
app.use(express.static("public")); //This a middleware

//reading and parsing
app.use(express.json()); //This middleware will read the body in json format

//Routes
app.use("/api/auth", require("./routes/auth"));

//Listen to request
app.listen(process.env.PORT, () =>
  console.log(`Server running on port: ${process.env.PORT}`)
);
