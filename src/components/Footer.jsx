import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <div className='mt-20 bg-black w-full p-10 flex items-end gap-20 text-white' >
      <img
        className='max-w-[250px]' 
        src="https://framerusercontent.com/images/tXMh8R2VD9XBjRbItZriBXDLmlY.png" 
        alt="logo-white" 
     />
     <div className="grid grid-cols-2 gap-10 ">
        <div className="grid">
            <p className='text-[10px] opacity-70 font-medium' >CONTACT US</p>
            <p className='text-xl font-bold' >+447735264866</p>
        </div>
        <div className="grid">
            <p className='text-[10px] opacity-70 font-medium' >ADDRESS</p>
            <p className='text-xl font-bold' >Address</p>
        </div>
        <div className="grid">
            <p className='text-[10px] opacity-70 font-medium' >EMAIL</p>
            <p className='text-xl font-bold' >Elevatecoachtrain@gmail.com</p>
        </div>
        <div className="grid">
            <p className='text-[10px] opacity-70 font-medium' >OPENING HOURS</p>
            <p className='text-xl font-bold' >9am—6pm</p>
        </div>
     </div>
     <div className="">
        <div className="mt-auto">
            © {year} — Copyright
            
        </div>
     </div>
    </div>
  )
}

export default Footer
