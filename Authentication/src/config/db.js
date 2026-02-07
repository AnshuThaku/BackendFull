require('dotenv').config();
const mongoose=require('mongoose');

module.exports.connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to database");
    }catch(err){
        console.log("Error connecting to database",err);
    }
}