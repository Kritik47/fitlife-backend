import { where } from "sequelize";
import { JoinTrainer } from "../db/db.js";
const PostJoinTrainer=async(req,res)=>{
    try{
      const m=await JoinTrainer.create(req.body);
      res.send({msg:"Welcome to Power Pulse Gym.."});  
    }catch(e){
        res.send({msg:"PostJoinTrainer Error...."});
    }
}


const GetJoinTrainer=async(req,res)=>{
    try{
      const m=await JoinTrainer.findAll({});
      res.send({object:m});  
    }catch(e){
        res.send({msg:"GetJoinTrainer Error...."});
    }
}


const GetByIdJoinTrainer=async(req,res)=>{
    try{
      const m=await JoinTrainer.findByPk(req.params.id);
      res.send({object:m});  
    }catch(e){
        res.send({msg:"GetByIdJoinTrainer Error...."});
    }
}


const PutByIdJoinTrainer = async (req, res) => {
  try {
    const m = await JoinTrainer.update(req.body, { where: { id: req.params.id } });
    res.send({ msg: "Data Updated Succesfully...."});
  } catch (e) {
    res.send({ msg: "PutJoin Error...." });
  }
}


const DelByIdJoinTrainer=async(req,res)=>{
  try{
    let m=await JoinTrainer.findByPk(req.params.id);
    await m.destroy();
    res.send({msg:"Data Deleted Succesfully...."});  
  }catch(e){
      res.send({msg:"DelByIdJoinTrainer Error...."});
  }
}

export {PostJoinTrainer,GetJoinTrainer,GetByIdJoinTrainer,PutByIdJoinTrainer,DelByIdJoinTrainer};    