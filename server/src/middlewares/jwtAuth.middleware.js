import jwt from 'jsonwebtoken';

 const auth = (req, res, next) => {
    // let token = req.headers.authorization;
    console.log('incoming cookies obj: ', req.cookies);
    
    let token = req.cookies.Token;
    if(!token){
        return res.status(401).json('No token found');
    }
    //handling if token is present
    try{
        let payload = jwt.verify(token, 'hi');

        req.userId = payload.userId;
        console.log('inside token present check, payload is: ', payload);
        
        next();
    } catch(err){
        res.status(401).json('Unauthorized!');
    }
}

export default auth;