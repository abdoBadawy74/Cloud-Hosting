"use client";
import { GrTechnology } from "react-icons/gr";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import "./NavBar.css"

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between">
        <div>
          <Link href="/" className="hidden lg:flex items-center text-[24px] font-bold text-[rgb(176,15,176)]">
            CLOUD
            <GrTechnology />
            HOSTING
          </Link>
          <div onClick={()=> setToggle(prev => !prev)} className="text-[40px] cursor-pointer text-[#202121] lg:hidden">
           {
            toggle ? <IoClose />:<AiOutlineMenu/>
           } 
          </div>
        </div>
        <div className="navlinks-wrapper"
          style={{clipPath:toggle &&"polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""}}
        >
          <ul className="ml-[30px]">
              <Link onClick={()=>setToggle(false)}  className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/">Home</Link>
              <Link onClick={()=>setToggle(false)}  className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/articles">Articles</Link>
              <Link  onClick={()=>setToggle(false)} className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/about">About</Link>
              <Link  onClick={()=>setToggle(false)} className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/admin">Admin</Link>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar