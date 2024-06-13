import { where } from "sequelize";
import { Signup } from "../db/db.js";
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser'
import bcrypt from 'bcrypt'
const UserSignup=async(req,res)=>{
    const{name,email,password}=await req.body;
    const exist=await Signup.findOne({where:{email:email}});
    try{
        if(exist){
            res.status(200).send({msg:"User Already Registered"})
        }else{
            const haspass=await bcrypt.hash(password,10);
            const m=await Signup.create({name,email,password:haspass});
            res.status(200).send({msg:"UserSignup Successfully!"});
        }
    }catch(e){
        res.status(400).send({msg:"Signup Insertion Srror..."});
    }
}



const UserLogin=async(req,res)=>{
    const{email,password}=await req.body;
    const exist=await Signup.findOne({where:{email:email}});
    try{
        if(exist){
            const MatchPaas=await bcrypt.compare(password,exist.password);
            if(MatchPaas){
                res.status(200).send({msg:"User Login Successfully!"});
            }else{
                res.status(200).send({msg:"Invalid Paasword"});
            }
        }else{
            res.status(200).send({msg:"User Not Registered"});
        }
    }catch(e){
        res.status(400).send({msg:"login Insertion Srror..."});
    }
}
export {UserSignup,UserLogin};