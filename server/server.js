import express from "express";
import CustomError from "./src/customErrorHandler/errorHandler.js";
import postRouter from "./src/features/posts/posts.routes.js";
import userRouter from "./src/features/users/user.routes.js";
import commentRouter from "./src/features/comments/comments.routes.js";
import likeRouter from "./src/features/likes/likes.routes.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import auth from './src/middlewares/jwtAuth.middleware.js'
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(loggerMiddleware);
app.use(cookieParser());

app.use("/api", userRouter);
app.use("/api/posts",auth, postRouter);
app.use("/api/comments",auth, commentRouter);
app.use("/api/likes",auth, likeRouter);

//application level error handler
app.use((err, req, res, next) => {
  console.log(err);

  if (err instanceof CustomError) {
    return res.status(400).json(err.message);
  }
  res.status(500).json("Internal server error, Please try again later.");
});

app.listen(PORT, () => {
  console.log(`API server is up and running on port ${PORT}`);
});
