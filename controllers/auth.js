const { response, request } = require("express"); //IntelliSense
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { encryptPassword } = require("../helpers/encryptPassword");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  try {
    const user = new User(req.body);

    user.password = encryptPassword(user.password);

    await user.save();

    const token = await generateJWT(user.id, user.name);
    res
      .status(201)
      .json({ status: "Completed", uid: user.id, name: user.name, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "An error occured",
      errorMessage: "Please contact an admin",
    });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({
        status: "An error ocurred",
        errorMessage: "Email doesn't exist",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        status: "An error ocurred",
        errorMessage: "Password is incorrect",
      });
    }

    const token = await generateJWT(user.id, user.name);

    res.json({
      status: "Completed",
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "An error occured",
      errorMessage: "Please contact an admin",
    });
  }
};

const renewToken = async (req, res = response) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.json({ status: "Complete", token });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
