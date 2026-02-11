import logo from '../../public/Logo.jpg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center px-6 py-4 w-full gap-10">
            <div className="flex">
                <Image className='w-10 h-10 object-contain' src={logo} alt="logo"/>
            </div>
            <div className="flex">
                <ul className='flex flex-row gap-10'>
                    <li className='font-poppins text-white hover:bg-white hover:text-black hover:rounded-full px-3'>About Me</li>
                    <li className='font-poppins text-white hover:bg-white hover:text-black hover:rounded-full px-3'>Contact Me</li>
                    <li className='font-poppins text-white hover:bg-white hover:text-black hover:rounded-full px-3'>Skills</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar