const express=require("express");
const router=express.Router();
const music=require('../controllers/musicController');
const { isverifyToken }=require('../midlleware/middleware') ;

const multer=require('multer');
const upload=multer();


router.post("/create",isverifyToken,upload.single('url'),music.createMusic);
router.post('/album',isverifyToken,music.createAlbum)
router.get('/',music.getAllmusic)
router.get('/album',music.getAllAlbums)

module.exports=router;

