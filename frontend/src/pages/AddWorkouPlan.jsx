import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../components/Logo'

const AddWorkouPlan = () => {

    const navigate = useNavigate()
  const [errors, setErrors] = useState({});
    const [trainer,setTrainer] = useState([])

    const [formData, setFormData] = useState({
        planName: '',
        duration: 0,
        description:'',
        difficulty:'',
        trainerId:0,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(formData)
        setFormData((prevData) => ({
          ...prevData, [name]:value
        }));
      };
    
      useEffect(()=>{
        axios.get('api/v1/admin/getTrainer')
        .then((item)=> setTrainer(item.data?.data))
        .catch((err)=> console.error(err))
       },[])


   const handleSubmit = async (e) =>{

    e.preventDefault();

    const newErrors = {};
    if (!formData.planName.trim()) {
      newErrors.planName = 'Workout Name is required';
    }
    if (!formData.duration) {
      newErrors.duration = 'Duration is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.difficulty.trim()) {
      newErrors.difficulty = 'Difficulty is required';
    }
    if (!formData.trainerId) {
      newErrors.trainerId = 'trainerId is required';
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
      const response = await axios.post('api/v1/admin/addWorkout',formData)
      if(response)
      {
        
        console.log(response.data.data)
        navigate('/')
      }
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
      setErrors({message:"Trainer already registered"})
    }

   }

  

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" bg-work relative bg-no-repeat bg-opacity-3 backdrop-blur-sm bg-white  bg-cover h-96 flex justify-center  items-center text-4xl font-bold text-[#4f729a] w-[80vw] mt-10 shadow-lg shadow-black">
        <h1 className="w-fit h-fit p-2 bg-white/70 text-black  absolute backdrop-blur-lg">
          Create Workout Plan
        </h1>
      </div>
     
      <div className="bg-orange-300 bg-opacity-70 w-[80vw] mt-16  mb-10 p-4  shadow-md shadow-black rounded-md  ">
      
      <form onSubmit={handleSubmit} className=' py-2'>
                <div className='space-y-5 '>
            <label className=' w-full  inline-block mb-1 pl-1 text-xl '>Workout Plan Name:</label>
      <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${errors.planName? 'border-red-600' : 'border-gray-400'}`} type="text" name="planName" value={formData.planName}  onChange={handleChange} />
      {errors.planName && <div className=" text-red-800 text-left  text-sm">{errors.planName}</div>}
      
            <label className=' w-full  inline-block mb-1 pl-1 text-xl'>Description:</label>
      <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${errors.description? 'border-red-600' : 'border-gray-400'}`} type="text" name="description" value={formData.description}  onChange={handleChange} />
      {errors.description && <div className=" text-red-800 text-left  text-sm">{errors.description}</div>}
      
      <label className='w-full  inline-block mb-1 pl-1 text-xl'>Duration (in weeks):</label>
      <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${errors.duration? 'border-red-600' : 'border-gray-400'}`} type="number" name="duration" value={formData.duration}  onChange={handleChange} />
      {errors.duration && <div className=" text-red-800 text-left  text-sm">{errors.duration}</div>}
      
      <label className='w-full  inline-block mb-1 pl-1 text-xl'>Trainer (who made the plan):</label>
      <select id="gym-expertise" name="trainerId" onChange={handleChange} className=' p-4  rounded-md'>
      {trainer.map(option => (
          <option key={option.trainerId} value={option.trainerId}>{option.trainerName}</option>
        ))}
    </select>
      {errors.trainerId && <div className=" text-red-800 text-left  text-sm">{errors.trainerId}</div>}
      
      <label className='w-full  inline-block mb-1 pl-1 text-xl'>Difficulty:</label>
      <select id="gym-expertise" name="difficulty" onChange={handleChange} className=' p-4  rounded-md'>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
    </select>
    {errors.difficulty && <div className=" text-red-800 text-left  text-sm">{errors.difficulty}</div>}
            <div className=' flex justify-center items-center'>
            <Button className=' w-1/4 bg-blue-600 rounded-lg cursor-pointer '  type="submit">Submit</Button>
            </div>
      </div>
            </form>
      </div>
       
    </div>
  )
}

export default AddWorkouPlan