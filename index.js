
import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config();
import { ConnectDb } from './src/db/db.js';
ConnectDb();
import router from './src/routes/route.js';
app.use(router);
app.listen(process.env.PORT||3000,()=>{
    console.log(`listen in port ${process.env.PORT}`);
})