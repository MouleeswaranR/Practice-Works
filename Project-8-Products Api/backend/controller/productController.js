const mongoose=require("mongoose");
const Product=require("../models/productModel");

 const getProducts=async(req,res)=>{
  try{
    const products=await Product.find({});
    res.status(200).json({succes:true,data:products})
  }catch(error){
    console.log(error.message);
    res.status(500).json({success:false,message:"Internal Server Error"})
  }
}

 const createProduct=async(req,res)=>{
  const product=req.body;
  if(!product.name||!product.price||!product.image){
    return res.status(400).json({success:false,message:"Please enter all fields"});
  }
  const newProduct = new Product(product);
  try{
    await newProduct.save();
    res.status(200).json({success:true,message:"Product entered successfully",data:newProduct});
  }catch(error){
    console.error(error.message);
    res.status(500).json({success:false,message:"Server Error"});
    
  }
}

 const deleteProduct=async(req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false,message:'Invalid Id'})
  }
  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Product Deleted"});
  }catch{
    console.log(error.message);
    res.status(500).json({success:true,message:"Internal Server Error"});
  }
}

 const updateProduct=async(req,res)=>{
  const {id}=req.params;
  const product=req.body;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false,message:'Invalid Id'})
  }
  try{
   const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true});
    res.status(200).json({success:true,data:updatedProduct})
  }catch(e){
    console.log(e.message);
    res.status(500).json({success:true,message:"Internal Server Error"})
  }
}

module.exports={createProduct,updateProduct,deleteProduct,getProducts};