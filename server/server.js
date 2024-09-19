import express from "express";
import CustomError from "./src/customErrorHandler/errorHandler";

const app = express();
const PORT = 3000;

app.get('/posts', (req, res)=>{
    res.json('These are all your posts');
});

//application level error handler
app.use((err, req, res, next)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json(err.message);
    }
    res.status(500).json('Internal server error, Please try again later.')
})

app.listen(PORT, ()=>{
    console.log(`API server is up and running on port ${PORT}`);
    
})