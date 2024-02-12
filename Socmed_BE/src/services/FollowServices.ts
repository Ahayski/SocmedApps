import { Repository, getRepository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default class FollowService {
  private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User);

 
}
