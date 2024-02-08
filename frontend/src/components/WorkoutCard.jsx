import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import axios from 'axios'

const WorkoutCard = ({
    planId,
    planName,
    description,
    difficulty,
    duration,
    trainerName,
    experience,
    user=false,
}) => {

    const userData = useSelector((state)=> state.auth.userData)
    const [enrolled,setEnrolled]= useState(false)
    // const [unrolled,setUnrolled]= useState(true)

   const enroll = async() =>{
    const response = await axios.post('/api/v1/workout/enroll',{
        userId:userData.userId,
        planId:planId
    })
    if(response)
    {
        setEnrolled(true)
    }
   }
   const deenroll = async() =>{
    const response = await axios.post('/api/v1/workout/unroll',{
        userId:userData.userId,
        planId:planId
    })
    if(response)
    {
        console.log(response)
        setEnrolled(false)
    }
   }

   useEffect(()=>{
    axios.post('/api/v1/workout/enrolled',{
        userId:userData.userId,
        planId:planId
    }).then((item)=>{item.data.data.length >0 ? setEnrolled(true) :setEnrolled(false)})
   },[])

  return (
    <div className={`w-full ${user ? 'bg-blue-300 opacity-90' : 'bg-gray-100'}  rounded-xl p-4 cursor-pointer`}>
            <div className=' gap-y-5'>
            <h2
            className='text-lg font-bold'
            >Plan Name : {planName}</h2>

            <p><span className=' font-semibold '>Duration</span> : { duration}</p>
            <p><span className=' font-semibold '>Description</span> : {description}</p>
            <p><span className=' font-semibold '>Difficulty</span> : {difficulty}</p>
            <p><span className=' font-semibold '>Trainer Name</span>: { trainerName}</p>
            <p><span className=' font-semibold '>Experience</span> : {experience}</p>
            
           
            </div>
            {user && <div className=' mt-4 w-full flex justify-center items-center' onClick={!enrolled && enroll} disabled={enrolled}>
                    <Button enrolled={enrolled}>Enroll</Button>
                   </div> }
            {user && <div className=' mt-4 w-full flex justify-center items-center' onClick={enrolled && deenroll} disabled={!enrolled}>
            <button className={`px-4 py-2 rounded-lg ${!enrolled ? 'bg-gray-500' : 'bg-red-400' } `}>
             {enrolled && "De-enroll"}
             {!enrolled && "De-enrolled"}
            </button>
                   </div> }

            
           
            
        </div>
  )
}

export default WorkoutCard