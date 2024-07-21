import Product from "../model/model.js";
const DelApi=async(req,res)=>{
    try{
        const m=await Product.deleteOne({_id:req.params.id});
        res.send({msg:'Data Deleted Succesfully',DATA:m});
    }catch(e){
        res.send({msg:"Data Deleted....."});
    }
}
export default DelApi;