import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    let { name, email, password } = req.body;
    UserModel.addUser(name, email, password);
    res.status(201).send("New user added successfully");
  }

  singIn(req, res) {
    let { email, password } = req.body;
    let result = UserModel.findUser(email, password);
    if (result) {
      // res.status(200).send('User signedIn successfully')
      console.log('generating token');
      
      const token = jwt.sign(
        {
          email: result.email,
          userId: result.id,
        },
        "hi",
        {
          expiresIn: "1h",
        }
      );
      console.log("outgoing cookie obj: ", res);
      return res.cookie('Token', token).redirect("/api/posts/all");
    // return res.json(token);
    }
    res.status(400).send("Invalid Credentials!");
  }
}
