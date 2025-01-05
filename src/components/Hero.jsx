import React from 'react'

const Hero = () => {
  return (
    <div style={{backgroundImage:'url(https://framerusercontent.com/images/YKk9l8sLwikcLbdpAVlcTnMcFA.png)' }}
     className='bg-no-repeat bg-cover text-white max-w-[1400px] lg:h-[calc(100vh-100px)] h-auto mx-auto flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20 px-10' >
        <div className="py-5">
            <p className='text-6xl xl:text-7xl font-bold' >Transform Your <br className="hidden md:block" /> Career with <br className="hidden md:block" /> <span className='text-primary' >Elevate</span> </p>
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
