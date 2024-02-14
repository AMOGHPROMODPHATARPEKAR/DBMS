import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../components/Logo'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTrainer = () => {

  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: '',
    experience: 0,
    speciality: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData((prevData) => ({
      ...prevData, [name]: value
    }));
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Trainer Name is required';
    }
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required';
    }
    if (!formData.speciality.trim()) {
      newErrors.speciality = 'Speciality is required';
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
      const response = await axios.post('api/v1/admin/addTrainer', formData)
      if (response) {
        // toast.success('Recruited successfully!', {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 1000, // Auto close after 2 seconds
        //   });
        console.log(response.data.data)
        navigate('/')
      }
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
      setErrors({ message: "Trainer already registered" })
    }

  }

  return (

    <div className=' flex items-center justify-center py-3' >

      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight mb-3">Hire - Trainer</h2>

        <form onSubmit={handleSubmit} className=' py-2'>
          <div className='space-y-5 '>
            <label className=' w-full  inline-block mb-1 pl-1 '>Trainer Name:</label>
            <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${errors.username ? 'border-red-600' : 'border-gray-400'}`} type="text" name="username" value={formData.name} onChange={handleChange} />
            {errors.username && <div className=" text-red-500 text-left  text-sm">{errors.username}</div>}


            <label className='w-full  inline-block mb-1 pl-1'>Experience:</label>
            <input className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${errors.email ? 'border-red-600' : 'border-gray-400'}`} type="number" name="experience" value={formData.experience} onChange={handleChange} />
            {errors.email && <div className=" text-red-500 text-left  text-sm">{errors.email}</div>}


            <label className='w-full  inline-block mb-1 pl-1'>Speciality:</label>
            <select id="gym-expertise" name="speciality" onChange={handleChange} className=' p-4 '>
              <option value="cardio">Cardio</option>
              <option value="weightlifting">Weightlifting</option>
              <option value="yoga">Yoga</option>
              <option value="pilates">Pilates</option>
              <option value="crossfit">CrossFit</option>
            </select>

            <div className=' flex justify-center items-center'>
              <Button className=' w-1/4 bg-blue-600 rounded-lg cursor-pointer ' type="submit">Recruit</Button>
            </div>

          </div>
        </form>
        {errors.message &&
          <div className=' mt-3  flex items-center justify-center bg-rose-600 rounded-md py-1 text-black'>
            {errors.message}
          </div>
        }
        <ToastContainer />


      </div>
    </div>


  )
}

export default AddTrainer