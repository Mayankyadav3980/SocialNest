import CustomError from "../../customErrorHandler/errorHandler.js";

export default class PostModel {
  constructor(userId, userName, caption, imageUrl) {
    (this.id = posts.length + 1),
      (this.userId = userId),
      (this.userName = userName),
      (this.caption = caption),
      (this.imageUrl = imageUrl);
  }

  static getAllPosts() {
    return posts;
  }

  static getPostByPostId(postId) {
    let post = posts.find((p) => p.id == postId);
    if (post) {
      return post;
    } else {
      throw new CustomError("Invalid Post Id", 400);
    }
  }

  static getPostsByUserId(userId) {
    return posts.filter((p) => p.userId == userId);
  }

  static createPost(userId, userName, caption, imageUrl) {
    let post = new PostModel(userId, userName, caption, imageUrl);
    posts.push(post);
  }

  static deletePost(postId) {
    let idx = posts.findIndex((p) => p.id == postId);
    if (idx != -1) {
      let post = posts[idx];
      posts.splice(idx, 1);
      return post;
    }
    throw new CustomError(" Invalid Post Id", 400);
  }

//u is needed?
  static updatePost(postId, userId, caption, imageUrl) {
    let idx = posts.findIndex((p) => p.id == postId);
    if (idx != -1) {
      return (posts[idx] = {
        postId,
        userId,
        caption,
        imageUrl,
      });
    }
    throw new CustomError(" Invalid Post Id", 400);
  }
}

const posts = [
  {
    id: 1,
    userId: 1,
    userName: "Mayank",
    caption: "This is text of first post",
    imageUrl: "/postImages/1726902716041-simplicity.jpg",
  },
  {
    id: 2,
    userId: 2,
    userName: "Shivam",
    caption: "This is text of 2nd post",
    imageUrl: "/postImages/1726902716041-simplicity.jpg",
  },
  {
    id: 3,
    userId: 3,
    userName: "Satyam",
    caption: "This is text of 3rd post",
    imageUrl: "/postImages/1726902716041-simplicity.jpg",
  },
];
