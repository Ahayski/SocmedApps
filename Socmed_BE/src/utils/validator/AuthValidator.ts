import * as Joi from "joi"

export const registerSchema = Joi.object({
    user_name: Joi.string().required(),
    full_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
})

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})