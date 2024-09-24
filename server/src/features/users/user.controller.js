import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    let { name, email, password } = req.body;
    UserModel.addUser(name, email, password);
    res
      .status(201)
      .send({ success: true, message: "New user added successfully" });
  }

  singIn(req, res) {
    let { email, password } = req.body;
    let result = UserModel.findUser(email, password);
    if (result) {
      const token = jwt.sign(
        {
          email: result.email,
          userId: result.id,
          userName: result.name
        },
        "SecretKey",
        {
          expiresIn: "1h",
        }
      );
      return res.cookie("Token", token).send({ success: true, token: token });
    }
    res.status(400).send({ success: false, message:"Invalid Credentials!"});
  }
}
