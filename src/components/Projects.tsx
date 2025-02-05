import React from 'react'
import CardComponent from './card'

const Projects = ({theme}:{theme:boolean}) => {
  return ( 
    <div className={`w-full lg:px-64 py-4 px-4`}>
        <h1 className= {`text-gray-900 font-bold text-4xl  mb-4 `}>About my Projects</h1>
        <div className='grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8   '>
      <CardComponent theme={theme} />
      <CardComponent theme={theme} />
      <CardComponent theme={theme} />
      <CardComponent theme={theme} />
      <CardComponent theme={theme} />
      <CardComponent theme={theme} />
    </div>
    </div>
  )
}

export default Projects
