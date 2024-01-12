require('dotenv').config();
const express = require('express');
const databaseConnect = require('./db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./routes/auth.route');
const todoRouter = require('./routes/todo.route');
const app = express();

databaseConnect();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));


app.use('/api/auth', userRouter);
app.use('/api/todo', todoRouter);






const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
})
