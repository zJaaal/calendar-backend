const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

module.exports = {
  encryptPassword,
};
