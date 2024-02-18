import {  Repository } from "typeorm"
import { Thread } from "../entity/Thread"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { createThreadSchema, updateThreadSchema } from "../utils/validator/ThreadValidator"

export default new class ThreadServices {
    private readonly ThreadRepository : Repository<Thread> = AppDataSource.getRepository(Thread)

    async find(req :Request, res:Response) : Promise<Response>{
        try {
            //melakukan pencarian untuk semua data tetapi diurutkan secara descendant
            const threads = await  this.ThreadRepository.find({
                order: {
                    id:"DESC"
                },
                relations: ["user", "likes.user","replies.user"],
                // relations : {
                //     user: true,
                //     likes:true,
                //     replies:true,
                // },
                select:{ 
                    user: {
                        user_name: true,
                    },
                    likes: {
                        id: true,    
                        user: {
                            id: true,
                            user_name: true
                        }
                    },
                    replies: {
                        id: true,
                        content:true,
                        file_reply:true,
                        created_at:true,
                        user: {
                            id: true,
                            user_name: true
                        }
                    }
                }
            })
            console.log(threads);
            
            return res.status(200).json({message : "Succes Getting All Threads",threads})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findOne(req :Request, res:Response) : Promise<Response>{
        try {
            // mengambil id dari req params lalu diubah tipe datanya jadi integer
            const id = parseInt(req.params.id, 10)
            //melakukan pencarian data sesuai dari id nya
            const threads = await  this.ThreadRepository.findOne({where: {id}})
            if(!threads)
            return res.status(404).json({
                message: `Thread ID not found`
            })
            return res.status(200).json({message : "Succes Getting a Thread",threads})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
   
    async create(req :Request, res:Response): Promise<Response>{
        try {
            //mendapatkan data inputan
            const data = req.body
            const loginSession = res.locals.loginSession;
            console.log("ini session",loginSession);
            
            //melakukan pengecekan pada joi
            const {error,value} = createThreadSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)

            //membuat sebuah object berdasarkan value yang telah di validasi
            const obj = this.ThreadRepository.create({
                content: value.content,
                image_thread : value.image_thread,
                user :{
                    id :loginSession.obj.id
                }
            })
            console.log("ini object",obj);
            
            //setelah objek dibuat lalu akan di save di database ata repository
            const threads = await  this.ThreadRepository.save(obj)
            return res.status(200).json(threads)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async update(req: Request, res :Response): Promise<Response>{
        try {
            // mengambil id dari req params lalu diubah tipe datanya jadi integer
            const id = parseInt(req.params.id, 10)

            //setelah mendapatkan id lalu akan 
            //melakukan pencarian data dengan findOne sesuai id nya
            const obj = await this.ThreadRepository.findOne({
                where:{
                    id
                }
            })

            //melakukan pencarian data brdasarkan id tadi,jika tidak ada makan akan dihanddle dalam error
            if(!obj)
            return res.status(404).json({
                message: `Thread ID not found`
            })

            //mendapatkan data dari inputannya
            const data = req.body
            //melakukan pengecekan menggunakan validator
            const {error,value} = updateThreadSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)


            // if (data) {
            //     obj.content= value.content
            //     obj.image_thread= value.image_thread
            // }
            if (data.content){
                obj.content= value.content
            }
            if (data.image_thread){
                obj.image_thread= value.image_thread
            }

            const thread = await  this.ThreadRepository.save(obj)
            return res.status(200).json(thread)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response>{
        try {
            // mengambil id dari req params lalu diubah tipe datanya jadi integer
            const id = parseInt(req.params.id, 10)
            //setelah mendapatkan id lalu akan melakukan pencarian data dengan findOne sesuai id nya
            const obj = await this.ThreadRepository.findOne({where : {id}}) 
             //melakukan pencarian data brdasarkan id tadi,jika tidak ada makan akan dihanddle dalam error
            if(!obj) return res.json({message :  "Thread Id not found"})

            //se
            const thread = await this.ThreadRepository.delete(id)
            return res.status(200).json({messagae : "Succses Delete Thread", thread})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}



// async find (req : Request, res : Response): Promise<Response>{
//     try {
//         const threads = await this.ThreadRepository.find({
//             relations : ["user","likes.user","replies.user"],
//             select : {
//                 user: {
//                     id:true,
//                     user_name: true,
//                     full_name:true,
//                     profile_picture: true
//                 },
//                 likes : {
//                     id : true,
//                     user : {
//                         id: true,
//                         user_name:true
//                     }
//                 }
//             },
//             order : {
//                 id : "DESC"
//             }
        
//         })
//         return res.status(200).json(
//             threads.map((thread) => ({
//                 ...thread,
//                 likeCount: thread.likes.length,
//                 replyCount: thread.replies.length
//             }))
//         )
        
//     } catch (error) {
//         return res.status(500).json({
//             error: "Error while finding threads",
//             message: error
//         })
//     }
// }