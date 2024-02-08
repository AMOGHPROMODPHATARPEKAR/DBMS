import axios from 'axios'
import React,{useState} from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const TrainerCard = ({
    trainerId,
    trainerName,
    experience,
    speciality,
    user=false
}) => {
    const navigate = useNavigate()
  
    
  return (
    <div className={`w-full ${user ? 'bg-orange-300 opacity-90' : 'bg-gray-100'}  rounded-xl p-4 cursor-pointer`}>
            <div>
            <h2
            className='text-lg font-bold'
            >Name : {trainerName}</h2>
            <p>Experience : {experience}</p>
            <p>Speciality:{speciality}</p>
           
            </div>
            {user && <div className=' mt-4 w-full flex justify-center items-center'>
                    <Button>Train</Button>
                   </div> }

            
           
            
        </div>
  )
}

export default TrainerCard
