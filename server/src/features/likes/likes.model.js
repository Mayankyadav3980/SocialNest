export default class LikeModel{
    constructor(postId, userId){
        this.id = likes.length + 1;
        this.postId = postId;
        this.userId = userId;
    }

    static getLikes(postId){
        return likes.filter(l=> l.postId==postId);
    }

    static toggleLike(postId, userId){
        let idx = likes.findIndex(l=>l.postId==postId && l.userId==userId);
        if(idx != -1){
            likes.splice(idx, 1);
        }
    }
}

let likes = [
    {
        id: 1,
        postId: 1,
        userId: 1
    },
    {
        id: 2,
        postId: 1,
        userId: 2
    }
]