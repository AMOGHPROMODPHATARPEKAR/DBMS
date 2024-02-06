import mysql from 'mysql2'
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
import { createUser, login } from './controllers/userController.js';

const app = express();
const PORT = 4000;

dotenv.config({
  path:'./.env'
})

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  // credentials:true
}))

app.use(express.json({
  limit:"16kb"
}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.Password,
    database: process.env.Database_Name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});


app.post('/api/v1/createUser',createUser)
app.post('/api/v1/login',login)

export {connection}

