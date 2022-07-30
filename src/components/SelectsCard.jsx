import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'

const colorImages = {
  green: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  yellow: 'https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  blue: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  red: 'https://images.unsplash.com/photo-1650157192590-f5c12d899906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcCUyMHNpZ25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
}

const SelectsCard = ({image, location}) => {

  const [url, setUrl] = useState('url')
  const [hovering, setHovering] = useState(false)

  const images = {url: image, ...colorImages}

  const handleClick = (color) => {
    setUrl(color)
  }

  const handleImageClick = () => {
    setUrl('url')
  }

  const handleHover = () => {
    setHovering(prev => !prev)
  }

  console.log(hovering)



  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='relative'>
        <img className='w-full h-full object-cover' src={images[url]} alt="" />
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
                <p onClick={handleImageClick} className="cursor-pointer absolute left-4 bottom-4 text-white font-bold text-2xl sm:text-xl">{location}</p>
                {hovering && (
                <div className='absolute right-8 bottom-4 flex border border-white rounded-md p-2 bg-slate-100'>
                  <div onClick={() => handleClick('green')} className='cursor-pointer w-4 h-4 bg-green-900 rounded-[50%] mx-1'></div>
                  <div onClick={() => handleClick('yellow')} className='cursor-pointer w-4 h-4 bg-yellow-900 rounded-[50%] mx-1'></div>
                  <div onClick={() => handleClick('blue')} className='cursor-pointer w-4 h-4 bg-blue-900 rounded-[50%] mx-1'></div>
                  <div onClick={() => handleClick('red')} className='cursor-pointer w-4 h-4 bg-red-900 rounded-[50%] mx-1'></div>
                </div>
                )}
            </div>
        </div>
  )
}

export default SelectsCard