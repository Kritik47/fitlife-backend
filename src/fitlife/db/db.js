import { Sequelize } from 'sequelize';
import SignupModel from '../models/SignupModel.js';
import ContactModel from '../models/ContactModels.js';
import dotenv from 'dotenv'
dotenv.config();
const sequelize=new Sequelize(process.env.DATABASE_URL);  
let Signup=null;
let Contact=null;
const ConnectDb=async()=>{
    try{
        sequelize.authenticate();
        console.log("PostGresSql Conncted.....");
        Signup=await SignupModel(sequelize);
        Contact=await ContactModel(sequelize);
        await sequelize.sync();
    }catch(e){
        console.error("Conncrtion Error...");
    }
}
export {ConnectDb,Signup,Contact};