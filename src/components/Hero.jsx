import React from 'react'

const Hero = () => {
  return (
    <div className='text-white max-w-[1400px] h-[calc(100vh-100px)] mx-auto flex items-center justify-center gap-20 px-10' >
        <div className="">
            <p className='text-7xl font-bold' >Transform Your <br /> Career with <br /> <span className='text-primary' >Elevate</span> </p>
            <p className='text-4xl mt-10'>Your Pathway to Becoming a Certified and Successful Business Analyst Starts Here.</p>
            <button className='bg-custom-blue text-black rounded-lg text-xl font-medium px-7 py-3 mt-5' >Learn More</button>
        </div>
        <div className="">
            <img
            className='max-w-[500px] bg-white/20 p-5 rounded-xl'
            src="https://framerusercontent.com/images/mX7sU6N2dv1E70DmneFl5PWVZlU.jpg" alt="" />
        </div>

    </div>
  )
}

export default Hero
