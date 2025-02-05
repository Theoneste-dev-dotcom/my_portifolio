import React from 'react'
import Certi from './Certi'
function Certificates({theme}: {theme:boolean}) {
  return (
    <div className='min-w-screen lg:px-40 px-16 mt-24'>
      <h1 className='font-bold text-black text-4xl mb-8 mt-12 '>My Certificates</h1>
     <div className='py-6 md:px-1 px-16 grid grid-cols-1 xl:grid-cols-2  gap-8 w-full '>
          <Certi theme={theme}/> 
          <Certi theme={theme}/> 
          <Certi theme={theme}/> 
          <Certi theme={theme}/> 
     </div>
     <div className='border-t-2 border-gray-200 mx-16 lg:mx-40 my-10'></div>
      
    </div>
  )
}

export default Certificates
