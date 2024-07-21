import express from 'express';
import cors from 'cors'
const app=express();
import ConncetDb from './src/mongocrud/db/db.js';
import router from './src/mongocrud/router/router.js';
ConncetDb();
app.use(cors());
app.use(router);
app.listen(5000,()=>{
  console.log("Listen In pOrt 5100");
})