import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from "react-icons/fa";
  import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className='w-full bg-gray-300'>
        <div className='max-w-[1240] mx-auto flex flex-col md:flex-row md:justify-between text-center py-10 md:pb-4 mx-14'>
        <h2 className='mb-6 md:mb-0'>BEACHES.</h2>
        <div className='flex justify-between mb-2 md:mb-0'>
        <a href="https://www.facebook.com/">
            <FaFacebook className="icon mx-2 md:mx-6 lg:mx-8" />
        </a>
        <a href="https://www.instagram.com/">
            <FaInstagram className="icon mx-2 md:mx-6 lg:mx-8" />
        </a>
        <a href="https://www.twitter.com/">
            <FaTwitter className="icon mx-2 md:mx-6 lg:mx-8" />
        </a>
        <a href="https://www.pinterest.com/">
            <FaPinterest className="icon mx-2 md:mx-6 lg:mx-8" />
        </a>
        <a href="https://www.youtube.com/">
            <FaYoutube className="icon mx-2 md:mx-6 lg:mx-8" />
        </a>
        </div>
        </div>
        <div className='flex justify-between mx-12'>
        <ul className='flex flex-col md:flex-row'>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Partnerships</li>
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>Newsroom</li>
            <li className='cursor-pointer'>Advertising</li>
        </ul>
        <ul className='flex flex-col md:flex-row text-right'>
            <li className='cursor-pointer'>
            <Link 
              to="home"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>Home</Link>
              </li>
            <li className='cursor-pointer'>
                <Link 
              to="destinations"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={60}
              duration={500}>Destinations</Link>
              </li>
            <li className='cursor-pointer'>
            <Link 
              to="travel"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={20}
              duration={500}>Travel</Link>
              </li>
            <li className='cursor-pointer'>
            <Link 
              to="views"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={43}
              duration={500}>Views</Link>
            </li>
            <li className='cursor-pointer'>
            <Link 
              to="book"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={60}
              duration={500}>Book</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer