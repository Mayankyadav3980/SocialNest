import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  let token = req.cookies.Token;
  if (!token) {
    return res.status(401).json("No token found");
  }
  //handling if token is present
  try {
    let payload = jwt.verify(token, "SecretKey");
    req.userId = payload.userId;
    next();
  } catch (err) {
    res.status(401).json("Unauthorized!");
  }
};

export default auth;
