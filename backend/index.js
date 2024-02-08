import mysql from 'mysql2'
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
import { AddTrainer, AddWorkout, AdminLogin, Userlogin, createUser,getTrainers } from './controllers/userController.js';
import { deleteItem, getInventory } from './controllers/InventoryController.js';

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



//user and admin
app.post('/api/v1/user/createUser',createUser)
app.post('/api/v1/user/userLogin',Userlogin)
app.post('/api/v1/admin/adminLogin',AdminLogin)
app.post('/api/v1/admin/addTrainer',AddTrainer)
app.post('/api/v1/admin/addWorkout',AddWorkout)
app.get('/api/v1/admin/getTrainer',getTrainers)


//inventory
app.get('/api/v1/inventory/getInventory',getInventory)
app.post('/api/v1/inventory/delete/:inventoryid',deleteItem)

export {connection}

