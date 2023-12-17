import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className=' flex flex-col bg-black w-52 h-72 rounded-lg p-7'>
        <FaRegFileAlt className=' text-red-700'/>
        <p className=' text-yellow-500 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.</p>
        <footer className='bg-slate-100 self-end bottom-0 '>dfdsvdsdsf</footer>
    </div>
  )
}

export default Card