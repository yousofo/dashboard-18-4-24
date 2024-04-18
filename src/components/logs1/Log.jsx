import React from 'react'
import { FaRegCircle } from "react-icons/fa";

const Log = ({message,time}) => {
  return (
    <li className='flex items-center gap-2.5'>
      <FaRegCircle className='text-[#3c4b9a]'/>
      <p className='flex-1'>{message}</p>
      <span className='opacity-80'>{time}</span>
    </li>
  )
}

export default Log