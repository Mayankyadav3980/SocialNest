import UserModel from "./user.model.js";

export default class UserController{
    signUp(req, res){
        let { name, email, password } = req.body;
        UserModel.addUser(name, email, password);
        res.status(201).send('New user added successfully');
    }

    singIn(req, res){
        let { email, password } = req.body;
        let result = UserModel.findUser(email, password);
        if(result){
            // res.status(200).send('User signedIn successfully')
             return res.redirect('/api/posts/all');
        }
        res.status(400).send('Invalid Credentials!');
    }
}