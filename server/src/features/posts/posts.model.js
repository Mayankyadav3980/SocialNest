import CustomError from "../../customErrorHandler/errorHandler.js";

export default class PostModel{
    constructor(userId, caption, imageUrl){
        this.id = posts.length+1,
        this.userId = userId,
        this.caption = caption,
        this.imageUrl = imageUrl
    }

    static getAllPosts(){
        return posts;
    }

    static getPostByPostId(postId){
        let post = posts.find(p=> p.id == postId);
        if(post){
            return post;
        }else{
            throw new CustomError("Invalid Post Id", 400);
        }
    }

    static getPostByUserId(userId){
        let post = posts.find(p=> p.userId == userId);
         if(post){
            return post;
        }else{
            throw new CustomError("Invalid User Id", 400);
        }
    }

    static createPost(userId, caption, imageUrl){
        let post = new PostModel(userId, caption, imageUrl);
        posts.push(post);
    }

    static deletePost(postId){
        let idx = posts.findIndex(p=> p.id == postId);
        if( idx != -1){
            let post = posts[idx];
            posts.splice(idx, 1);
            return post;
        }
        throw new CustomError(" Invalid Post Id", 400);
    }

    static updatePost(postId, userId, caption, imageUrl){
        let idx = posts.findIndex(p=>p.id==postId);
        if( idx != -1){
             return posts[idx] = {
                postId,
                userId,
                caption,
                imageUrl 
            }
        }
        throw new CustomError(" Invalid Post Id", 400);
    }


}

const posts = [
    {
        id: 1,
        userId: 1,
        caption: 'This is text of first post',
        imageUrl:'abc.png'
    }
    {
        id: 2,
        userId: 1,
        caption: 'This is text of 2nd post',
        imageUrl:'abc2.png'
    }
]