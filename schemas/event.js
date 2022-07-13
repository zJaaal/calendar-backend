const Joi = require("joi");

const eventSchema = Joi.object({
  title: Joi.string().required(),
  notes: Joi.string(),
  start: Joi.date().required(),
  end: Joi.date().greater(Joi.ref("start")).required(),
});

module.exports = {
  eventSchema,
};
