import axios from 'axios';
import React,{useState,useEffect} from 'react'

const Statistics = () => {

  const [stat,setStat] = useState([]);

  useEffect(()=>{

    axios.get('/api/v1/admin/statistic')
    .then((item)=>setStat(item?.data?.data))
    .catch((err)=>console.error(err))

  },[])

  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/statistic')} className=" bg-stat relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-blue-500 to-red-400   rounded-md">
          Statistics
        </h1>
      </div>

      <div className='w-1/2 flex justify-center items-center rounded-md bg-blue-300   my-5 shadow-lg shadow-black'>
        <div className=' gap-y-4'>
        <h1 className=' font-bold text-2xl mt-2'>COUNT OF USER, TRAINER AND INVENTORY ITEMS </h1>
        <div className=' text-center'>
        {stat.map((each)=>(
         <p className='my-1'><span className='text-lg font-semibold'>{each.category}: </span>{each.count}</p>
        ))}
        </div>
        
        </div>
      
      </div>

      
    </div>
  )
}

export default Statistics