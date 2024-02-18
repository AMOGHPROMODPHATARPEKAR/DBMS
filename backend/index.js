import mysql from 'mysql2'
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
import { AddTrainer, AddWorkout, AdminLogin, Userlogin, addTrainer, createUser,getAllUsers,getTrainers, getUser, getUserTrainer, statistics, updateMetric } from './controllers/userController.js';
import { addInventory, deleteItem, getInventory } from './controllers/InventoryController.js';
import { enrollUser, enrolled, getUserWorkout, getWorkoutPlan, unroll } from './controllers/workoutController.js';
import { addDietPlan, addDietRequest, deleteReq, getRequest, getUserDietPlan } from './controllers/DietController.js';

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
app.get('/api/v1/user/get/:id',getUser)
app.post('/api/v1/admin/adminLogin',AdminLogin)
app.post('/api/v1/admin/addTrainer',AddTrainer)
app.post('/api/v1/admin/addWorkout',AddWorkout)
app.get('/api/v1/admin/getTrainer',getTrainers)
app.post('/api/v1/admin/updateMetric/:id',updateMetric)
app.patch('/api/v1/user/addTrainer',addTrainer)
app.get('/api/v1/user/getTrainer/:id',getUserTrainer)
app.get('/api/v1/admin/statistic',statistics)
app.get('/api/v1/admin/getUsers',getAllUsers)


//inventory
app.get('/api/v1/inventory/getInventory',getInventory)
app.post('/api/v1/inventory/delete/:inventoryid',deleteItem)
app.patch('/api/v1/inventory/add',addInventory)

//workoutplan
app.get('/api/v1/workout/getWorkout',getWorkoutPlan)
app.post('/api/v1/workout/enroll',enrollUser)
app.get('/api/v1/workout/userWorkout/:userId',getUserWorkout)
app.post('/api/v1/workout/enrolled',enrolled)
app.post('/api/v1/workout/unroll',unroll)

//diet
app.post('/api/v1/diet/addReq/:userid',addDietRequest)
app.get('/api/v1/diet/getReq',getRequest)
app.post('/api/v1/diet/addplan/:userid',addDietPlan)
app.patch('/api/v1/diet/delReq/:reqId',deleteReq)
app.get('/api/v1/diet/getUserPlan/:userid',getUserDietPlan)

export {connection}

