import React from 'react'
import calling from '../assets/images/calling.webp';

const Ready = () => {
  return (
    <div className='relative text-5xl p-12 px-16 rounded-xl bg-black text-white max-w-[1250px] mx-auto my-32 font-semibold' >
        <div className="">
            <p>Ready to <span className='text-primary' >Elevate</span> <br className='hidden sm:block' />  Your Career?</p>
            <button className='bg-primary text-white text-xl font-medium px-7 py-3 my-3' >Contact Us</button>
            <p>+447735264866</p>
        </div>
        <img src={calling} alt="calling" className='size-[450px] object-cover  rounded-full bg-white p-5 absolute top-1/2 -translate-y-1/2 right-[5%] ' />
    </div>
  )
}

export default Ready
