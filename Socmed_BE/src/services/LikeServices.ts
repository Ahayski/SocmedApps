import { Repository } from "typeorm"
import { Like } from "../entity/Like"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { createLikeSchema } from "../utils/validator/LikeValidator"

export default new class LikeServices {
    private readonly LikeRepository : Repository<Like> = AppDataSource.getRepository(Like) 

    async find(req: Request, res :Response): Promise<Response>{
        try {
            const like = await this.LikeRepository.find({
                relations :["user","thread"]
            })
            console.log(like);
            
            return res.status(200).json({
                message: "Success",
                data: like
            })
        } catch (error) {
            return res.status(500).json({
                error: "Error while finding like",
                message: error
            })
        }
    }

    async create(req:Request, res:Response): Promise<Response>{
        try {
            const data = req.body
            const {error,value} = createLikeSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)
            console.log("ini value",value);
            
            const loginSession = res.locals.loginSession
            console.log("ini session",loginSession);
            
            //UnLike Handdle I
            const likeSelected = await this.LikeRepository.findOne({
                where: {
                    user: {
                        id: loginSession.obj.id
                    },
                    thread: {
                        id: value.thread
                    }
                }
            })

            //Logic UnLike Handdle I
            if(likeSelected) {
                await this.LikeRepository.remove(likeSelected);
                return res.status(200).json({
                    message: "Like removed successfully"
                })
            }
    
            const like = this.LikeRepository.create({
                thread: value.thread,
                user: {
                    id: loginSession.obj.id
                }
            })
    
            const Response  = await this.LikeRepository.save(like);
            return res.status(200).json({
                message: "Like created successfully",
                data: Response
            })
        } catch (error) {
            return res.status(500).json({
                error: "Error while creating like",
                message: error
            })
        }
    }
}