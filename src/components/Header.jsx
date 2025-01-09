import React, { useState } from 'react'
import logo from '../assets/images/coach_logo.webp';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgClose } from 'react-icons/cg';

const Header = () => {
    const [ open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

  return (
    <div className="w-full ">
        <div className={`transition-all duration-300 max-w-[96%] sm:max-w-[1400px] bg-white rounded-lg mx-auto flex ${open ? 'flex-col md:flex-row h-[405px] !max-w-[300px] ': 'h-[100px]'} md:flex-row items-center justify-between gap-10 px-10 py-3`}>
            <img className='max-w-40' src={logo} alt="logo" />
            <ul className={`text-center md:text-left max-w-[800px] flex-1 font-semibold ${ open ? 'grid' : 'hidden'} md:flex justify-between text-lg gap-7 md:gap-5`} >
                <li>Home</li>
                <li>About Us</li>
                <li>What We Do</li>
                <li>Contact</li>
            </ul>
            { 
            !open ? <span onClick={toggle} className='block md:hidden' > <HiOutlineMenuAlt4 size={30} /> </span> :
            <span onClick={toggle} className='block md:hidden' > <CgClose size={30} /> </span>}
        </div>
    </div>
  )
}

export default Header
