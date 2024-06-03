import dotenv from 'dotenv';
dotenv.config();
import ConnectDb from './src/db/db.js';
import router from './src/route/route.js';
ConnectDb();
import express from 'express';
const app=express();
app.use(router);
app.listen(process.env.PORT||3000,()=>{
    console.log("Mein Port 5000....");
}) 