import dotenv from 'dotenv'
import { EmployeeModel } from '../models/model.js';
dotenv.config();
import { Sequelize } from "sequelize";
const sequelize=new Sequelize(process.env.DATABASE_URL);
let Employee=null;
const ConnectDb=async()=>{
    try{
        await sequelize.authenticate();
        console.log("Postgres Connected......");
        Employee=await EmployeeModel(sequelize);
        await sequelize.sync();
    }catch(e){
        console.error("Connection Erro.....");
    }
}
export {ConnectDb,Employee};