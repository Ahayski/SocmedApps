// import { Repository, getRepository } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { User } from "../entity/User";
// import { Request, Response } from "express";

// export default new class FollowService {
//   private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User);

//     async follow( req: Request, res: Response): Promise<Response> {
//         try {
//             const loginSession = res.locals.loginSession;
//             const followingId = Number(req.body.following);

//             const follower = await this.UserRepository.findOne({
//                 where: {
//                     id: loginSession.user.id
//                 },
//                 relations: ["following"]
//             })

//             const following = await this.UserRepository.findOne({
//                 where: {
//                     id: followingId
//                 }
//             })

//             if (!follower || !following) {
//                 return res.status(404).json({ error: "User not found" });
//             }

//             const isFollowing = follower.following.some(
//                 (user) => user.id === following.id
//             );
//             if (isFollowing) {
//                 follower.following = follower.following.filter(
//                 (user) => user.id !== following.id
//                 )
//             } else {
//                 follower.following.push(following)
//             }

//             await this.UserRepository.save(follower);
//             ReidsClient.del(loginSession.user.id.toString());
//             return res.status(200).json({
//                 message: isFollowing ? "Unfollowed" : "Followed",
//                 user: follower.full_name,
//                 following: following.full_name
//             })
//             } catch (error) {
//                 return res.status(500).json({
//                     error: "Error while following/unfollowing user"
//             })
//         }
//     }
 
// }
