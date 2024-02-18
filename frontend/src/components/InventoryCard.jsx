import axios from 'axios'
import React,{useState} from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const InventoryCard = ({
    inventoryId,
    itemname,
    purchaseDate,
    qauntity,
    updated
}) => {
    const navigate = useNavigate()
  
    const deleteItem = async()=>{
        const res = await axios.post(`/api/v1/inventory/delete/${inventoryId}`);
        if(res)
        {
            navigate('/')
        }
    }

  return (
    <div className='w-full bg-gray-100 rounded-xl p-4 cursor-pointer'>
            <div>
            <h2
            className='text-lg font-bold'
            >Name : {itemname}</h2>
            <p>Quantity : {qauntity}</p>
            <p>Purchase Date:{purchaseDate.split('T')[0]}</p>
            <p>Updated Date:{updated.split('T')[0]}</p>
            </div>
            
            <div onClick={deleteItem} className=' pt-3 flex justify-end'>
            <AiTwotoneDelete fill='red' size={30}/>
            </div> 
            
        </div>
  )
}

export default InventoryCard