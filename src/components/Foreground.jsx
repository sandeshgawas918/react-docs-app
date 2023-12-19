import React from 'react'
import Card from './Card'

const Foreground = () => {
  return (
    <div className=' absolute bg-orange-500/30 w-full h-screen z-20 p-11'>
      <Card/>
      {/* <div className=' absolute bg-black w-52 h-72 rounded-lg p-7'>
        <FaRegFileAlt className=' text-red-700' />
        <p className=' text-yellow-500 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.</p>
        <footer className='bg-slate-100 absolute bottom-0 '>dfdsvdsdsf</footer>
      </div> */}
    </div>
  )
}

export default Foreground