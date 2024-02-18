import * as Joi from "joi"

export const replySchema = Joi.object({
    content: Joi.string().allow().optional(),
    file_reply: Joi.string().allow().optional(),
    thread: Joi.number().required(),
    user: Joi.number() 
})