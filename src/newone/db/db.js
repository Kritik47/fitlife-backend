import { Sequelize } from "sequelize";
import SigninModel from "../model/model.js";
const sequelize = new Sequelize('msql', 'postgres', 'postgressql', {
    host: 'localhost',
    dialect:'postgres'
  });
  let Signin=null;
const ConnectDb=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        Signin=await SigninModel(sequelize);
        sequelize.sync();
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
export {ConnectDb,Signin};