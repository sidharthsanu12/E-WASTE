import LoginModel from "../models/loginModel";

const jwt = require('jsonwebtoken');

const  verifyToken = async(req, res, next)=> {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, 'adsadsadsasd');
     const userDetails = await LoginModel.findOne({_id:decoded.id})
     if(!userDetails){
        return res.status(401).json({ error: 'Invalid user' });
     }
     req.user = userDetails;
     next();
     } catch (error) {
     return res.status(401).json({ error: 'Invalid token' });
     }
     };

export default verifyToken;