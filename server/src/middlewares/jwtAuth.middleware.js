import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  // let token = req.cookies.Token;
  let token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token found!" });
  }
  //handling if token is present
  try {
    let payload = jwt.verify(token, "SecretKey");
    req.userId = payload.userId;
    req.userName = payload.userName;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid Token!" });
  }
};

export default auth;
