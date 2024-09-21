import { Router } from "express";
import LikeController from "./likes.controller.js";

const likeRouter = Router();
const likeController = new LikeController();

//Retrieve all likes for a specific post
likeRouter.get('/:postId', likeController.getLikes);

//Toggle like status for  a specific post
likeRouter.get('/toggle/:postId', likeController.toggleLike)

export default likeRouter;