import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WorkoutCard from '../components/WorkoutCard'

const WorkoutPlan = () => {
  const [workout,setWorkout] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
      axios.get('/api/v1/workout/getWorkout')
      .then((item)=>setWorkout(item?.data?.data))
      .catch((err)=> console.error(err))
  },[])
  console.log(workout)
  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/trainer')} className=" bg-wk relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-[#ca8a04] to-slate-300  rounded-md">
         Choose your plan Wisely
        </h1>
      </div>
    
      <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {workout.map((post)=>(
                <div key={post.planId} className=' p-2 w-1/4' >
                    < WorkoutCard {...post} user={true}/>
                </div>
            ))}
            </div>

      

    </div>
  )
}

export default WorkoutPlan