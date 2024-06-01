import dotenv from 'dotenv';
dotenv.config();
import {ConnectDb} from './src/newone/db/db.js';
ConnectDb();
import router from './src/newone/route/route.js';
import express from 'express';
const app=express();
import cors from 'cors';
app.use(cors());
app.use(router);
app.listen(process.env.PORT,()=>{
    console.log(`listening in ${process.env.PORT}`)
});
