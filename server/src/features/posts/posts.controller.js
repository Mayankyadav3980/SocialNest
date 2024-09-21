import PostModel from "./posts.model.js";

export default class PostController {
  getAllPosts(req, res) {
    let posts = PostModel.getAllPosts();
    res.status(200).json(posts);
  }

  getPostByPostId(req, res) {
    let postId = req.params.postId;
    let post = PostModel.getPostByPostId(postId);
    res.status(200).json(post);
  }

  // update this to get userId from jwt token only
  getPostsByUserId(req, res) {
    // let userId = req.body.userId;
    console.log("inside post controller, req obj is: ", req);

    let userId = req.userId;
    let posts = PostModel.getPostsByUserId(userId);
    if (posts.length) {
      return res.status(200).json(posts);
    }
    res.status(200).json(`No post yet by this user Id(${userId})`);
  }

  // get userId with token
  newPost(req, res) {
    let userId = req.userId;
    let { caption } = req.body;
    let imageUrl = "postImages/" + req.file.filename;
    PostModel.createPost(userId, caption, imageUrl);
    // PostModel.createPost(userId, caption);
    res.status(201).json("New post created successfully");
  }

  deletePost(req, res) {
    let postId = req.params.postId;
    let post = PostModel.deletePost(postId);
    res.status(200).json("Post deleted successfully");
  }
  // get id with token
  updatePost(req, res) {
    // let userId = req.userId;
    let postId = req.params.postId;
    let { userId, caption, imageUrl } = req.body;
    PostModel.updatePost(postId, userId, caption, imageUrl);
    res.status(201).json("Post updated successfully");
  }
}
