'use client';

import Image from "next/image";
import email from "@/public/email-svgrepo-com.svg";
import github from "@/public/github-142-svgrepo-com.svg";
import linkedin from "@/public/linkedin-161-svgrepo-com.svg";

const HeroContent = () => {
  return (
    <div>
      <div className="flex">
        <h1 className="mt-52 text-3xl font-bold">Hi, I am</h1>
      </div>

      <div className="flex flex-col">
        <h1 className="text-[80px] font-bold">Taimur Jan</h1>
        <p className="text-[25px] text-[#909090] font-raleway font-extrabold">
          Frontend Developer
        </p>
      </div>

      <div className="flex space-x-4 mt-5">
        <div className="flex bg-[#c4c4c4] p-2 rounded hover:shadow" onClick={() => window.open("mailto:taimurjan241@gmail.com", "_blank")}>
          <Image className="object-contain hover:cursor-pointer" src={email} alt="Email" width={40} height={40} />
        </div>
        <div className="flex bg-[#c4c4c4] p-2 rounded hover:shadow" onClick={()=>window.open("https://github.com/TJK09")}>
          
          <Image className="object-contain hover:cursor-pointer" src={github} alt="GitHub" width={40} height={40} />
        </div>
        <div className="flex bg-[#c4c4c4] p-2 rounded hover:shadow" onClick={()=>window.open("https://www.linkedin.com/in/taimur-jan-69518b297/")}>
          <Image className="object-contain hover:cursor-pointer" src={linkedin} alt="LinkedIn" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
