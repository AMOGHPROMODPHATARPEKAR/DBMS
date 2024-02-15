import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const TrainerCard = ({
    trainerId,
    trainerName,
    experience,
    speciality,
    user=false,
    enrolled=false,
    userData={}
}) => {
  const navigate = useNavigate()
  const [train,setTrain] = useState(enrolled)

  useEffect(()=>{
    if(userData.trainer !== trainerId)
    {
      setTrain(false)
    }
    else
    {
      setTrain(true)
    }
  },[])

  const addTrainer = async() =>{
    
    const response = await axios.patch('/api/v1/user/addTrainer',{
      trainerId:trainerId,
      userId:userData.userId
    })
    if(response)
    {
     
      setTrain(true)
      console.log(response.data?.data)
      navigate('/')
    }
    else
    {
      console.error("Error inserting")
    }
    
  }

  
  
  return (
    <div className={`w-full ${user ? 'bg-orange-300 opacity-90' : 'bg-gray-100'}  rounded-xl p-4 cursor-alias`}>
            <div>
            <h2
            className='text-lg font-bold'
            >Name : {trainerName}</h2>
            <p>Experience : {experience}</p>
            <p>Speciality:{speciality}</p>
           
            </div>
            {user && <div className=' mt-4 w-full flex justify-center items-center' onClick={addTrainer} disabled={train} >
            <button className={`px-4 py-2 rounded-lg ${train ? 'bg-gray-500' : 'bg-blue-500' }`}>
                Train
            </button>
                   </div> }

            
           
            
        </div>
  )
}

export default TrainerCard
