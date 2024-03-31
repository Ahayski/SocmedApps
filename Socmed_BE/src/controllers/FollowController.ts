import { Request, Response } from "express";
import FollowService from "../services/FollowServices";

export default new (class FollowControllers {
  async getFollows(req: Request, res: Response) {
    try {
      const response = await FollowService.getFollows(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  async follow(req: Request, res: Response) {
    try {
      const followingId = req.body.following;
      if (!followingId) {
        return res.status(400).json({ message: "Following ID is required" });
      }
      const response = await FollowService.follow(
        followingId,
        res.locals.session.id
      );
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }

  async unfollow(req: Request, res: Response) {
    try {
      const followerId = req.query.follower;
      if (!followerId) {
        return res.status(400).json({ message: "Follower ID is required" });
      }
      const response = await FollowService.unfollow(
        followerId,
        res.locals.session.id
      );
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  }
})();
