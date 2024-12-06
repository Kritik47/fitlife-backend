import Contact from "../models/ContactModels.js";
const CreateContact=async(req,res)=>{
    try{
        let m=await Contact.create(req.body);
        res.status(200).send({msg:"Message Sends Succesfully.."})
    }catch(e){
        res.status(400).send({msg:"Contact Data Insertion Erro.."})
    }
}
export default CreateContact;