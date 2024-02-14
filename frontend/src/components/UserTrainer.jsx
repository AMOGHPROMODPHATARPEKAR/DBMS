import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TrainerCard from './TrainerCard'
import { setMyUser } from '../store/authSlice'

const UserTrainer = () => {

    const dispatch = useDispatch()
    const [list,setList]= useState([])
    const userData = useSelector(state=> state.auth.userData)
    const [user,setUser] = useState({})
    const [already,setAlready] =useState(false)
    useEffect(()=>{

        axios.get('api/v1/admin/getTrainer')
        .then((item)=> setList(item.data?.data))
        .catch((err)=> console.error(err))
        
        axios.get(`/api/v1/user/get/${userData.userId}`)
        .then((item)=>{
          setUser(item.data?.data[0]),
          dispatch(setMyUser(item.data?.data[0]));
           })
        .catch((err)=>console.error(err))

        

        if(userData.trainer !== null)
        {
          setAlready(true)
        }


    },[])
    console.log("all",already)
  return (
   <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/trainer')} className=" bg-best relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-orange-300 to-orange-500  rounded-md">
        Train with the Best
        </h1>
      </div>
      {already && <div onClick={()=> setAlready(false)} className=' bg-slate-100 text-center font-bold text-1xl p-2 rounded-lg cursor-pointer mb-5'>
                  You Already Have a Trainer. Click Me If You Want To Change The Trainer
                  </div>
        }
    
     {
      !already &&
     <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {list.map((post)=>(
                <div key={post._id} className=' p-2 w-1/4' >
                    <TrainerCard {...post} user={true} userData={user} enrolled={already}/>
                </div>
            ))}
            </div>
      }
      
      

      

    </div>
  )
}

export default UserTrainer