import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";

export default new class AuthService {
    private readonly AuthRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(reqBody: any): Promise<object | string> {
        try {
            console.log(reqBody)
            const checkUserName = await this.AuthRepository.count({ where: { user_name: reqBody.user_name } })
            if (checkUserName > 0) return `Username: ${reqBody.user_name} has already used`

            const hashPassword = await bcrypt.hash(reqBody.password, 10)
            const obj = this.AuthRepository.create({
                user_name: reqBody.user_name,
                full_name: reqBody.full_name,
                email: reqBody.email,
                password: hashPassword
            })
            const resRegist = await this.AuthRepository.save(obj)

            return {
                message: "success",
                data: resRegist
            }
        } catch (error) {
            throw error;
        }
    }

    async login(reqBody: any): Promise<object | string> {
        try {
            const chckEmail = await this.AuthRepository.findOne({ where: { email: reqBody.email },
            select:{
                id:true,
                user_name:true,
                full_name:true,
                email:true,
                password:true
            }
            })
            if (!chckEmail) return `Username: ${reqBody.userName} haven't registered`
            console.log(chckEmail);

            const comparePassword = await bcrypt.compare(reqBody.password, chckEmail.password)
            if (!comparePassword) return `Password is wrong`
            
            const obj = this.AuthRepository.create({
                id: chckEmail.id,
                user_name: chckEmail.user_name,
                full_name: chckEmail.full_name,
                email: chckEmail.email,
                profile_picture: chckEmail.profile_picture,
                image_cover: chckEmail.image_cover,
                bio: chckEmail.bio
            })
            

            const token = jwt.sign({ obj }, "MATIINMIC", { expiresIn: "8h" })

            return {
                message: "Login success",
                token,
                data : obj
            }
        } catch (error) {
            return "something error while  loggin"
        }
    }
    async check(req: Request, res: Response): Promise<Response | void> {
        try {
            const userLogin = res.locals.loginSession;
            
            const user = await this.AuthRepository.findOne({
                where: {
                    id: userLogin.obj.id
                }
            })
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}



