import CommentModel from "./comments.model.js";

export default class CommentController{
    
    getCommentsByPostId(req, res){
        let posts = CommentModel.getCommentsByPostId(req.params.postId);
        res.status(200).json(posts);
    }

    addNewComment(req, res){
        let {postId} = req.params;
        let { userId, content} = req.body;
        CommentModel.addComment(postId, userId, content);
        res.status(201).json('New comment added successfully');
    }

    deleteComment(req, res){
        let {commentId} = req.params;
        CommentModel.deleteComment(commentId);
        res.status(200).send('Deletion successfull');
    }

    updateComment(req, res){
        let {commentId} = req.params;
        let { userId, postId, content } = req.body; 
        CommentModel.updateComment(commentId, userId, postId, content);
        res.status(200).send("Updation successfull");
    }
}