import { Router } from "express";
import PostController from "./posts.controller.js";
import { uploadFile } from "../../middlewares/file-upload.middleware.js";

const postRouter = Router();
let postController = new PostController();

//Retrieve all post
postRouter.get('/all', postController.getAllPosts);

//Retrieve a specific post by id
postRouter.get('/:postId', postController.getPostByPostId);

//Retrieve post based on user credentials
postRouter.get('/', postController.getPostsByUserId);

//Create a new post
postRouter.post('/', uploadFile.single('imageUrl'), postController.newPost);

//Delete a specific post by id
postRouter.delete('/:postId', postController.deletePost);

//Update a specific post by id
postRouter.put('/:postId', postController.updatePost);

export default postRouter;