import Addchest from "../models/Addchest.js";
const CreateAddchest=async(req,res)=>{
    try{
        const m=await Addchest.create(req.body);
        res.send({msg:"Added New Exersize Succesfully...",data:m});
    }catch(e){
        res.send({msg:"Post Chest Error...."});
    }
}

const GetAddchest=async(req,res)=>{
    try{
        const m=await Addchest.findAll({});
        res.send({Object:m});
    }catch(e){
        res.send({msg:"Get Chest Error...."});
    }
}

export {CreateAddchest,GetAddchest};