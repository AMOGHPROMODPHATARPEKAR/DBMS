import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WorkoutCard from '../components/WorkoutCard'

const Profile = () => {

  const [workout,setWorkout] = useState([])
  const navigate = useNavigate()
  const user = useSelector((state)=>state.auth.userData)

  useEffect(()=>{
    axios.get(`/api/v1/workout/userWorkout/${user.userId}`)
    .then((item)=>setWorkout(item?.data?.data))
  },[])

  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/profile')} className=" bg-prof relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer rounded-md">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-[#ca8a04] to-[#ef4444]  rounded-md">
         My Profile
        </h1>
      </div>

        <div  className='w-[80vw] my-10 flex'>
        <div className=' w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#ca8a04] to-[#ef4444] flex justify-center items-center'>
          <div onClick={()=> navigate('/metric')} className=' cursor-pointer'> 
          <h1 className='text-center px-2  font-bold text-3xl'>Metric</h1>
          {user.metric === null && <p className='p-2 bg-white/70 mt-2 rounded-lg'>Calculate Your Gym metric</p>}
          {user.metric !== null &&  <p className='p-2 bg-white/70 mt-2 rounded-lg text-center font-semibold text-2xl'>{user.metric}</p>}
          </div>
        </div>
        <div className=' w-[500px] bg-gray-400 ml-10 rounded-md opacity-50 flex justify-center items-center'>
        <div className=' text-3xl font-bold '>

        <p>Name : {user.username} </p>
        <p>Email : {user.email}</p>

        </div>
        </div>
        </div>
      

      <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
        <h1 className='w-full py-4 bg-gradient-to-r from-[#ca8a04] to-[#ef4444] font-bold text-3xl text-center rounded-md'>My Workout Plan</h1>
      {workout.map((post)=>(
                <div key={post.planId} className=' p-2 w-1/4' >
                    < WorkoutCard {...post} user={true}/>
                </div>
            ))}
      </div>

      

    </div>
  )
}

export default Profile