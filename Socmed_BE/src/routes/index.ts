import * as express from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/Auth";
import UserController from "../controllers/UserController";
// import FollowController from "../controllers/FollowController";
import ThreadController from "../controllers/ThreadController";
import LikeController from "../controllers/LikeController";
import ReplyController from "../controllers/ReplyController";
import UploadFile from "../middlewares/UploadFile";

const router = express.Router();
// const upload = multer();

//Auth
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/check", AuthMiddleware.Auth, AuthController.check);

//Userr
router.get("/users", UserController.findAll);
router.get("/user/:id", UserController.findOne);
// router.put("/user/:id", AuthMiddleware.Auth, UserController.update);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", AuthMiddleware.Auth, UserController.delete);
// router.post("/user/follow", FollowController.followUser);

//Thread
router.get("/thread", ThreadController.findAll);
router.get("/thread/:id", ThreadController.findOne);
router.post(
  "/thread",
  AuthMiddleware.Auth,
  UploadFile.upload("image_thread"),
  ThreadController.create
);
router.put("/thread/:id", ThreadController.update);
router.delete("/thread/:id", ThreadController.delete);

//Like
router.get("/likes", LikeController.findAll);
router.post("/likes", AuthMiddleware.Auth, LikeController.create);

//Reply
router.post("/replies", AuthMiddleware.Auth, ReplyController.create);
router.get("/replies", ReplyController.find);

// NOTIFICATION SSE
router.get("/notification", (req: express.Request, res: express.Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write("event: message\n");
  function sendNotification(data: any) {
    res.write("Data : " + data + "\n\n");
  }

  router.get("/new-thread", (req, res) => {
    const thread = JSON.stringify({ data: "New Thread!" });
    sendNotification(thread);

    res.sendStatus(200);
  });
});

export default router;
