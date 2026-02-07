const express=require("express");
const router=express.Router();
const userAuthController =require('../controllers/userAuthController') ;

router.post("/register",userAuthController.registerUser);
router.post('/login',userAuthController.Login);
router.post('/logout',userAuthController.Logout);

module.exports=router;