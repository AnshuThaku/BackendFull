const express=require('express');
const app=express();
const authRoute=require('./routes/userAuthroute');
const postRoute=require('./routes/musicRoute') ;
const cookieParser=require('cookie-parser');


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.use('/api/auth',postRoute)

module.exports=app;