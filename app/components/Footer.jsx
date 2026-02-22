'use client'

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Facebook from "@/public/facebook-color-svgrepo-com.svg"
import Instagram from "@/public/instagram-1-svgrepo-com.svg"
import linkedin from "@/public/linkedin-color-svgrepo-com.svg"
import email from "@/public/email.svg"

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() =>{
      const toggleVisibility = () =>{
        if(window.scrollY>300){
          setIsVisible(true)
        }else{
          setIsVisible(false)
        }
      }

    window.addEventListener("scroll",toggleVisibility)

    return () => {
      window.removeEventListener('scroll',toggleVisibility)
    }

    },[])

    const scrolltoTop = () =>{
      window.scrollTo({
        top:0,
        behavior:'smooth',
      })
    }
  return (
    <div className="bg-black mt-[20px] pt-[40px]">
      <div className="flex flex-col items-center justify-center text-white">
        <button className="hover:cursor-pointer" onClick={scrolltoTop}><ChevronUp size={20} /></button>
        <h1 className="text-[15px] font-bold">BACK TO TOP</h1>
      </div>
      <div className="flex items-center justify-center gap-5 mt-[50px]">
        <button onClick={()=>window.open("https://www.facebook.com/taimur.jan.141877")}><Image src={Facebook} alt="Facebook" className="text-white w-10 h-10 hover:cursor-pointer" /></button>
        <button onClick={()=>window.open("https://www.instagram.com/khattak_taimur/")}><Image src={Instagram} alt="Instagram" className="text-white w-10 h-10 hover:cursor-pointer" /></button>
        <button onClick={()=>window.open("https://www.linkedin.com/in/taimur-jan-69518b297/")}><Image src={linkedin} alt="Linkedin" className="text-white w-10 h-10 hover:cursor-pointer" /></button>
        <button onClick={()=>window.open("mailto:taimurjan241@gmail.com")}><Image src={email} alt="Email" className="text-white w-10 h-10 hover:cursor-pointer" /></button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="text-[15px] font-bold text-white">@2026 Taimur Jan. All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
