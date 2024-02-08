import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import UserController from "../controllers/UserController";

export default new class UserService {
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

    async delete(idUser: string): Promise<object | string> {
        try {
            const response = await this.UserRepository.delete(idUser)
            return {
                message: "Data Succesfully Deleted",
                data: response
            }
        } catch (error) {
            throw error
        }
    }

}