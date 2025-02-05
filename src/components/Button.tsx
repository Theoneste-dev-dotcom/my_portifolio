import React from 'react'

const Button = ({theme} :{theme:boolean}) => {
  return (
    <div>
        <div className={`card-actions justify-end`}>
            <button className={` ${theme ? "bg-gray-800 text-white" : "bg-white text-gray-900"}  px-4 py-2 rounded-lg`}>View On GitHub</button>
          </div>
    </div>
  )
}

export default Button
