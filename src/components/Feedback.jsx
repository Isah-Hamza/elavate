import React from 'react'
import avatar from '../assets/images/avatar.webp';

const Card = ({text}) => (
    <div className="bg-[#f3f2f2] p-4 rounded-lg px-3 sm:px-10 flex items-start text-xs sm:text-sm font-medium gap-3 sm:gap-10">
        <img className='w-16' src={avatar} alt="avatar" />
        <p>{text}</p>
    </div>
)


const Feedback = () => {
  return (
    <div className='max-w-[500px] md:max-w-[1250px] mx-auto px-10 xl:px-0 mt-32 mb-10 grid lg:grid-cols-[2.3fr,2fr] items-center gap-10' >
        <div className="">
            <p className='text-4xl sm:text-5xl font-bold' >Our Clients <span className='text-custom-blue' >Feedback</span> </p>
            <p className='mt-3 text-xl sm:text-2xl' >See how Elevate Coaching has empowered individuals to achieve their career goals and thrive as Business Analysts</p>
        </div>
        <div className="grid gap-7">
            <Card text="Elevate Coaching transformed my career. With their guidance, I transitioned into a Business Analyst role – Jane A." />
            <Card text={'The live project support was a game-changer for me. I gained confidence and excelled in my new role thanks to their coaching. – Mike T.'} />
            <Card text={'The certification training at Elevate Coaching was top-notch. - David J.'} />
        </div>
    </div>
  )
}

export default Feedback
