import { Repository, getRepository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new class FollowService {
  private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User);

  async followUser(followerId: number, followingId: number): Promise<void>{
    const follower = await this.UserRepository.findOne({where : {id : followerId}, relations: ['following']})
    const following = await this.UserRepository.findOne({where : {id : followingId}, relations: ['followers']})

    if (follower && following){
      follower.following = follower.following ||[];
      follower.following.push(following)
      
      following.followers = following.followers ||[];
      following.followers.push(follower)

      await this.UserRepository.save(follower)
      await this.UserRepository.save(following)

    }
    
  }
 
}
