import express from 'express';
const router=express.Router();
import Employee from '../model/model.js';
router.use(express.json());
router.post('/employees',async(req,res)=>{
    try{
        let m=await Employee(req.body);
        m=await m.save();
        res.status(200).send({msg:"data posted..",data:m});
    }catch(e){
        res.status(400).send({msg:"data posting errooo...."});
    }
})
router.get('/employees',async(req,res)=>{
    try{
        const m=await Employee.find({});
        res.status(200).send({msg:"data fetched..",data:m});
    }catch(e){
        res.status(400).send({msg:"data fetched errooo...."});
    }
})
export default router;