const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports=connectDB=async()=>{
    await mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log("Database connection failed", err);
    });
}