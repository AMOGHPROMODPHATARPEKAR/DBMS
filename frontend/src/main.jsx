import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './components/SignUp.jsx'
import {Login} from './components/index.js'
import Profile from './pages/Profile.jsx'
import WorkoutPlan from './pages/WorkoutPlan.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AddTrainer from './pages/AddTrainer.jsx'
import AddWorkouPlan from './pages/AddWorkouPlan.jsx'
import Inventory from './components/Inventory.jsx'
import Trainer from './components/Trainer.jsx'
import Statistics from './components/Statistics.jsx'
import UserTrainer from './components/UserTrainer.jsx'
import Metric from './pages/Metric.jsx'
import AddInventory from './pages/AddInventory.jsx'
import UserAdmin from './pages/UserAdmin.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/userlogin',
          element:<Login/>
        },
        {
          path:'/adminlogin',
          element:<AdminLogin/>
        },
        {
          path:'/profile',
          element:<Profile/>
        },
        {
          path:'/work-plan',
          element:<WorkoutPlan/>
        },
        {
          path:'/add-trainer',
          element:<AddTrainer/>
        },
        {
          path:'/add-work',
          element:<AddWorkouPlan/>
        },
        {
          path:'/inventory',
          element:<Inventory/>
        },
        {
          path:'/trainer',
          element:<Trainer/>
        }
        ,{
          path:'/statistic',
          element:<Statistics/>
        }
        ,{
          path:'/Usertrainer',
          element:<UserTrainer/>
        }
        ,{
          path:'/metric',
          element:<Metric/>
        }
        ,{
          path:'/add-inventory',
          element:<AddInventory/>
        }
        ,{
          path:'/user',
          element:<UserAdmin/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

)
