import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCompassSharp } from "react-icons/io5";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoAlbums } from "react-icons/io5";
import { IoFilmSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";

export default function SideNav() {
  return (
    <nav id="side_nav" className='w-[20vw] h-[100vh] fixed shadow-[0px_0px_2px_#000]'>
      <div className="h-[80px]"></div>
      <ol className=' text-[16px] h-[50%] flex flex-col justify-evenly'>
      <NavLink to='/' className={`flex gap-x-[10px] items-center  ${({isActive})=>{return isActive?'text-[#2a41e8]':'text-black'}}`}><li className='h-[6.5vh] flex gap-x-[10px] items-center w-[95%] rounded-[10px] cursor-pointer'><div className='h-[2rem] w-[2rem] flex items-center rounded-[0.375rem] relative bg-gradient-to-br from-[#c4b5fd] to-[#3b82f6] z-1'><IoCompassSharp className='text-[white] text-[2rem] absolute left-[0px] h-[25px]'/></div><span className='text-[16px] font-[500]'>Explore</span></li></NavLink>
      <NavLink to='/courses' className={`flex gap-x-[10px] items-center ${({isActive})=>{return isActive?'text-[#2a41e8] ':'text-black'}}`}> <li className='h-[6.5vh] flex gap-x-[10px] items-center  w-[95%] rounded-[10px] cursor-pointer'><div className='h-[2rem] w-[2rem] flex items-center rounded-[0.375rem] relative bg-gradient-to-br from-[#fcd34d] to-[#ef4444] z-1'><BsFillPlayCircleFill className='text-[white] text-[1.3rem] absolute left-[5px] h-[25px]'/></div><span className='text-[16px] font-[500]'>Courses</span></li></NavLink>
      <NavLink to='/categories' className={`flex gap-x-[10px] items-center ${({isActive})=>{return isActive?'text-[#2a41e8]':'text-black'}}`}><li className='h-[6.5vh]  flex gap-x-[10px] items-center w-[95%] rounded-[10px] cursor-pointer'><div className='h-[2rem] w-[2rem] flex items-center rounded-[0.375rem] relative bg-gradient-to-br from-[#6ee7b7] to-[#10b981] z-1 '><IoAlbums className='text-[white] text-[2rem] absolute left-[0px] h-[25px]'/></div><span className='text-[16px] font-[500]'>Categories</span></li></NavLink>
      <NavLink to='/episodes' className={`flex gap-x-[10px] items-center ${({isActive})=>{return isActive?'text-[#2a41e8]':'text-black'}}`}> <li className='h-[6.5vh]  flex gap-x-[10px] items-center items-center w-[95%] rounded-[10px] cursor-pointer'><div className='h-[2rem] w-[2rem] flex items-center rounded-[0.375rem] relative bg-gradient-to-br from-[#f9a8d4] to-[#ef4444] z-1'><IoFilmSharp className='text-[white] text-[1.4rem] absolute left-[4.5px] h-[25px]'/></div><span className='text-[16px] font-[500]'>Episodes</span></li></NavLink>
      <NavLink to='/books' className={`flex gap-x-[10px] items-center ${({isActive})=>{return isActive?'text-[#2a41e8]':'text-black'}}`}> <li className='h-[6.5vh] flex gap-x-[10px] items-center w-[95%] rounded-[10px] cursor-pointer'><div className='h-[2rem] w-[2rem] flex items-center rounded-[0.375rem] relative bg-gradient-to-br from-[#c4b5fd] to-[#3b82f6] z-1'><IoBookSharp className='text-[white] text-[1.4rem] absolute left-[4.5px] h-[25px]'/></div><span className='text-[16px] font-[500]'>Books</span></li></NavLink>
      <NavLink to='/articles' className={`flex gap-x-[10px] items-center ${({isActive})=>{return isActive?'text-[#2a41e8]':'text-black'}}`}> <li className='h-[6.5vh] flex gap-x-[10px]  items-center w-[95%] rounded-[10px] cursor-pointer'><div className='h-[2rem] w-[2rem] flex items-center rounded-[0.375rem] relative bg-gradient-to-br from-[#fcd34d] to-[#ef4444] z-1'><IoNewspaper className='text-[white] text-[1.4rem] absolute left-[4.5px] h-[25px]'/></div><span className='text-[16px] font-[500]'>Articles</span></li></NavLink>
      </ol>
    </nav>
  )
}
