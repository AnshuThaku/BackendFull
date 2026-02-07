const { decode } = require('jsonwebtoken');
const Music=require('../models/Musicmodel');
const Album=require('../models/albumModel');
const {uploadImage}=require('../services/imagekit');

module.exports.createMusic=async(req,res)=>{

    try{    
    const {title}=req.body;
    const file=req.file;
    
     
    const result= await  uploadImage(file.buffer.toString('base64'));
   
    const music=new Music({
        url: result.url,
        title,
        artist:req.user.id
        
    })
    await music.save();
   res.status(201).json({
    message:"Music created successfully",
    title:music.title,
    uri:music.url,
    artist:music.artist
   })
    } catch(err){
        res.status(500).json({message:"Error creating music",error:err.message})
    }
}
module.exports.createAlbum=async(req,res)=>{

    const {title,musics}=req.body;
    try{
const album=new Album({
        title,
        musics,
        artist:req.user.id
    })
    await album.save();
    res.status(201).send({
        message:"album created successfully",
        title:album.title,
        musics:album.musics,
        artist:album.artist

    })
}catch(err){
    res.status(500).json("error while creating album",err.message)
    }
    
    

}
module.exports.getAllmusic=async(req,res)=>{
    try{
const  getMusic=await Music.find().populate('artist');

    res.status(200).json({
        message:"All music are here",
        getMusic
    })
    }catch(err){
        res.status(500).json({
            message:"error while fetching music",error:err.message
        })
    }
    
}
module.exports.getAllAlbums=async(req,res)=>{
    try{
const  allAlbum=await Album.find().select('title artist').populate('artist','username');

    res.status(200).json({
        message:"All Albums are here",
        allAlbum
      
    })
    }catch(err){
        res.status(500).json({
            message:"error while fetching album",error:err.message
        })
    }
}
  
