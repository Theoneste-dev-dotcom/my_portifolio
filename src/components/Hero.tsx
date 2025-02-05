import React from 'react'
import holder from '../images/theo.jpg'
import bubbles from '../images/bubles.png'
import Image from 'next/image'
import Button2 from './Button2'
function Hero({theme}:{theme:boolean}) {
  return (
    <>
    <div className='flex flex-col  lg:flex-row items-center pt-4 justify-center px-2 lg:px-40  mb-12 mt-10 ' id='home'>
      <div className=' sm:w-[90%] mt-12 flex flex-col gap-4'>
    
        <div>
          <h1 className='text-gray-900 text-5xl font-bold leading-32'>Hi, I&apos;m D Theoneste, a</h1>
          <h1 className='text-gray-900 font-bold text-5xl'>Fullstack <span className='text-gray-400'>Developer</span></h1>
        </div>

        <p className='mt-4 w-[90%] text-gray-500 text-md'>I’m a dedicated Fullstack developer with a passion for back-end development, building responsive websites, creating data-driven applications. From Rwanda Coding Academy. <span className='text-[#0d9ddf]'>See more...</span></p>
        <div className='flex flex-row items-center mt-8 md:mt-8 gap-12 w-[100%] overflow-hidden'>
         <Button2 text="Hire Me" theme={theme}/>
         <Button2 text="View My Projects" theme={theme}/>
        </div>
      </div>
      <div className='w-[100%] lg:w-[70%] lg:ml-2 ml-20 rounded-lg sm:w-[100%] mt-16'>
        <Image width={400}  alt='holder ' src={holder}/>
      </div>
    </div>
    <div className='border-t-2 border-gray-200 mx- md:mx-20 my-10'></div>
    </>
  )
}

export default Hero
