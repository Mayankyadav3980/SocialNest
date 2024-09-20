import CommentModel from "./comments.model.js";

export default class CommentController{
    
    getCommentsByPostId(req, res){
        let posts = CommentModel(req.params.postId);
        res.status(200).json(posts);
    }

    addNewComment(req, res){
        let {postId} = req.params;
        let { userId, content} = req.body;
        CommentModel.addComment(postId, userId, content);
        res.status(201).json('New comment added successfully');
    }
}