import React from 'react'
import holder from '../images/holder.png'
import bubbles from '../images/bubles.png'
import Image from 'next/image'
function Hero() {
  return (
    <>
    <div className='flex flex-col lg:flex-row items-start pt-4 justify-center px-20 md:px-40  mb-12 mt-10 ' id='home'>
      <div className=' sm:w-[90%] mt-12'>
        <div className='flex flex-row items-center mb-4 gap-16 md:w-[100%] md:gap-20'>
          <p className='text-md md:w-[50%] text-[#0d9ddf]'>Welcome To My Site</p>
          <Image className='w-36 h-36' alt='bubles' src={bubbles}/>
        </div>
        <div>
          <h1 className='text-[#00fbff] text-[30px]'>Hi, I&apos;m D Theoneste, a</h1>
          <h1 className='text-[#00faff] text-[30px]'>Fullstack <span className='text-[#0d95ff]'>Developer</span></h1>
        </div>

        <p className='mt-4 w-[90%]'>I’m a dedicated Fullstack developer with a passion for back-end development, building responsive websites, creating data-driven applications. From Rwanda Coding Academy. <span className='text-[#0d9ddf]'>See more...</span></p>
        <div className='flex flex-row items-center mt-8 md:mt-8 gap-12 w-[100%] overflow-hidden'>
          <a href='#contact' className='md:px-12 lg:px-12  w-[40%] text-center py-2  rounded-3xl lg:py-4 text-white bg-gradient-to-r from-[#00fbff] to-[#90fcfa] hover:bg-white hover:bg-gradient-to-l border-2 border-white transition-all'>Hire Me</a>
          <a href='#contact' className='md:px-12 lg:px-12  w-[47%] text-center py-2  rounded-3xl lg:py-4 text-white bg-gradient-to-r from-[#00fbff] to-[#90fcfa] hover:bg-white hover:bg-gradient-to-l border-2 border-white transition-all'>See my Projects</a>
        </div>
      </div>
      <div className='w-[100%] lg:w-[50%] sm:w-[100%] mt-16'>
        <Image  alt='holder' src={holder}/>
      </div>
    </div>
    <div className='border-t-2 border-[#00faff] mx- md:mx-40 my-10'></div>
    </>
  )
}

export default Hero
