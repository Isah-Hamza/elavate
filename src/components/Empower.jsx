import React from 'react'
import empower from '../assets/images/empower.webp';

const Empower = () => {
  return (
    <div className='mt-20 max-w-[1200px] px-10 mx-auto grid lg:grid-cols-2 gap-20' >
        <div className="">
            <p className='text-custom-blue text-5xl my-3 mb-3.5 font-semibold'>Empowering Your Career Transition</p>
            <img className='h-[400px] sm:min-h-[450px] object-cover rounded-2xl' src={empower} alt="empower" />
        </div>
        <div className="shadow-xl rounded-lg text-lg md:text-2xl p-7 md:p-14 leading-[1.7]">
            <p>At Elevate Coaching and Training Academy, we are committed to helping individuals like you achieve their career goals. Whether you’re looking to transition into a Business Analyst role, gain certification, or enhance your skills on live projects, we provide the tools, training, and support to make it happen. Our expert-led coaching programs are designed to meet the needs of both beginners and experienced professionals.</p>
        </div>
    </div>
  )
}

export default Empower
