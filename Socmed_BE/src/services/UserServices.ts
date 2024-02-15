import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import UserController from "../controllers/UserController";
import { Request, Response } from "express";
import { updateUserSchema } from "../utils/validator/UserValidator";
import * as bcrypt from "bcrypt";

export default new (class UserService {
  private readonly UserRepository: Repository<User> =
    AppDataSource.getRepository(User);

    async find(req: Request, res: Response): Promise<Response> {
      try {
        const users = await this.UserRepository.find({
          select : [
            "id",
          "full_name",
          "user_name",
          "email",
          "bio",
          "profile_picture",
          "image_cover",
          ]
        })
        return res.status(200).json({  
          message: "Success Getting All Users",
          data: users, 
      });
      } catch (error) {
      res.status(500).json({ error: "error while getting users" });
      }
    }

    async findOne(req: Request, res: Response): Promise<Response>{
      try {
        const id = parseInt(req.params.id, 10)
        const user = await this.UserRepository.findOne({
          where : {id}
        })
        if(!user) return res.json({message: "User ID Not Found"})
        return res.status(200).json({ 
          message: "success getting a User",
          data: user,
        });
      } catch (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

    async delete(req : Request, res : Response): Promise<Response>{
      try {
        const id = parseInt(req.params.id, 10)
        const user = await this.UserRepository.delete(id)
        return res.status(200).json({ 
          message: "Success Deleting a User",
          data: user,
        });
      } catch (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

  
    async update(req: Request, res: Response) : Promise<Response> {
      try {
        const id = parseInt(req.params.id, 10)
        
        const obj = await this.UserRepository.findOne({
          where: {
            id
          }
        })
  
        const data = req.body;
  
        const { error, value } = updateUserSchema.validate(data)
        if(error) return res.status(400).json(error.details[0].message)
        
        if (data.password && data.password !== obj.password)

        if(data.fullname) {
          obj.full_name = value.fullname
        }
  
        if(data.username) {
          obj.user_name = value.username
        }
  
        if(data.email) {
          obj.email = value.email
        }
  
        if (data.password) {
          const hashPassword = await bcrypt.hash(data.password, 10);
          obj.password = hashPassword;
        }

        if(data.profile_picture) {
          obj.profile_picture = value.profile_picture
        }
        if(data.image_cover) {
          obj.image_cover = value.image_cover
        }
        if(data.bio) {
          obj.bio = value.bio
        }
  
        const user = await this.UserRepository.save(obj)
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json(error)
      }
    }
  
})();
