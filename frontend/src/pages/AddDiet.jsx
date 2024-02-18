import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Button } from '../components';
import axios from 'axios';

const AddDiet = () => {
    const {userId,reqId} = useParams();
    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onsubmit = async(d)=>{
        console.log(d)
        const response = await axios.post(`/api/v1/diet/addplan/${userId}`,d);
        if(response)
        {
          console.log(response)
          axios.patch(`/api/v1/diet/delReq/${reqId}`)
          .then((item)=>navigate('/'))
          .catch((err)=>console.error(err))
        }
        else
        {
          console.error("Error inserting :: add diet")
        }
      }

  return (
    <div className="flex flex-col justify-center items-center">
    <div className=" bg-jj relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold text-[#4f729a] w-[80vw] mt-10 shadow-lg shadow-black">
      <h1 className="w-fit h-fit p-2 bg-white/70 text-black  absolute backdrop-blur-lg rounded-md">
        Create Diet Plan
      </h1>
    </div>

    <div className="bg-green-300 bg-opacity-70 w-[80vw] mt-16  mb-10 p-4  shadow-md shadow-black rounded-md  ">
    <form onSubmit={handleSubmit(onsubmit)} className=' py-2'>
    <div className='space-y-5 '>
      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Start Date</label>
      <input type='date' className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('startDate', { required: true })} min={today} />
      {errors.startDate && <p className=' text-red-600'>Start Date  is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>End Date</label>
      <input type='date' className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('endDate', { required: true } )} min={today} />
      {errors.endDate && <p className=' text-red-600'>End Date is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Calories Goal</label>
      <input type='number'  className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('caloriesGoal', { required: true } )} />
      {errors.caloriesGoal && <p className=' text-red-600'>Calories Goal is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Protein Goal</label>
      <input type='number'  className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('proteinGoal', { required: true } )} />
      {errors.proteinGoal && <p className=' text-red-600'>Protein Goal is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Carbohydrate Goal</label>
      <input type='number'  className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('carbohydrateGoal', { required: true } )} />
      {errors.carbohydrateGoal && <p className=' text-red-600'>Carbohydrate Goal is required.</p>}
 
      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Fat Goal</label>
      <input type='number'  className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('fatGoal', { required: true } )} />
      {errors.fatGoal && <p className=' text-red-600'>Fat Goal is required.</p>}

      <div className=' flex justify-center items-center'>
              <Button className=' w-1/4 bg-green-700 rounded-lg cursor-pointer ' type="submit">Submit</Button>
        </div>
      </div>
    </form>
    
    </div>
     
  </div>
  )
}

export default AddDiet