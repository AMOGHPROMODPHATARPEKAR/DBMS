import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import Button from '../components/Button'

import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'


const Metric = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const user = useSelector((state)=> state.auth.userData)
    const [calculate,setCalculate] = useState(false)
      const [formData, setFormData] = useState({
          height:0,
          weight:0,
        });
  
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData, [name]:value
          }));
        };
      
        
  
  
     const handleSubmit = async (e) =>{
  
      e.preventDefault();
  
      const newErrors = {};

      if (!formData.height) {
        newErrors.height = 'Height is required';
      }
      if (!formData.weight) {
        newErrors.weight = 'weight is required';
      }
      
      
  
      console.log(Object.keys(newErrors).length)
      // If there are errors, update the state and stop the submission
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        console.log(errors)
        return;
      }
  
      // Continue with form submission logic here
  
      // Reset errors
      setErrors({});
  
      try {
        
            const response = await axios.post(`/api/v1/admin/updateMetric/${user.userId}`,formData)
            if(response)
            {
                console.log("Metric update done",response.data.data)
                navigate('/profile');
            }


      } catch (error) {
        console.error('Error sending data:', error);
        setErrors({message:"Update metric  error"})
      }

    }
     
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" bg-metric relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold text-[#4f729a] w-[80vw] mt-10 shadow-lg shadow-black rounded-lg" onClick={()=> navigate('/profile')}>
        <h1 className="w-fit h-fit p-2 bg-white/70 bg-gradient-to-r from-red-400 to-orange-400 text-black  absolute backdrop-blur-lg rounded-md">
          Metric Score -Your Potential
        </h1>
      </div>
     
     {user.metric !== null && <h1 className=' text-center text-3xl font-bold bg-blue-300 bg-opacity-70 w-[80vw] mt-16  mb-5 p-4  shadow-md shadow-black rounded-md'>My Metric Score: {user.metric}</h1>}
    
    {
        !calculate && <h1 className=' text-center text-3xl font-bold bg-blue-300 bg-opacity-70 w-[80vw] mt-16  mb-5 p-4  shadow-md shadow-black rounded-md cursor-pointer' onClick={()=>setCalculate(prev=>!prev)}>Calculate the metric</h1>
    }

    {calculate && 
    
      <div className='bg-blue-300 bg-opacity-70 w-[80vw] mt-16  mb-10 p-4  shadow-md shadow-black rounded-md'>
      
      <form onSubmit={handleSubmit} className=' py-2'>
         <div className='space-y-5 '>
         <label className=' w-full  inline-block mb-1 pl-1 text-xl font-semibold '>Height:(In cm)</label>
      <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 weight-200 border border-gray-200 w-full ${errors.height? 'border-red-600' : 'border-gray-400'}`} type="number" min='100' name="height" value={formData.height}  onChange={handleChange} />
      {errors.height && <div className=" text-red-800 text-left  text-sm">{errors.height}</div>}
         
         <label className=' w-full  inline-block mb-1 pl-1 text-xl font-semibold '>Weight:</label>
      <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 weight-200 border border-gray-200 w-full ${errors.height? 'border-red-600' : 'border-gray-400'}`} type="number" min='0' name="weight" value={formData.weight}  onChange={handleChange} />
      {errors.weight && <div className=" text-red-800 text-left  text-sm">{errors.weight}</div>}
        
      
            <div className=' flex justify-center items-center'>
            <Button className=' w-1/4 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 '  type="submit">Calculate</Button>
            </div>
      </div>
            </form>
      </div>
     }
    </div>
  )

  }
export default Metric