const express = require("express");

//Create express server

const app = express();

//Routes

app.get("/", (req, res) => {
  res.json({
    hello: "Why are you requesting, theres nothing here",
  });
});

//Listen to request

app.listen(4000, () => console.log("Server running on port: 4000"));
