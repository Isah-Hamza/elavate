import React from 'react'
import logo from '../assets/images/coach_logo.webp';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="w-full ">
        <div className='max-w-[1400px] bg-white rounded-lg mx-auto flex items-center justify-between gap-10 px-10 py-3'>
            <img className='max-w-40' src={logo} alt="logo" />
            <ul className='hidden max-w-[800px] flex-1 font-bold md:flex justify-between text-lg gap-5' >
                <li>Home</li>
                <li>About Us</li>
                <li>What We Do</li>
                <li>Contact</li>
            </ul>
            <span className='block md:hidden' > <HiOutlineMenuAlt4 size={30} /> </span>
        </div>
    </div>
  )
}

export default Header
