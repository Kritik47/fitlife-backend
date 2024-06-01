import { where } from "sequelize";
import { Signin } from "../db/db.js";
import bcrypt from 'bcrypt'
const CreateUser=async(req,res)=>{
    const{username,useremail,userpassword}= req.body;
    try{
       if(username&&useremail&&userpassword){
        const m=await Signin.create({username,useremail,userpassword});
        res.send({M:m});
       }else{
        res.send({msg:'requireed.... alll feild...'})
       }
    }catch(e){
        res.send({msg:"Creating Error...."})
    }
}


const GetUser=async(req,res)=>{
    try{
        const m=await Signin.findAll({});
        res.send({M:m});
    }catch(e){
        res.send({msg:"Getting Error...."});
    }
}


const GetByIdUser=async(req,res)=>{
    try{
        const m=await Signin.findByPk(req.params.id);
        res.send({M:m});
    }catch(e){
        res.send({msg:"Getting Error...."});
    }
}
const UpdateUser=async(req,res)=>{
    try{
        const m=await Signin.update(req.body,{where:{id:req.params.id}});
        res.send({M:m});
    }catch(e){
        res.send({msg:"Getting Error...."});
    }
}
const DeleteUser=async(req,res)=>{
    try{
        let m=await Signin.findByPk(req.params.id);
            m=await m.destroy();
            res.send({M:m});
        
    }catch(e){
        res.send({msg:"Getting Error...."});
    }
}
export  {CreateUser,GetUser,GetByIdUser,UpdateUser,DeleteUser};