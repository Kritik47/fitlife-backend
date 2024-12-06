import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { ConnectDb } from './src/fitlife/db/db.js';
import router from './src/fitlife/routers/router.js';
dotenv.config();
const app = express();
// Connect to the database
ConnectDb();

// Middleware
app.use(cors());
app.use(router);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
