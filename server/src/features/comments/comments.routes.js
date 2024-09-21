import { Router } from "express";
import CommentController from "./comments.controller.js";

const commentRouter = Router();
const commentController = new CommentController();

//Retrieve all comments for a specific post
commentRouter.get('/:postId', commentController.getCommentsByPostId);

//Add new comment to a specific post
commentRouter.post('/:postId', commentController.addNewComment);

//Delete a specific comment by id
commentRouter.delete("/:commentId", commentController.deleteComment);

//Update a specific comment by id
commentRouter.put("/:commentId", commentController.updateComment);

export default commentRouter;