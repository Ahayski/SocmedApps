import { Equal, Repository } from "typeorm";
import { Follow } from "../entity/Follow";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import ResponseError from "../error/responseError";

export default new (class FollowService {
  private readonly FollowRepository: Repository<Follow> =
    AppDataSource.getRepository(Follow);

  async getFollows(id: any) {
    const follower = await AppDataSource.getRepository(User).find({
      where: { following: { follower: Equal(id) } },
      relations: {
        following: true,
      },
    });

    const following = await AppDataSource.getRepository(User).find({
      where: { follower: { following: Equal(id) } },
      relations: {
        follower: true,
      },
    });

    return {
      follower,
      following,
    };
  }

  async getFollow(id) {
    const check = await this.FollowRepository.count({
      where: {
        following: Equal(id),
        follower: Equal(id),
      },
    });
    if (check !== 0) return 0;
    return false;
  }

  async follow(to, from) {
    const chkFollow = await this.FollowRepository.countBy({
      following: Equal(from),
      follower: Equal(to),
    });
    if (chkFollow) throw new ResponseError(400, "You already follow this User");
    await this.FollowRepository.save({ following: from, follower: to });
    return {
      message: "Follow success",
    };
  }

  async unfollow(to, from) {
    const getFollow = await this.FollowRepository.findOne({
      where: { following: Equal(from), follower: Equal(to) },
      relations: {
        following: true,
        follower: true,
      },
    });
    if (!getFollow)
      throw new ResponseError(400, "You already unfollow this User");
    await this.FollowRepository.delete(getFollow.id);
    return {
      message: "Unfollow success",
    };
  }
})();
