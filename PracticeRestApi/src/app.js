const express = require('express');
const app = express();
const Notes=[];
app.use(express.json());

//Post request->to send data to the server
app.post('/notes',(req,res)=>{
    
    Notes.push(req.body);
    res.status(201).send('Note added successfully');

})

//Get request->to get data from the server
app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes:Notes,
        message:"Notes fetched successfully"
    });   
    
});
app.delete("/notes/:idx",(req,res)=>{
    const idx=req.params.idx;
   delete Notes[idx];
   res.status(200).send("Note deleted successfully");

});
app.patch("/notes/:idx",(req,res)=>{
    const idx=req.params.idx;
    const decr=req.body.description
    Notes[idx].description=decr
    res.status(200).send("Note updated successfully");
});
module.exports = app;
