import React from 'react'
import cyber from '../images/cyber-security.png'
import Image from 'next/image'
function Certificates() {
  return (
    <div>
     <div className='bg-[#dcfbf5] px-16 lg:px-40  text-black gap-6 py-6  grid grid-cols-2 lg:grid-cols-3'>
         <div className='flex gap-4 flex-row items-center justify-center'>
          <Image className='w-12 h-12' src={cyber}/>
         <h1>Network Research</h1>
         </div>
         <div className='flex gap-4 flex-row items-center justify-center'>
          <Image className='w-12 h-12' src={cyber}/>
         <h1>Intro To Linux</h1>
         </div>
         <div className='flex gap-4 flex-row items-center justify-center'>
          <Image className='w-12 h-12' src={cyber}/>
         <h1>Intro To Python</h1>
         </div>
        
     </div>
     <div className='border-t-2 border-[#00faff] mx-16 lg:mx-40 my-10'></div>
      
    </div>
  )
}

export default Certificates
