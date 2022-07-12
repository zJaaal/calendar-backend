const { response, request } = require("express"); //IntelliSense
const User = require("../models/User");

const createUser = async (req, res = response) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({ resMsg: "User created", ...req.body });
  } catch (e) {
    res.status(500).json({
      msg: "Please contact an admin",
    });
  }
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
