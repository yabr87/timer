const Joi = require('joi');

const validateBodySchema = Joi.object({
  duration: Joi.number().integer(),
  todo: Joi.string().required(),
  isDone: Joi.boolean(),
});

module.exports = {
  validateBodySchema,
};
