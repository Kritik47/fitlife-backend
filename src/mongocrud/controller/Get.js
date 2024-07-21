import Product from "../model/model.js";
const GetApi=async(req,res)=>{
    try{
        const m=await Product.find({});
        res.send({msg:"GetApi...",data:m});
    }catch(e){
        res.send({msg:"GetApi Error...."})
    }
}
export default GetApi;