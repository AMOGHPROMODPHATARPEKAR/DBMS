import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {
  const admin = useSelector((state) => state.auth.admin)
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              <Link
                to='/login'
              >Login</Link>to read posts
            </h1>
          </div>
        </div>
      </div>
    )
  }
  if (!admin) { //users 
    return (
      <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/profile')} className=" bg-home relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
      </div>

      <div onClick={()=>navigate('/profile')} className='bg-met relative bg-no-repeat bg-white  bg-cover h-[300px] flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black rounded-md cursor-pointer' style={{backgroundPosition: 'center -130px'}}>
        <h1 className=' w-fit h-fit p-2 bg-white/70   rounded-md'>Metric Score</h1>
      </div>

      <div onClick={()=>navigate('/Usertrainer')} className='bg-trainer bg-center relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-[300px] flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black rounded-md cursor-pointer'>
        <h1 className=' w-fit h-fit p-2 bg-white/70   rounded-md'>Pick Your Trainer</h1>
      </div>

    </div>
    )
  }

  //admins
  return (

    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/statistic')} className=" bg-admin relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-red-500 to-blue-500  rounded-md">
          ADMIN HOME - Where Power Dwells
        </h1>
      </div>

      <div onClick={()=>navigate('/inventory')} className='bg-inven relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-[300px] flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black rounded-md cursor-pointer'>
        <h1 className=' w-fit h-fit p-2 bg-white/70   rounded-md'>INVENTORY</h1>
      </div>

      <div onClick={()=>navigate('/trainer')} className='bg-train relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-[300px] flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black rounded-md cursor-pointer'>
        <h1 className=' w-fit h-fit p-2 bg-white/70   rounded-md'>Trainer</h1>
      </div>

    </div>
  )
}



export default Home