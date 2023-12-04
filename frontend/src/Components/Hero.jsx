import React from 'react'
import { FaPlay } from "react-icons/fa6";
function Hero() {
  return (
    <div className='bg-black h-[45%] w-[90%] rounded-3xl flex items-end'>
      <div className="flex flex-row items-center justify-start text-black bg-greeny rounded-3xl text-sm pl-5 h-[12%] w-[25%] mb-10 ml-10">Watch The Trailer <FaPlay className='ml-3 mt-[1px]' /></div>
    </div>
  )
}

export default Hero
