import * as express from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/Auth";
import UserController from "../controllers/UserController";

const router = express.Router();
// const upload = multer();

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

router.get("/users", UserController.findAll);
router.get("/user/:id", UserController.findOne);
router.delete("/user/:id", UserController.delete);
router.put("/user/:id", AuthMiddleware.Auth, UserController.update);
router.delete("/user/:id", AuthMiddleware.Auth, UserController.delete);

export default router;
