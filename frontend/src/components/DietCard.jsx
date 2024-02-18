import React from 'react'

const DietCard = ({
    dietId,
    userId,
    startDate,
    endDate,
    caloriesGoal,
    proteinGoal,
    carbohydrateGoal,
    fatGoal
}) => {
  return (
    <div className='w-full bg-gray-100 rounded-xl p-4 cursor-pointer'>
            <div>
            <p><span className=' font-semibold'>Start date</span> : {startDate.split('T')[0]} </p>
            <p><span className=' font-semibold'>End date</span> : {endDate.split('T')[0]} </p>
            <p><span className=' font-semibold'>Calories Goal</span> : {caloriesGoal} </p>
            <p><span className=' font-semibold'>Protein Goal</span> : {proteinGoal} </p>
            <p><span className=' font-semibold'>Carbohydrate Goal</span> : {carbohydrateGoal} </p>
            <p><span className=' font-semibold'>Fat Goal</span> : {fatGoal} </p>
            </div>
             
            
        </div>
  )
}

export default DietCard