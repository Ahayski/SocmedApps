import { Request, Response } from "express";
import FollowService from "../services/FollowServices";

export class FollowController {
  private followService: FollowService;

  constructor() {
    this.followService = new FollowService();
  }

  
}
