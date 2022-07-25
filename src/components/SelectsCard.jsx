import React from 'react'

const SelectsCard = ({image, location}) => {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover' src={image} alt="" />
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
                <p className="absolute left-4 bottom-4 text-white font-bold text-2xl sm:text-xl">{location}</p>
            </div>
        </div>
  )
}

export default SelectsCard