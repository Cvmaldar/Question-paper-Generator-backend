const express=require("express");
const bodyParser = require("body-parser");

const router=require("./Routes/questionroute");
const path=require("path");
const mongoose=require("mongoose");
const ejs = require("ejs");
const app=express();

app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));
app.use(express.json());

mongoose.connect("mongodb+srv://chinmaymaldar2002:cvm234@cluster0.kx8frzv.mongodb.net/QPG",{ useNewUrlParser: true }).then(()=>{
  console.log("connected to mongodb");
}).catch((err)=>{
  console.log(err);
})


app.use("/api",router);



app.listen(3000,()=>{
    console.log("Server is on port 3000");
});
