const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJWT = (uid, name) => {
  return new Promise((res, rej) => {
    const payload = {
      uid,
      name,
    };

    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          rej("Couldn't generate JWT");
        } else res(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};
