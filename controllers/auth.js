const { response } = require("express"); //IntelliSense

const createUser = (req, res = response) => {
  res.json({ resMsg: "User created" });
};

const loginUser = (req, res) => {
  res.json({ resMsg: "User Logged in" });
};

const renewToken = (req, res) => {
  res.json({ resMsg: "Token renew" });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
