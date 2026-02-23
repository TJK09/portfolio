import React from 'react'
import Image from 'next/image'

const projectNavbar = () => {
  return (
    <div className='flex justify-evenly items-center'>
        <div className="flex justify-between items-center px-6 py-4 w-full gap-10">
            <Image src="/Logo.jpg" alt="logo" width={10} height={10} className='w-10 h-10 object-contain'/>
        </div>
        <div className="flex justify-center items-center gap-6">
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
            <div className="flex">
                <button className="text-[15px] bg-black rounded-2xl text-white">Download Resume</button>
            </div>
        </div>
    </div>
  )
}

export default projectNavbar