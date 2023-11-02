"use client"

import React, {useState} from 'react'

const Quantity = () => {

const [num,setNum] =useState(1);


  return ( <div className='flex  items-center gap-x-3'>
     {/* minus */}
    <button className='center border h-6 w-6 rounded-full bg-gray-200 hover:shadow-xl'
    onClick={()=>{
        return (
           setNum(num <= 1 ? 1: num - 1) 
        )
    }}>-</button>

{/* number */}
    
    <span>{num}</span>
    {/* plus */}
    <button className=' center border h-6 w-6 rounded-full  bg-gray-200  hover:shadow-xl' 
    onClick={()=>{
        return (
        setNum(num + 1) 
        )
    }}>+</button>
    </div>
  )
}

export default Quantity;