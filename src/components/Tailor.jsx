import React from 'react'

// https://framerusercontent.com/images/f6EEiTcKEPRqoYuE7KavYDLSzfk.png
// https://framerusercontent.com/images/mKSfiqO0aQxuSmCbGxKUSOO4U.png
// https://framerusercontent.com/images/cZOixipS3zu0EnNjdr8hkvnE.png

const Card = ({ src, title, desc }) => (
    <div className=' flex justify-center items-center flex-col gap-3 max-w-[350px] bg-[#f2f2f2] p-5 rounded-lg' >
        <img className='w-24' src={src} alt="icon" />
        <p className='text-xl uppercase font-semibold' >{title}</p>
        <p className='text-lg' >{desc}</p>
    </div>
)

const Tailor = () => {


  return (
    <div className='w-full mt-14 px-10 py-24 bg-[#f8f8f8] text-center' >
        <p className='text-4xl md:text-5xl font-bold leading-normal ' >Tailored Programs to Meet Your <br className='hidden sm:block' /> Needs</p>
      <div className="max-w-[1300px] mt-14 mx-auto flex flex-col lg:flex-row items-center lg:items-start  justify-between gap-10">
        <Card title={'Career Transition Support'} 
        desc="We provide personalized guidance to help you transition smoothly."
        src="https://framerusercontent.com/images/f6EEiTcKEPRqoYuE7KavYDLSzfk.png" />
        <Card title={'Certification Training'} 
        desc="get support/guidance with gaining industry-recognised certifications"
        src="https://framerusercontent.com/images/mKSfiqO0aQxuSmCbGxKUSOO4U.png" />
        <Card title={'On-the-job guidance'} 
        desc="Receive expert support with live projects to excel in your workplace and career."
        src="https://framerusercontent.com/images/cZOixipS3zu0EnNjdr8hkvnE.png" />
      </div>
    </div>
  )
}

export default Tailor
