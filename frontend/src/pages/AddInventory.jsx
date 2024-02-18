import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { Button, Logo } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddInventory = () => {

  const navigate = useNavigate()

    const {
        register,
        handleSubmit,setValue, watch,
        formState: { errors },
      } = useForm();

      const purchaseDate = watch('purchase'); // Get the value of the purchase date

  // Function to set minimum date for purchase and update inputs
  const setMinimumDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setValue('purchase', today, { shouldValidate: true });
    setValue('update', today, { shouldValidate: true });
  };

  useEffect(() => {
    setMinimumDate();
  }, []);
    
      const onsubmit = async(d)=>{
        console.log(d)
        const response = await axios.patch('/api/v1/inventory/add',d)
        if(response)
        {
          console.log(response.data?.data);
          navigate('/inventory')
        }
      }

  return (
    <div className="flex flex-col justify-center items-center">
        <div className={`mx-auto w-full max-w-lg bg-blue-300 rounded-xl p-10 border border-black/10 my-4`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" color='red' />
                    </span>
        </div>
        
      <h2 className="text-center text-2xl font-bold leading-tight mb-3">Add Inventory</h2>
    <form onSubmit={handleSubmit(onsubmit)} className=' py-2'>
    <div className='space-y-5 '>
      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Item Name</label>
      <input className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('itemName', { required: true })} />
      {errors.itemName && <p className=' text-red-600'>Item Name is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Quantity</label>
      <input type='number' className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('qty', { required: true } )}  />
      {errors.qty && <p className=' text-red-600'>Quantity is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Purchase Date</label>
      <input type='date'  className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('purchase', { required: true } )} />
      {errors.purchase && <p className=' text-red-600'>Purchase Date is required.</p>}

      <label className=' w-full  inline-block mb-1 pl-1 font-semibold'>Updated Date</label>
      <input type='date' className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' {...register('update', { required: true } )}  min={purchaseDate}  />
      {errors.update && <p className=' text-red-600'>Update Date is required.</p>}

      <div className=' flex justify-center items-center'>
              <Button className=' w-1/4 bg-blue-600 rounded-lg cursor-pointer ' type="submit">Submit</Button>
            </div>
      </div>
    </form>
    </div>
    </div>
  )
}

export default AddInventory