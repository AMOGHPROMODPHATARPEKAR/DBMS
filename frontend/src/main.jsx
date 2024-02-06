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
          path:'/login',
          element:<Login/>
        },
        {
          path:'/profile',
          element:<Profile/>
        },
        {
          path:'/work-plan',
          element:<WorkoutPlan/>
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
