import * as Joi from 'joi';

export const validationSchema = Joi.object({
  MESSAGE_QUEUE_HOST: Joi.string().required(),
  MESSAGE_QUEUE_PORT: Joi.number().required(),
});
