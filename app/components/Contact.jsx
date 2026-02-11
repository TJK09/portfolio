import Image from "next/image"
import seperator from "@/public/separatorBlack 1.png"

const Contact = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center my-5 mt-10">
            <h1 className="text-[30px] font-bold border-4 py-2 px-10 hover:bg-black hover:text-white hover:border-gray-200">CONTACT</h1>
            <p className="text-[15px] mt-10 ">Feel Free to leave me a message on the form below</p>
            <Image className="object-contain mt-10" src={seperator} alt="seperator"  />
        </div>
        <div className="flex flex-col items-center justify-center gap-15">
            <form action="" className="flex flex-col justify-center items-center gap-10 mt-[50px]">
                <input
                    type="text"
                    placeholder="Enter your Name*"
                    className="px-4 w-2xl 
                                border-l-4 border-b-4 border-t-0 border-r-0
                                focus:outline-none focus:ring-0 
                                focus:border-l-4 focus:border-b-4 focus:border-t-0 focus:border-r-0"
                    />
                <input type="email" placeholder="Enter your Email*" className="px-4 w-2xl 
                                border-l-4 border-b-4 border-t-0 border-r-0
                                focus:outline-none focus:ring-0 
                                focus:border-l-4 focus:border-b-4 focus:border-t-0 focus:border-r-0" />
                <input type="phone" placeholder="Enter your Phone Number*" className="px-4 w-2xl 
                                border-l-4 border-b-4 border-t-0 border-r-0
                                focus:outline-none focus:ring-0 
                                focus:border-l-4 focus:border-b-4 focus:border-t-0 focus:border-r-0" />
                <textarea name="" id="" placeholder="Write your Message here*" className="px-4 w-2xl 
                                border-l-4 border-b-4 border-t-0 border-r-0
                                focus:outline-none focus:ring-0 
                                focus:border-l-4 focus:border-b-4  focus:border-t-0 focus:border-r-0 h-30"></textarea>
                <button className="text-[16px] font-bold border-l-4 border-r-4 
                                    px-10 mt-[20px] hover:bg-black hover:text-white
                                    hover:border-gray-200 ">SUBMIT</button>
            </form>
            <Image src={seperator} alt="seperator" />
        </div>
    </div>
  )
}

export default Contact