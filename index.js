import express from 'express';
import ConnectDb from './src/MYPORTFOLIO/lib/db.js'; // Ensure the path and extension are correct
import cors from 'cors';
import router from './src/MYPORTFOLIO/router/router.js'; // Ensure the path and extension are correct

const app = express();
ConnectDb();

app.use(cors());
app.use(router);

app.listen(5000, () => {
    console.log("I am listening on port 5000...");
});
