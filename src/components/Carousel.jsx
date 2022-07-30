import React, { useState } from 'react'
import { BsArrowLeftSquareFill as LeftArrow } from 'react-icons/bs';
import { BsArrowRightSquareFill as RightArrow } from 'react-icons/bs';

const sliderData = [
    {url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},
    {url: "https://images.unsplash.com/photo-1600255821058-c4f89958d700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},
    {url: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},
    {url: "https://images.unsplash.com/photo-1580223530509-849e0ad583ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"},
    {url: "https://images.unsplash.com/photo-1608347212618-87abc72d4835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"},
    {url: "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}

];

const Carousel  = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
            setSlide(slide === 0 ? length - 1 : slide - 1)
    }

    const nextSlide = () => {
            setSlide(slide === length - 1 ? 0 : slide + 1 )
    }

    console.log(slide)

  return (
    <div className="max-w-[1240] mx-auto px-4 py-16 relative flex justify-center items-center">
        {sliderData.map((data, index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'} >
            {index === slide && (<>
            <img className="max-w-[720] max-h-[480] w-full rounded-md" src={data.url} alt="/" />
            <LeftArrow onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-[25%] sm:left-[20%] md:left-[30%]'/>
            <RightArrow onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-[25%] sm:right-[20%] md:right-[30%]'/>
             </>)}
            </div>
        ))}
    </div>
  )
}

export default Carousel;