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

    // update this to get userId from jwt token only
    getPostsByUserId(req, res){
        let userId = req.body.userId;
        let posts = PostModel.getPostsByUserId(userId);
        res.status(200).json(posts);
    }
// get userId with token
    newPost(req, res){
        // let userId = req.userId;
        let { userId, caption, imageUrl } = req.body;
        PostModel.createPost(userId, caption, imageUrl);
        res.status(201).json('New post created successfully');
    }

    deletePost(req, res){
        let postId = req.params.postId;
        let post = PostModel.deletePost(postId);
        res.status(200).json('Post deleted successfully');
    }
 // get id with token
    updatePost(req, res){
        // let userId = req.userId;
        let postId = req.params.postId;
        let {userId, caption, imageUrl } = req.body;
        PostModel.updatePost(postId, userId, caption, imageUrl);
        res.status(201).json("Post updated successfully");
    }
}