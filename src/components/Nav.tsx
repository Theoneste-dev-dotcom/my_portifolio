import React, { useState } from "react";
import logo from "./../images/logo.png";
import home from "./../images/home.png";
import profile from "./../images/user1.png";
import about from "./../images/user2.png";
import contact from "./../images/circle.png";
import Image from "next/image";
import Link from "next/link";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import menu from '../images/menu.png'
import logo1 from "@/images/logo1.png"

type NavProps = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({theme, setTheme}:NavProps) {
  const [show, setShow] = useState(false)
  return (

    <div
      className={` ${theme ?"bg-white":"bg-[#101010]"} sticky top-0 flex flex-row items-center justify-between shadow-lg pb-4  px-16 lg:px-40 gap-12 pt-8`}
    >
      <div>
        <Image className="w-16 h-16" alt='logo' src={logo1} />

      </div>
      <div className="flex flex-row gap-12 items-center justify-center">
        <ul className="md:flex gap-6 lg:gap-16 hidden">
          <li className="flex flex-row items-center justify-center gap-2">
            <Image className="w-3 lg:w-4 h-3 lg:h-4" alt='home' src={home} />
            <Link className="font-medium text-lg" href="#home">Home</Link>
          </li>
          <li className="flex flex-row items-center justify-center gap-2">
            <Image className="w-3 lg:w-4 h-3 lg:h-4" alt='profile' src={profile} />
            <Link className="font-medium text-lg" href="#contact">Profile</Link>
          </li>
          <li className="flex flex-row items-center justify-center gap-2">
            <Image className="w-3 lg:w-4 h-3 lg:h-4" alt='about' src={about} />
            <Link className="font-medium text-lg" href="#about">About Me</Link>
          </li>
          <li className="flex flex-row items-center justify-center gap-2">
            <Image className="w-3 lg:w-4 h-3 lg:h-4" alt="contact" src={contact} />
            <Link className="font-medium text-lg" href="#contact">Contact Me</Link>
          </li>
        </ul>
        
    <div className="flex flex-row items-center flex-wrap gap-4 relative">
    <div className="w-auto h-auto bg-white rounded-2xl ml-12 px-3 py-2">
            <Image
            alt="moon"
            onClick={() => setTheme(!theme)}
             className="w-8 h-8"
             src={theme ? moon : sun}/>
             
        </div>
        <div>
        <Image  alt="menu" src={menu} className="w-12 h-12 md:hidden" onClick={()=> setShow(!show)}/>
        </div>
        {show && (
          <div className="w-[100%]">
          <ul className="flex flex-col w-[100%]  md:hidden absolute top-20 gap-8 items-start px-4 py-4 rounded-xl right-1 bg-[#202020]">
          <li className="flex flex-row items-center justify-center gap-1">
            <Image className="w-4 lg:w-6 h-4 lg:h-6" alt='home' src={home} />
            <Link className=" ml-2 text-white font-medium text-lg" href="#home">Home</Link>
          </li>
          <li className="flex flex-row items-center justify-center gap-1">
            <Image className="w-4 lg:w-6 h-4 lg:h-6" alt="profile" src={profile} />
            <Link className=" ml-2 text-white font-medium text-lg" href="#contact">Profile</Link>
          </li>
          <li className="flex flex-row items-center justify-center gap-1">
            <Image className="w-4 lg:w-6 h-4 lg:h-6" alt='about' src={about} />
            <Link className=" ml-2 text-white font-medium text-lg" href="#about">About Me</Link>
          </li>
          <li className="flex flex-row items-center justify-center gap-1">
            <Image className="w-4 lg:w-6 h-4 lg:h-6" alt='contact' src={contact} />
            <Link className=" ml-2 text-white font-medium text-lg" href="#contact">Contact Me</Link>
          </li>
        </ul>
          </div>
        )}
    </div>
      </div>
    </div>

  );
}

export default Nav;
