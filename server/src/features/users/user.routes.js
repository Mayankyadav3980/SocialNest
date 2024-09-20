import {Router} from 'express'
import UserController from './user.controller.js';

const userRouter = Router();
const userController = new UserController();

//Register a new user account
userRouter.post('/signup', userController.signUp);

//Log in as a user
userRouter.post('/signin', userController.singIn);

export default userRouter;