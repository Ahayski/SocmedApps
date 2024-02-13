import * as Joi from "joi"

export const createThreadSchema = Joi.object({
    content: Joi.string().allow(null),
    image_thread: Joi.string().allow(null)
})

export const updateThreadSchema = Joi.object({
    content: Joi.string().allow(null),
    image_thread: Joi.string().allow(null)
})