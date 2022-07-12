const { response } = require("express");
const joi = require("joi");

const validateSchemas =
  (schema) =>
  async (req, res = response, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  };
module.exports = {
  validateSchemas,
};
