const User = require("../models/User");

const checkEmail = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email }).exec();
  if (user) {
    res.status(500).json({
      errorMessage: "An user is using this email",
    });
  } else next();
};

module.exports = { checkEmail };
