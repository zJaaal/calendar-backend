const { response, request } = require("express"); //IntelliSense
const { userRegisterSchema } = require("../schemas/auth");

const createUser = async (req, res = response) => {
  try {
    const value = await userRegisterSchema.validateAsync(req.body);
    res.status(201).json({ resMsg: "User created", ...value });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  res.json({ resMsg: "User Logged in", email, password });
};

const renewToken = (req, res = response) => {
  res.json({ resMsg: "Token renew" });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
