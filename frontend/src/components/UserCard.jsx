import React from 'react'

const UserCard = ({
    userId,
    username,
    email,
    metric,
    trainerName,
    speciality
}) => {
  return (
    <div className='w-full bg-blue-200 rounded-xl p-4 cursor-pointer'>
    <div>
    <h2
    className='text-lg font-bold'
    >Name : {username}</h2>
    <p><span className=' font-semibold'>Email</span> : {email} </p>
    <p><span className=' font-semibold'>Metric</span> : {metric !== null ? metric:"Not calculated"} </p>
    <p><span className=' font-semibold'>Trainer Name</span>: {trainerName !== null ? trainerName:'No trainer still'}</p>
    <p><span className=' font-semibold'>Trainer Speciality</span>: {speciality !== null ? speciality:'No trainer still'}</p>
    </div>
    
    
    
</div>
  )
}

export default UserCard