require("dotenv").config();
const express = require("express")
const cors = require("cors");
const ConnectDB = require('./config/db.js');
const userRouter = require("./routes/userRouter")


const app = express();

app.use(cors());
app.use(express.json());

app.use('/', userRouter);


const PORT = process.env.port || 7000;

app.listen(PORT, async() =>{
    await ConnectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});