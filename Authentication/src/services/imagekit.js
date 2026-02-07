const imagekit=require('@imagekit/nodejs');

const ImageClient=new imagekit({
    privateKey:process.env.IMAGE_PRIVATE_KEY
})

module.exports.uploadImage= async(file)=>{
    const result=await ImageClient.files.upload({
        file,
        fileName:'file-name.jpg',
        
    })
    return result;
}