const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports = async function connectDb(){
   await  mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error connecting to MongoDB",err);
    });
}
