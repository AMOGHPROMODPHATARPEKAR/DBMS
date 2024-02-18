import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { Button, Logo } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DietCard from '../components/DietCard';

const DietPlan = () => {
    const [diet,setDiet] = useState(false)
    
    const [plan,setPlan] = useState([])

    

    const  user = useSelector(state=> state.auth.userData)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onsubmit = async(d)=>{
        console.log(d)
        const response = await axios.post(`/api/v1/diet/addReq/${user.userId}`,d);
        if(response)
        {
            console.log(response);
            setDiet(prev=>!prev)
        }else
        {
            console.error("Error while inserting :: dietplan")
        }
        
      }

      useEffect(()=>{
        axios.get(`/api/v1/diet/getUserPlan/${user.userId}`)
        .then((item)=>setPlan(item.data?.data))
        .catch((err)=>console.log(err))
    },[])

  return (
    <div className="flex flex-col justify-center items-center ">
      <div onClick={()=>navigate('/user-diet')} className=" bg-diet2 relative bg-center bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-[300px] flex justify-center  items-center text-4xl font-bold  w-[80vw] my-10 shadow-lg shadow-black cursor-pointer ">
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-green-400 to-slate-300  rounded-md">
         My Diet
        </h1>
      </div>

     <div className=' flex flex-wrap justify-center item-center  w-[80vw] my-10'>
            {plan.map((post)=>(
                <div key={post.dietId} className=' p-2 w-1/3' >
                    <DietCard {...post} />
                </div>
            ))}
            
       </div>

      {
        !diet && <h1 className=' text-center text-3xl font-bold bg-green-300 bg-opacity-70 w-[80vw] mt-5  mb-5 p-4  shadow-md shadow-black rounded-md cursor-pointer' onClick={()=>setDiet(prev=>!prev)}>Want A New Diet Plan</h1>
      }  
      {
        diet && 
        <div className='bg-green-300 bg-opacity-70 w-[80vw] mt-16  mb-10 p-4  shadow-md shadow-black rounded-md'>
      
      <form onSubmit={handleSubmit(onsubmit)} className=' py-2'>
    <div className='space-y-5 '>
      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Current Weight</label>
      <input type='number' className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('curweight', { required: true })} />
      {errors.curweight && <p className=' text-red-600'>Current Weight  is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Height (in cms)</label>
      <input type='number' className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('height', { required: true } )}  />
      {errors.height && <p className=' text-red-600'>Height is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Weight Aimed</label>
      <input type='number'  className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('fweight', { required: true } )} />
      {errors.fweight && <p className=' text-red-600'>Final weight is required.</p>}
 
      <div className=' flex justify-center items-center'>
              <Button className=' w-1/4 bg-blue-600 rounded-lg cursor-pointer ' type="submit">Submit</Button>
        </div>
      </div>
    </form>
      </div>
      }

    </div>
  )
}

export default DietPlan