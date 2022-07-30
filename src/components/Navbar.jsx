import React, { useState } from "react";
import { BsPerson as Profile } from "react-icons/bs";
import { BiSearch as Search } from "react-icons/bi";
import { AiOutlineClose as Close } from "react-icons/ai";
import { HiOutlineMenuAlt4 as Menu } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  console.log(sidebar);

  return (
    <div className="flex w-full justify-between items-center h-20 px-6 absolute text-white z-10">
      <div>
        <h1 className={sidebar ? "hidden" : "text-white"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li >Home</li>
        <li><Link 
              to="destinations"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={60}
              duration={500}>Destinations</Link></li>
        <li><Link 
              to="travel"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={20}
              duration={500}>Travel</Link></li>
        <li><Link 
              to="views"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={43}
              duration={500}>Views</Link></li>
        <li><Link 
              to="book"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>Book</Link></li>
      </ul>
      <div className="hidden md:flex">
        <Search className="mr-6 cursor-pointer" size={20} />
        <Profile className="cursor-pointer" size={20} />
      </div>

      {/* Hamburger */}

      <div onClick={handleSidebar} className="md:hidden">
          {sidebar ? <></> : <Menu className="cursor-pointer" size={20} />}
      </div>

      {/* Mobile Menu Dropdown */}

      <div
        className={
          sidebar
            ? "md:left-[-100%] absolute text-black left-0 top-0 w-full h-screen bg-gray-200/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <div className="flex justify-between">
            <h1 onClick={handleSidebar} className="cursor-pointer ml-2 -mt-1.5">BEACHES.</h1>
            <Close onClick={handleSidebar} className="text-black cursor-pointer mr-2 mt-1" size={20} />
            </div>
          <li className="pt-14 border-b cursor-pointer" onClick={handleSidebar}>Home</li>
          <li className="border-b">
          <Link 
              to="destinations"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={60}
              duration={500}>Destinations</Link>
          </li>
          <li className="border-b">
          <Link 
              to="travel"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={20}
              duration={500}>Travel</Link>
          </li>
          <li className="border-b">
          <Link 
              to="views"
              style={{ cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={43}
              duration={500}>Views</Link>
          </li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6 mx-2">
          <a href="https://www.facebook.com/">
            <FaFacebook className="icon" />
        </a>
        <a href="https://www.twitter.com/">
            <FaTwitter className="icon" />
        </a>
        <a href="https://www.instagram.com/">
            <FaInstagram className="icon" />
        </a>
        <a href="https://www.pinterest.com/">
            <FaPinterest className="icon" />
        </a>
        <a href="https://www.youtube.com/">
            <FaYoutube className="icon" />
        </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
