import Image from "next/image"
import seperatorBlack from "@/public/separatorBlack 1.png"

const About = () => {
  return (
    <div id="about">
        <div className="mt-24 flex flex-col items-center justify-center w-full bg-gray-200">
            <h1 className="text-[30px] font-bold px-16 py-4 border-6 hover:bg-black hover:text-white hover:border-gray-200 " >ABOUT ME</h1>
            <p className="text-[15px] mt-12">Hi I am a Frontend Developer working on React JS and Next JS. I implement Responsive design using Tailwind CSS.</p>
            <div className="flex flex-col items-center justify-center my-6">
                <h1 className="text-[15px] font-semibold px-6 border-l-2 border-r-2 hover:bg-black hover:text-white">EXPLORE</h1>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <Image src={seperatorBlack} alt="Seperator" />
            </div>
        </div>


        <div className="mx-auto mt-10 grid grid-cols-2 gap-10 ">
            <div className="ml-40 grid">
                <h1 className="text-[22px] font-semibold">Development</h1>
                <p className="text-[15px] w-[80%]">I can develop Websites using React JS, Next JS. I can make fast single page websites using Next JS with no backend required</p>
            </div>
            <div className="ml-20 grid">
                <h1 className="text-[22px] font-semibold">Maintenance</h1>
                <p className="text-[15px] w-[80%]">I can Maintain existing websites according to the needs and can also modify current running websites based on requirements from the client</p>
            </div>
        </div>
        <div className="flex flex-col items-center ">
            <h1 className="mt-20 text-[22px] font-semibold pr-[200px]">Responsive Designs</h1>
            <p className="text-[15px] w-[50%] pl-[170px] ">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
        </div>
        <div className="mt-20 flex items-center justify-center">
            <Image src={seperatorBlack} alt="Seperator" />
        </div>
    </div>
  )
}

export default About