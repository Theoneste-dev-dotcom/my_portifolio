import React from 'react'

const Button2 = ({theme, text} :{theme:boolean, text:string}) => {
  return (
    <div>
        <div className={`card-actions justify-end`}>
            <button className={` ${theme ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-900 hover:bg-gray-50"}  px-4 py-2 rounded-lg`}>{text}</button>
          </div>
    </div>
  )
}

export default Button2
