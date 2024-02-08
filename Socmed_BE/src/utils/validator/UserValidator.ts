import * as Joi from "joi";

export const updateUserSchema = Joi.object({
    user_name: Joi.string().required(),
    full_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    profile_picture: Joi.string().max(255).required(),
    image_cover: Joi.string().max(255).required(),
    description: Joi.string().max(255).required(),
})