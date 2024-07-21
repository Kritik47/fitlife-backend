import Product from "../model/model.js";
const PostApi=async(req,res)=>{
    try{
        let m=await Product(req.body);
        m=await m.save();
        console.log(req.body);
        res.send({msg:"Data Posted Succesfully",DATA:m});

    }catch(e){
        res.send({msg:"PostApi Error...."})
    }
}
export default PostApi;