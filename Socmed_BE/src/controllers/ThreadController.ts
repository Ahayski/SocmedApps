import { Request, Response } from "express";
import { updateUserSchema } from "../utils/validator/UserValidator";
import ThreadServices from "../services/ThreadServices";
import ThreadWorker from "../workers/ThreadWorker";
import ThreadQueue from "../queue/ThreadQueue";

export default new (class ThreadControllers {
  findAll(req: Request, res: Response) {
    ThreadServices.find(req, res);
  }

  create(req: Request, res: Response) {
    ThreadQueue.create(req, res);
  }

  update(req: Request, res: Response) {
    ThreadServices.update(req, res);
  }

  delete(req: Request, res: Response) {
    ThreadServices.delete(req, res);
  }

  findOne(req: Request, res: Response) {
    ThreadServices.findOne(req, res);
  }

  // async update(req: Request, res: Response) {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     if (isNaN(id)) {
  //       return res.status(400).json({
  //         message: "Invalid ID Provided",
  //         error: "Invalid input for type number",
  //       });
  //     }
  //     const data = req.body;
  //     const { error, value } = updateUserSchema.validate(data);
  //     if (error) return res.status(400).json(error);

  //     const response = await ThreadServices.update(id, value);
  //     if (!response) {
  //       return res.status(404).json({ message: "User not found" });
  //     }
  //     return res.status(201).json(response);
  //   } catch (error) {
  //     console.error("Error updating User");
  //     return res
  //       .status(500)
  //       .json({ message: "Internal Server Error", error: error.message });
  //   }
  // }
})();
