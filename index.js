const express = require("express");
require("dotenv").config();

//Create express server
const app = express();

//Routes
app.use("/api/auth", require("./routes/auth"));
//Public folder
app.use(express.static("public")); //This a middleware

//Listen to request
app.listen(process.env.PORT, () =>
  console.log(`Server running on port: ${process.env.PORT}`)
);
