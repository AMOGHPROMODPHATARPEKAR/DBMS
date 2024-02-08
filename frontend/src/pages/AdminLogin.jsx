import React ,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import {Button ,Logo} from '../components/index'
import { useDispatch } from 'react-redux'
import { login as authLogin} from '../store/authSlice'
import axios from 'axios'

const AdminLogin = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error,setError] =useState('')
  const [form,setForm] =useState({
    email:'',
    password:''
  })

  const handleChange = (e) =>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }

    const login = async(e) =>{
        e.preventDefault();

        try {
            
            const userData = await axios.post('/api/v1/admin/adminLogin',form)
            // console.log(userData)
            if(userData)
            {
                
                console.log(userData.data?.data)
                dispatch(authLogin(userData.data?.data))
                navigate('/')
            }

        } catch (error) {
            setError("INVALID CREDIANTAIL")
        }

    }

  return (
    <div className='flex items-center justify-center w-full py-3'>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
      <div className="mb-2 flex justify-center">
                  <span className="inline-block w-full max-w-[100px]">
                      <Logo width="100%" />
                  </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">Admin -Power to control</h2>
      
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={login} className='mt-8'>
      <div className=' space-y-5'>
         
         <div>
          <label className=' w-full inline-block mb-1 py-1'>Email:</label>
          <input  className=' w-full  rounded-lg focus:bg-gray-50 outline-none  mb-1 py-2' type='email' name='email' value={form.email} onChange={handleChange} />
         </div>
         <div>
          <label className=' w-full inline-block mb-1 py-1'>Password:</label>
          <input  className='w-full  rounded-lg focus:bg-gray-50 outline-none  mb-1 py-2' type='password' name='password' value={form.password} onChange={handleChange} />
         </div>
         
         <Button
         type='submit'
         className='w-full'
         >
          Log In
         </Button>
      </div>
      </form>
      
      
      </div>
  </div>
  )
}

export default AdminLogin