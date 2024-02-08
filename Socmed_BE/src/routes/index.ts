import * as express from 'express'
// import ArticleController from '../controller/ArticleController'
// import VoterController from '../controller/VoterController'
// import PartaiController from '../controller/PartaiController'
// import PaslonController from '../controller/PaslonController'
import AuthController from '../controllers/AuthController'
import AuthMiddleware from '../middlewares/Auth'
// import UploadFile from '../middlewares/UploadFile'
// import UserController from '../controller/UserController'
// import multer = require('multer')

const router = express.Router()
// const upload = multer();


router.post('/auth/register', AuthController.register)
router.post('/auth/login', AuthController.login)

// router.delete("/user/:id", UserController.delete)
// router.get('/user/:id', UserController.getOne)
// router.get('/users', UserController.getAll)
// router.put('/user/:id', AuthMiddleware.Auth, UserController.update)
// router.delete('/user/:id', AuthMiddleware.Auth, UserController.delete)

export default router