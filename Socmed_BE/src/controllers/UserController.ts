import { Request, Response } from "express";
import { updateUserSchema } from "../utils/validator/UserValidator";
import UserServices from "../services/UserServices";

export default new (class UserControllers {
  

  findAll(req: Request, res: Response) {
    UserServices.find(req, res);
  }

  findOne(req: Request, res: Response) {
    UserServices.findOne(req, res);
  }
  delete(req: Request, res: Response) {
    UserServices.delete(req, res);
  }
  update(req: Request, res: Response) {
    UserServices.update(req, res);
  }
})();
