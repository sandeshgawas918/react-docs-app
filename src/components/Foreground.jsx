import React from 'react'
import Card from './Card'

const Foreground = () => {
  return (
    <div className=' absolute bg-orange-500/30 w-full h-screen z-20 p-11'>
      <Card/>
      <Card/>
    </div>
  )
}

export default Foreground