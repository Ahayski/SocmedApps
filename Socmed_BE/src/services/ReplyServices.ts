import { Repository } from "typeorm"
import { Reply } from "../entity/Reply"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"

export default new class ReplyServices {
    private readonly ReplyRepository : Repository<Reply>= AppDataSource.getRepository(Reply)
    async find(req : Request, res : Response): Promise<Response>{
        try {
            const reply = await this.ReplyRepository.findOne({
                relations:["user","thread"],
                order : {
                    created_at: "DESC"
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
            const {error, value} = 
        } catch (error) {
            
        }
    }
}