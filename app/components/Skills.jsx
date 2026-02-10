import Image from "next/image"
import HTML from "@/public/html-5-svgrepo-com.svg"
import CSS from "@/public/css-3-svgrepo-com.svg"
import Tailwind from "@/public/tailwind-svgrepo-com.svg"
import JS from "@/public/javascript-svgrepo-com.svg"
import React from "@/public/react-svgrepo-com.svg"
import Node from "@/public/node-js-svgrepo-com.svg"
import Next from "@/public/next-js-svgrepo-com.svg"
import Django from "@/public/django-svgrepo-com.svg"
import Post from "@/public/postgresql-logo-svgrepo-com.svg"
import Express from "@/public/express-svgrepo-com.svg"
import Type from "@/public/typescript-official-svgrepo-com.svg"
import mongo from "@/public/mongodb-logo-svgrepo-com.svg"
import Nest from "@/public/nestjs-svgrepo-com.svg"
import prisma from "@/public/prisma-svgrepo-com.svg"




const Skills = () => {
  return (
    <div>
        <div className="flex justify-center items-center mt-20">
           <h1 className="text-[30px] font-bold border-6 py-4 px-22 hover:bg-black hover:text-white hover:border-gray-200 ">SKILLS</h1> 
        </div>
        <div className="flex flex-col">
            <div className="flex flex-col mx-72 my-10">
                <h1 className="text-[30px] font-bold">USING NOW :</h1>
                <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-20">
                    <Image className="object-cover w-40 h-40" src={HTML}  />
                    <Image className="object-cover w-40 h-40" src={CSS} />
                    <Image className="object-cover w-40 h-40" src={Tailwind}  />
                    <Image className="object-cover w-40 h-40" src={JS} />
                </div>
                <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-20">
                    <Image className="object-cover w-40 h-40" src={React}  />
                    <Image className="object-cover w-40 h-40" src={Next} />
                    <Image className="object-cover w-40 h-40" src={Node}  />
                    <Image className="object-cover w-40 h-40" src={Django} />
                </div>
            </div>
            <div className="flex flex-col mx-72 my-10">
                <h1 className="text-[30px] font-bold">LEARNING NOW :</h1>
                <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-20">
                    <Image className="object-cover w-40 h-40" src={Express}  />
                    <Image className="object-cover w-40 h-40" src={Post} />
                    <Image className="object-cover w-40 h-40" src={Type}  />
                    <Image className="object-cover w-40 h-40" src={Nest} />
                </div>
                <div className="mt-10 pl-[100px] grid grid-cols-2 ">
                    <Image className="object-cover w-40 h-40" src={prisma}  />
                    <Image className="object-cover w-40 h-40" src={mongo} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills