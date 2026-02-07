const mongoose=require("mongoose");

const albumSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    musics:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Music'
    }],
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
module.exports=mongoose.model('album',albumSchema);