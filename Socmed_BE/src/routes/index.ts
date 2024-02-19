import * as express from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/Auth";
import UserController from "../controllers/UserController";
// import FollowController from "../controllers/FollowController";
import ThreadController from "../controllers/ThreadController";
import LikeController from "../controllers/LikeController";
import ReplyController from "../controllers/ReplyController";

const router = express.Router();
// const upload = multer();

//Auth
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/check", AuthMiddleware.Auth,AuthController.check);

//Userr
router.get("/users", UserController.findAll);
router.get("/user/:id", UserController.findOne);
// router.put("/user/:id", AuthMiddleware.Auth, UserController.update);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", AuthMiddleware.Auth, UserController.delete);
// router.post("/user/follow", FollowController.followUser);

//Thread
router.get("/threads", ThreadController.findAll);
router.get("/thread/:id", ThreadController.findOne);
router.post("/thread",AuthMiddleware.Auth, ThreadController.create);
router.put("/thread/:id", ThreadController.update);
router.delete("/thread/:id", ThreadController.delete);

//Like
router.get("/likes",  LikeController.findAll);
router.post("/likes", AuthMiddleware.Auth, LikeController.create);

//Reply
router.post("/replies", AuthMiddleware.Auth, ReplyController.create);
router.get("/replies", ReplyController.find);

export default router;
