import PostModel from "./posts.model.js";

export default class PostController{
    getAllPosts(req, res){
        let posts = PostModel.getAllPosts();
        res.status(200).json(posts);
    }

    getPostByPostId(req, res){
        let postId = req.params.postId;
        let post = PostModel.getPostByPostId(postId);
        res.status(200).json(post);
    }
}