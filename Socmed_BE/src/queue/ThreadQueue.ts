import { Request, Response } from "express";
import { createThreadSchema } from "../utils/validator/ThreadValidator";
import RabbitMQConfig from "../libs/rabbitmq";

export default new (class ThreadQueue {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const loginSession = res.locals.loginSession;
      let data;

      if (!req.file) {
        data = {
          content: req.body.content,
          user: loginSession.obj.id,
        };
      } else if (req.file) {
        data = {
          content: req.body.content,
          image_thread: res.locals.filename,
          user: loginSession.obj.id,
        };
      } else {
        data = {
          image_thread: res.locals.filename,
          user: loginSession.obj.id,
        };
      }
      const { error, value } = createThreadSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const payload = {
        content: value.content,
        image_thread: value.image_thread,
        user: value.user,
      };
      console.log("ini payloadnya", payload);

      const errorQueue = await RabbitMQConfig.sendToMessage(
        process.env.QUEUE_NAME,
        payload
      );
      if (errorQueue) return res.status(500).json({ message: errorQueue });

      return res.status(201).json({
        message: "thread is queued!!",
        data: payload,
      });
      //   return res.status(201).json({
      //     message: "thread is queued!!",
      //   });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
})();
