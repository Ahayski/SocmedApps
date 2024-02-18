import { Repository } from "typeorm"
import { Reply } from "../entity/Reply"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { replySchema } from "../utils/validator/ReplyValidator"

export default new class ReplyServices {
    private readonly ReplyRepository : Repository<Reply>= AppDataSource.getRepository(Reply)
    async find(req : Request, res : Response): Promise<Response>{
        try {
            const reply = await this.ReplyRepository.find({
                relations:["user","thread"],
                order : {
                    id: "DESC"
                }
            })
            
            return res.status(200).json({
                message: "Success",
                data: reply
            })
        } catch (error) {
            
            return res.status(500).json({
                error: "Error while finding replies",
                message: error
            })
        }
    }

    async create(req:Request, res: Response) : Promise<Response>{
        try {
            const loginSession = res.locals.loginSession

            const data = req.body
            const {error, value} = replySchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message) 

            const replies = this.ReplyRepository.create({
                content : value.content,
                file_reply : value.file_reply,
                thread : {
                    id : value.thread
                },
                user : {
                    id: loginSession.obj.id
                }
            })
            console.log("ini reply",replies);
            

            const response = await this.ReplyRepository.save(replies)
            console.log("ini response",response);
            return res.status(200).json({
                message : "Succes creating Reply",
                response
            })

        } catch (error) {
            return res.status(500).json({
                error : "Something error while creating reply",
                message : error
            })

        }
    }
}