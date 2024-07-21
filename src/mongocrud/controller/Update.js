import Product from "../model/model.js";
const UpdateApi=async(req,res)=>{
    try{
        const m=await Product.updateOne({_id:req.params.id},{$set:req.body});
        res.send({msg:"Data Updated....",DATA:m});
    }catch(e){
        res.send({msg:"Update Error...."});
    }
}
export default UpdateApi;