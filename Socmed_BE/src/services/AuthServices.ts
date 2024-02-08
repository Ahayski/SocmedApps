import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default new class AuthService {
    private readonly AuthRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(reqBody: any): Promise<object | string> {
        try {

            const checkUserName = await this.AuthRepository.count({ where: { user_name: reqBody.user_name } })
            if (checkUserName > 0) return `Username: ${reqBody.user_name} has already used`

            const hashPassword = await bcrypt.hash(reqBody.password, 10)
            const obj = this.AuthRepository.create({
                user_name: reqBody.user_name,
                full_name: reqBody.full_name,
                email: reqBody.email,
                password: hashPassword,
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
            const checkUserName = await this.AuthRepository.findOne({ where: { user_name: reqBody.user_name } })
            if (!checkUserName) return `Username: ${reqBody.userName} haven't registered`

            const comparePassword = await bcrypt.compare(reqBody.password, checkUserName.password)
            if (!comparePassword) return `Password is wrong`

            const obj = this.AuthRepository.create({
                id: checkUserName.id,
                user_name: checkUserName.user_name,
                full_name: checkUserName.full_name,
                email: checkUserName.email
            })

            const token = jwt.sign({ obj }, "MATIINMIC", { expiresIn: "8h" })

            return {
                message: "Login success",
                token
            }
        } catch (error) {
            return "something error while  loggin"
        }
    }
}



