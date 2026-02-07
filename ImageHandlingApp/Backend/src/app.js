const express = require("express");
const app = express();
const Post=require("./models/Post");
const multer=require("multer");
const {handleImageUpload}=require("./Services/ImageKit");
const cors=require("cors");

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload=multer();

app.post("/posts", upload.single("image"), async(req,res)=>{
    
     const result=await handleImageUpload(req.file.buffer);
     const newPost=new Post({
        image:result.url,
        caption:req.body.caption
     })
    await newPost.save();
    res.status(201).json({
        message:"Post created successfully",
        post:newPost
    });


})
app.get("/posts",async(req,res)=>{
    const posts=await Post.find();
    res.status(200).json({
        posts:posts,
        message:"Posts fetched successfully"
    })
})


module.exports = app;