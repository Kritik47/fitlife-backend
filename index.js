import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDb } from './src/fitlife/db/db.js';
import router from './src/fitlife/routers/router.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
ConnectDb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
