import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function Nav() {
  return (
   <header className='h-[80px] w-[100%] backdrop-filter absolute backdrop-blur-2xl top-[0] z-20 fixed'>
    <nav id="main_nav" className=' h-[inherit] w-[calc(100%-60px)] flex justify-between'>
    <ol className='flex w-[40%] h-[inherit] items-center justify-between'>
        <li><NavLink><span><img src="https://demo.foxthemes.net/courseplus/assets/images/logo.png" alt="" className='h-[30px]'/></span></NavLink></li>
        <li><span className='relative'><input type="search" placeholder='Quik search for anything....' className='placeholder:px-[30px] w-[15vw] border-none outline-none'/> <span className='absolute left-[0] top-[4px]'><HiMiniMagnifyingGlass/></span></span></li>
        
      </ol>
      <ol className='flex w-[15%] h-[inherit] items-center justify-evenly'>
        <li><span ><IoCartOutline className='text-[25px]'/></span></li>
        <li><span ><CiMail className='text-[25px]'/></span></li>
        <li><span ><IoIosNotificationsOutline className='text-[25px]'/></span></li>
        <li><span><img src="https://demo.foxthemes.net/courseplus/assets/images/avatars/placeholder.png" alt="" className='h-[32px]'/></span></li>
      </ol>
    </nav>
   </header>
  )
}

