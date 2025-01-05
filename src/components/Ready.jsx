import React from 'react'
import calling from '../assets/images/calling.webp';

const Ready = () => {
  return (
    <div className='h-[700px] md:h-auto relative text-3xl md:text-5xl p-12 px-10 md:px-16 rounded-xl bg-black text-white md:max-w-[1250px] max-w-[300px] mx-auto my-32 font-semibold' >
        <div className="">
            <p>Ready to <span className='text-primary' >Elevate</span> <br className='hidden sm:block' />  Your Career?</p>
            <button className='bg-primary text-white text-xl font-medium px-7 py-3 my-3' >Contact Us</button>
            <p>+447735264866</p>
        </div>
        <img src={calling} alt="calling" className='md:none max-w-[unset] md:max-w-full size-[300px] bottom-[5%] md:size-[450px] object-cover  rounded-full bg-white p-5 absolute md:top-1/2 md:-translate-y-1/2 right-0 md:right-[5%] ' />
    </div>
  )
}

export default Ready
