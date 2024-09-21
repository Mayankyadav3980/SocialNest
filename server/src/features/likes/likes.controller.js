import LikeModel from "./likes.model.js";

export default class LikeController{
    getLikes(req, res){
        let {postId} = req.params;
        let likes = LikeModel.getLikes(postId);
        if(likes.length != 0){
            return res.status(200).json(likes);
        }
        res.json('No likes on this post')
    }
//update this to get userId from token
    toggleLike(req, res){
        let {postId} = req.params;
        let {userId} = req.body;
        LikeModel.toggleLike(postId, userId);
        res.status(200).json('Like status toggled successfully!');
    }
}