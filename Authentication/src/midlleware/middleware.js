const jwt=require('jsonwebtoken');
require('dotenv').config();


module.exports.isverifyToken=(req,res,next)=>{
    console.log("Middleware is running");
    if(!req.cookies || !req.cookies.token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const decoded=jwt.verify(req.cookies.token,process.env.SECRET_KEY); 
    if(!decoded){
        return res.status(401).json({message:"Unauthorized"})
    }
    if(decoded.role!=="admin"){
        return res.status(403).json({message:"Forbidden"})
    }
    req.user=decoded;
    console.log(decoded.id);
    next();
}