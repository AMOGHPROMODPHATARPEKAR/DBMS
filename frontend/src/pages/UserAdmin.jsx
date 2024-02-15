import React,{useState,useEffect} from 'react'
import UserCard from '../components/UserCard';
import axios from 'axios';

const UserAdmin = () => {
    const [list,setList] = useState([]);

    useEffect(()=>{

        axios.get('/api/v1/admin/getUsers')
        .then((item)=>setList(item?.data?.data))
        .catch((err)=>console.log(err))

    },[])

  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/user')} className=" bg-AdU relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-blue-400 to-slate-300  rounded-md">
        Trusty Members
        </h1>
      </div>
    
      <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {list.map((post)=>(
                <div key={post.trainerId} className=' p-2 w-1/4' >
                    <UserCard {...post} />
                </div>
            ))}
            </div>
    </div>
  )
}

export default UserAdmin