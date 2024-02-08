import React from 'react'

const Button = ({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className ='',
    enrolled,
    unrolled,
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${enrolled ? 'bg-gray-500' : bgColor } ${textColor} ${className}`}{...props}>
        { !enrolled && children} 
        {enrolled && "Enrolled"}
    </button>
  )
}

export default Button