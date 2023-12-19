import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownloadCloudFill } from "react-icons/ri";


const Card = () => {
  return (
    <div className=' absolute bg-black w-52 h-72 rounded-3xl p-7'>
      <FaRegFileAlt className=' text-red-700' />
      <p className=' text-yellow-500 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.</p>
      <h6 className=' text-white absolute left-4 m-1  items-center justify-center bottom-9'>0.4 Mb</h6>
      <RiDownloadCloudFill className=' text-white absolute right-4 flex m-1 justify-center items-center text-2xl bottom-9' />
      <footer className=' bg-green-600 absolute bottom-0 w-52 h-8 left-0 rounded-b-3xl flex items-center justify-center'>
        <h5 className=' text-white'>Download Now</h5>
      </footer>
    </div>
  )
}

export default Card