import { Sequelize } from 'sequelize';
import ContactModel from '../models/ContactModels.js';
import TrainerModel from '../models/TrainerMoldel.js';
import AddchestModel from '../models/Addchest.js';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL);
let Contact = null;
let JoinTrainer = null;
let Addchest=null;
const ConnectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostGresSql Connected.....");

    Contact =await ContactModel(sequelize);
    JoinTrainer = await TrainerModel(sequelize);
    Addchest=await AddchestModel(sequelize);
    await sequelize.sync();
  } catch (e) {
    console.error("Connection Error...", e);
  }
};

export { ConnectDb, Contact,JoinTrainer,Addchest};
