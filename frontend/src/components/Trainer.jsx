import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TrainerCard from './TrainerCard'

const Trainer = () => {

    const [list,setList]= useState([])
    
    useEffect(()=>{

        axios.get('api/v1/admin/getTrainer')
        .then((item)=> setList(item.data?.data))
        .catch((err)=> console.error(err))

    },[])

  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/trainer')} className=" bg-my relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-gray-500 to-slate-300  rounded-md">
         My Gym Strength
        </h1>
      </div>
    
      <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {list.map((post)=>(
                <div key={post.trainerId} className=' p-2 w-1/4' >
                    <TrainerCard {...post} />
                </div>
            ))}
            </div>


    </div>
  )
}

export default Trainer