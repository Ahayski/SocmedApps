import * as Joi from "joi";

export const createThreadSchema = Joi.object({
  content: Joi.string().allow(null).optional(),
  image_thread: Joi.string().allow(null).optional(),
  user: Joi.number(),
});

export const updateThreadSchema = Joi.object({
  content: Joi.string().allow(null).optional(),
  image_thread: Joi.string().allow(null).optional(),
});
