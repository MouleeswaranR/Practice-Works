const mongoose=require("mongoose");

const connectDB=async ()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database ${conn.connection.host}`);
  }catch(error){
    console.log('Server not connected');
    process.exit(1);
    }
  
}

module.exports=connectDB;