import Image from "next/image"
import seperatorBlack from "@/public/separatorBlack 1.png"

const About = () => {
  return (
    <div>
        <div className="mt-24 flex flex-col items-center justify-center w-full bg-gray-200">
            <h1 className="text-[30px] font-bold px-16 py-4 border-6 hover:bg-black hover:text-white hover:border-gray-200 " >ABOUT ME</h1>
            <p className="text-[15px] mt-12">Hi I am a Frontend Developer working on React JS and Next JS. I implement Responsive design using Tailwind CSS.</p>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-2 gap-10 ">
            <div className="ml-80 grid">
                <h1 className="text-[22px] font-semibold">Development</h1>
            </div>
            <div className="ml-60 grid">
                <h1 className="text-[22px] font-semibold">Maintenance</h1>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <h1 className="mt-20 text-[22px] font-semibold">Responsive Designs</h1>
        </div>
        <div className="mt-20 flex items-center justify-center">
            <Image src={seperatorBlack} alt="Seperator" />
        </div>
    </div>
  )
}

export default About