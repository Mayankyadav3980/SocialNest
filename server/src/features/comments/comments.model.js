import CustomError from "../../customErrorHandler/errorHandler.js";

export default class CommentModel {
  constructor(userId, postId, content) {
    (this.id = comments.length + 1),
      (this.userId = userId),
      (this.postId = postId),
      (this.content = content);
  }

  static getCommentsByPostId(postId) {
    let filteredComments = comments.filter((c) => c.postId == postId);
    if (filteredComments.length != 0) {
      return filteredComments;
    }
    throw new CustomError("Invalid post Id!");
  }

  static addComment(postId, userId, content) {
    comments.push(new CommentModel(userId, postId, content));
  }

  static deleteComment(id) {
    let idx = comments.findIndex((c) => c.id == id);
    if (idx != -1) {
      return comments.splice(idx, 1);
    }
    throw new CustomError("Invalid comments Id");
  }

  static updateComment(id, userId, postId, content) {
    let idx = comments.findIndex((c) => c.id == id);
    if (idx != -1) {
      return (comments[idx] = {
        id,
        userId,
        postId,
        content,
      });
    }
    throw new CustomError("Invalid Id!");
  }
}

let comments = [
    {
        id: 1,
        userId: 1,
        postId: 1,
        content: 'UI1 comment on PI1'
    },
    {
        id: 2,
        userId: 1,
        postId: 2,
        content: 'UI1 comment on PI2'
    }
]