import express from "express";
import CustomError from "./src/customErrorHandler/errorHandler.js";
import postRouter from "./src/features/posts/posts.routes.js";
import userRouter from "./src/features/users/user.routes.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', userRouter);
app.use('/api/posts', postRouter);



//application level error handler
app.use((err, req, res, next)=>{
    console.log(err);
    
    if(err instanceof CustomError){
        return res.status(err.statusCode).json(err.message);
    }
    res.status(500).json('Internal server error, Please try again later.')
})

app.listen(PORT, ()=>{
    console.log(`API server is up and running on port ${PORT}`);
    
})