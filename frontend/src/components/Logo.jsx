import React from 'react'

const Logo = ({width = '300px',color='blue'}) => {
    return (
      <div className={`w-[${width}] text-2xl font-bold text-${color}-500 `}>
        FittY
      </div>
    )
  }
  

export default Logo