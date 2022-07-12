const { response, request } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateJWT = (req = request, res = response, next) => {
  const token = req.headers["x-token"];

  if (!token) {
    return res.status(401).json({
      status: "Error",
      errorMessage: "There's no token in the request",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_KEY);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      status: "Error",
      errorMessage: "Token is invalid",
    });
  }

  next();
};

module.exports = {
  validateJWT,
};
