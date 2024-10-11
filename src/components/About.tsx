import React from 'react'
import linked from '../images/linkedin.png'
import facebook from '../images/facebook.png'
import gmail from '../images/gmail.png'
import Image from 'next/image'

function About() {
  return (
    <div className='pb-6' id='contact'>
      <div className='lg:px-40 px-16 flex flex-col gap-8 '>
        <h1 className='font-medium text-3xl'>A little About Me</h1>
        <p>I’m a dedicated Fullstack developer with a passion for back-end development, building responsive websites, creating data-driven applications. With a background in CodeAlpha and ThinkCyber cybersecurity training, I strive to deliver high-quality, user-friendly, and scalable solutions. Whether for securing and making Application, I enjoy working on projects that make an impact.</p>
      </div>

      <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:px-40 px-16 mt-10'>
        <div>
            <Image className='h-12 w-12' src={facebook}/>

            <h2>Dufitimana Honest</h2>

        </div>
        <div>
            <Image className='h-12 w-12' src={linked}/>
            <h2>LinkedIn</h2>
            <a href="" className='text-[#06b]'>Connect me on <span className='text-[#50f3ff] block'>Dufitimana Theoneste</span></a>
        </div>
        <div>
            <Image className='h-12 w-12' src={gmail}/>
            <h2>
              <ul>
                <li>dufitimanatheoneste05@gmail.com</li>
                <li>theodufi.rw@gmail.com</li>
                <li>theonestedufitimana015@gmail.com</li>
              </ul>
            </h2>

        </div>
      </div>
    </div>
  )
}

export default About
