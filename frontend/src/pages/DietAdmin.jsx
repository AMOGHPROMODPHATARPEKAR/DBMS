import React, { useEffect, useState } from 'react'
import RequestCard from '../components/RequestCard'
import axios from 'axios'

const DietAdmin = () => {
    const [req,setReq] = useState([])
    useEffect(()=>{
        axios.get('/api/v1/diet/getReq')
        .then((item)=>setReq(item.data?.data))
        .catch((err)=>console.error(err))
    },[])
  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/user-diet')} className=" bg-diet2 relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-[300px] flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-green-400 to-slate-300  rounded-md">
         Diet Request
        </h1>
      </div>

      <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {req.map((post)=>(
                <div key={post.reqId} className=' p-2 w-1/3' >
                    < RequestCard {...post}/>
                </div>
            ))}
            
       </div>
      

    </div>
  )
}

export default DietAdmin