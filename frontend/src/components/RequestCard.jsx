import axios from 'axios'
import React,{useState} from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const RequestCard = ({
    reqId,
    userId,
    curweight,
    height,
    finalweight,
    username
}) => {
    const navigate = useNavigate()

  return (
    <div className='w-full bg-gray-100 rounded-xl p-4 cursor-pointer' onClick={()=>navigate(`../add-diet/${userId}/${reqId}`)}>
            <div>
            <h2
            className='text-lg font-bold'
            >Name : {username}</h2>
            <p>Current Weight : {curweight} kg</p>
            <p>Height: {height} cm</p>
            <p>Aimed Weight: {finalweight} kg</p>
            </div>
               
        </div>
  )
}

export default RequestCard