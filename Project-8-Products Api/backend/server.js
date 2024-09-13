const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const productRoutes=require('./routes/product.js');
const path=require('path');

const app=express();
app.use(express.json());
dotenv.config();
const port=process.env.PORT||5000;
const __dirname=path.resolve();
app.use("/api/products",productRoutes);
if(process.env.NODE_ENV==="production"){app.use(express.static(path.join(__dirname,"/frontend/dist")));
 app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
 }) 
}
app.listen(port,()=>{
  connectDB();
  console.log("Server listenong at 5000 port");
})