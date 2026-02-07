
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const NoteModel = require("./Model/Notes");

//parse body request
app.use(express.json());

//Create
app.post("/notes",(req,res)=>{
const {title,Description}=req.body;
const note=new NoteModel({title,Description});
note.save();
res.status(201).json("Note created successfully");

})

//read
app.get("/notes",async (req,res)=>{
    const AllNote= await NoteModel.find({});
    res.send(AllNote);
})

//delete
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    const note = await NoteModel.findByIdAndDelete(id);

  

    res.status(200).json({
      message: "Note deleted successfully",
      deletedNote: note
    });
  
});



app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;

  const updatedNote = await NoteModel.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  res.status(200).json({
    message: "Note partially updated",
    updatedNote
  });
});


module.exports = app;