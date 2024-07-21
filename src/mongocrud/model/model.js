import mongoose from "mongoose";
const ProductModel=new mongoose.Schema({
    pro_name:{
        type:String,
    },
    pro_price:{
        type:String
    },
    pro_company:{
        type:String
    }
},{timestamps:true})
const Product=mongoose.model("Product",ProductModel);
export default Product;