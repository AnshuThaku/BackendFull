const app=require("./src/app");
const connectDb=require("./src/DB/db");




//connect server to database
connectDb();

//start the server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});