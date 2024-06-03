import express from 'express'
const router=express.Router();
router.use(express.json());
import { Employee } from '../db/db.js';
router.post('/Versel/Employee',async(req,res)=>{
    try{
        const m=await Employee.create(req.body);
        res.send({msg:"Data added.......",data:m});
    }catch(e){
        res.send("Posting Error.....");
    }
})
router.get('/Versel/Employee',async(req,res)=>{
    try{
        const m=await Employee.findAll({});
        res.send(m);
    }catch(e){
        res.send("Getting Error.....");
    }
})
export default router;