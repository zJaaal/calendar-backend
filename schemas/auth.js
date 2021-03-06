const joi = require("joi");

const userRegisterSchema = joi.object({
  name: joi.string().min(5).max(30).required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .min(8)
    .pattern(
      new RegExp(
        `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$`
      )
    ),
});

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .min(8)
    .pattern(
      new RegExp(
        `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$`
      )
    ),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
};
