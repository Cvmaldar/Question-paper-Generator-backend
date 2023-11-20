const express=require("express");
const router=require("./Routes/questionroute");
const mongoose=require("mongoose");
const app=express();

require("dotenv").config();

const PORT = process.env.PORT | 3000;
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true }).then(()=>{
  console.log("connected to mongodb");
}).catch((err)=>{
  console.log(err);
})

app.use("/",router);



app.listen(PORT, () => console.log("Server running on port " + PORT));
