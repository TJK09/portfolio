import React from 'react'
import Image from 'next/image'

const projectNavbar = () => {
    const handleDownload = () =>{
        const link = document.createElement('a');
        link.href = "./MyCV.pdf";
        link.download = "TaimurJanCV.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <div className='flex justify-evenly items-center'>
        <div className="flex justify-between items-center px-6 py-4 w-full gap-10">
            <Image src="/Logo.jpg" alt="logo" width={10} height={10} className='w-10 h-10 object-contain'/>
        </div>
        <div className="flex justify-center items-center gap-4">
            <ul>
                <li className='text-[15px] font-bold mr-[40px] hover:bg-black hover:text-white hover:rounded-2xl p-2'><a href="/">Home</a></li>
            </ul>
            <div className="flex">
                <button onClick={handleDownload} className="text-[15px] bg-black rounded-2xl text-white p-2 font-bold mr-[10px] border-4 border-gray-200 hover:cursor-pointer hover:bg-gray-200 hover:text-black hover:border-black hover:border-4">Resume</button>
            </div>
            <div className='flex'>
                <button onClick={()=>window.open("https://www.github.com/TJK09")} className='text-[15px] font-bold bg-black text-white rounded-2xl border-4 p-2 border-gray-200 hover:cursor-pointer hover:bg-gray-200 hover:text-black hover:border-black hover:border-4'>Github</button>
            </div>
        </div>
    </div>
  )
}

export default projectNavbar