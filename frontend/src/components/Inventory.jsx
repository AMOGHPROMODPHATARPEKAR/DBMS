import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InventoryCard from './InventoryCard'
import {AiFillPlusCircle} from 'react-icons/ai'

const Inventory = () => {
    const navigate = useNavigate()
    const [list,setList] = useState([])
    

    useEffect(()=>{
        axios.get('/api/v1/inventory/getInventory')
        .then((item)=>setList(item.data?.data))
        .catch((err)=>console.error(err))
    },[])
// console.log(list)
  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/inventory')} className=" bg-in relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-gray-500 to-slate-300  rounded-md">
         Welcome To The Store
        </h1>
      </div>
    
      <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {list.map((post)=>(
                <div key={post._id} className=' p-2 w-1/4' >
                    <InventoryCard {...post}/>
                </div>
            ))}
            
            <div onClick={()=>navigate('/add-inventory')} className=' cursor-pointer mt-5 ml-5 flex justify-center items-center'>
             <AiFillPlusCircle size={100} fill='white' /> 
            </div>
       </div>
    </div>
  )
}

export default Inventory