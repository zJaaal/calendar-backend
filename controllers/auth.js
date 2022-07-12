const { response, request } = require("express"); //IntelliSense
const { userRegisterSchema, userLoginSchema } = require("../schemas/auth");

const createUser = async (req, res = response) => {
  res.status(201).json({ resMsg: "User created", ...req.body });
};

const loginUser = async (req, res = response) => {
  res.json({ resMsg: "User Logged in", ...req.body });
};

const renewToken = (req, res = response) => {
  res.json({ resMsg: "Token renew" });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
