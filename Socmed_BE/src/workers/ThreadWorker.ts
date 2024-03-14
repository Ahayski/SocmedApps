import * as amqp from "amqplib";
import { EventEmitter } from "stream";
import { Repository } from "typeorm";
import { Thread } from "../entity/Thread";
import { AppDataSource } from "../data-source";
import CloudinaryConfig from "../libs/cloudinary";
import { request } from "http";
import cloudinary from "../libs/cloudinary";

export default new (class ThreadWorker extends EventEmitter {
  private readonly ThreadWorker: Repository<Thread> =
    AppDataSource.getRepository(Thread);

  async create(queueName: string, connection: amqp.Connection) {
    try {
      const channel = await connection.createChannel();
      console.log(channel);
      await channel.assertQueue(queueName);

      await channel.consume(queueName, async (message) => {
        if (message !== null)
          try {
            const data = JSON.parse(message.content.toString());
            const cloudinaryRes = await CloudinaryConfig.destination(
              data.image_thread
            );
            const image = cloudinaryRes.secure_url;

            const obj = this.ThreadWorker.create({
              content: data.content,
              image_thread: image,
              user: {
                id: data.user,
              },
            });

            await this.ThreadWorker.save(obj);
            const req = request({
              hostname: "localhost",
              port: 5000,
              path: "/api/v1/new-thread",
              method: "GET",
            });

            req.on("error", (error) => console.log("Error Message : " + error));

            req.end();

            console.log("Thread is Created!");
            channel.ack(message);
          } catch (error) {
            console.log(error);
          }
      });
    } catch (error) {
      console.log({ message: error });
    }
  }
})();
