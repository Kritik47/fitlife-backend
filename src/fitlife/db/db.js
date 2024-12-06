import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(`${process.env.POSTGRES_CONNECTION}`);
const ConnectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostGresSql Connected.....");
    await sequelize.sync();
    console.log("Data Synchronized");

  } catch (e) {
    console.error("Connection Error...", e);
  }
};

export { ConnectDb};
export default sequelize;
