import Product from "../model/model.js";
const GetByIdApi=async(req,res)=>{
    try{
        const m=await Product.findById(req.params.id);
        res.send({msg:"FetchById",DATA:m});
    }catch(e){
        res.send({msg:"FetchById.....Errir..."})
    }
}
export default GetByIdApi;