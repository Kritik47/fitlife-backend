import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDb } from './src/fitlife/db/db.js';
import router from './src/fitlife/routers/router.js';

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Use your router
app.use(router);

ConnectDb();

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
