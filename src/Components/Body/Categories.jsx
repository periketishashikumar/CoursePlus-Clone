import React from 'react'
import { FaAngular } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoColorWand } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoLeaf } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";

export default function Categories() {
  return (
    <section className='w-[calc(100vw-20vw)] absolute left-[20vw]' id='explore'>
      <div className='h-[105px] '></div>
      
      <article className='w-[75%] ' style={{margin:"auto"}}>
      <div className="text-2xl font-semibold mb-3 text-black"> Browse categories </div>
      <div className='h-[2vh]'></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-3">

                    <span className="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="https://demo.foxthemes.net/courseplus/assets/images/category/design.jpg" className="absolute w-full h-full object-cover" alt=""/>
                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </span>
                    <span className="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="https://demo.foxthemes.net/courseplus/assets/images/category/development.jpg" className="absolute w-full h-full object-cover" alt=""/>
                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Development </div>
                    </span>
                    <span className="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="https://demo.foxthemes.net/courseplus/assets/images/category/it-and-software.jpg" className="absolute w-full h-full object-cover" alt=""/>
                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> it-and-software </div>
                    </span>
                    <span className="rounded-md overflow-hidden relative w-full lg:h-full h-40 lg:row-span-2">
                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="https://demo.foxthemes.net/courseplus/assets/images/category/marketing.jpg" className="absolute w-full h-full object-cover" alt=""/>
                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Marketing </div>
                    </span>
                    <span className="rounded-md overflow-hidden relative w-full lg:h-48 h-40 lg:col-span-2">
                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="https://demo.foxthemes.net/courseplus/assets/images/category/music.jpg" className="absolute w-full h-full object-cover" alt=""/>
                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Music </div>
                    </span>
                    <span className="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div className="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="https://demo.foxthemes.net/courseplus/assets/images/category/photography.jpg" className="absolute w-full h-full object-cover" alt=""/>
                        <div className="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg">photography </div>
                    </span>

                </div>


                <div className="md:p-7 p-5 bg-white rounded-md shadow lg:mt-10 mt-6" style={{marginTop:"6vh",padding:"0px 5%"}}>

                    <h3 className="md:text-2xl text-xl mt-4 mb-1 font-bold" style={{marginBottom:"1vh"}}> Featured topics </h3>
                    <p className="mb-8" style={{marginBottom:"4vh"}}> Choose Your Favorite Topic</p>
        
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2 -m-3" style={{marginBottom:"3vh"}}>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg  gap-x-3" style={{padding:"2% 3%"}}>
                                <FaAngular name="logo-angular" className="text-3xl text-white from-red-600 to-red-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="logo angular"></FaAngular>
                                <div>
                                    <h3 className="font-semibold text-lg">Web Development</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 12 Courses </div>
                                        <div>·</div>
                                        <div> 156 Students</div>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3" style={{padding:"2% 3%"}}>
                                <FaBriefcase name="briefcase" className="text-3xl text-white from-blue-600 to-blue-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="briefcase"></FaBriefcase>
                                <div>
                                    <h3 className="font-semibold text-lg"> Financial Analysis</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 16 Courses </div>
                                        <div>·</div>
                                        <div> 523 Students</div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3" style={{padding:"2% 3%"}}>
                                <IoColorWand name="color-wand" className="text-3xl text-white from-purple-600 to-purple-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="color wand"></IoColorWand>
                                <div>
                                    <h3 className="font-semibold text-lg"> Graphic Design</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 23 Courses </div>
                                        <div>·</div>
                                        <div> 356  Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <IoShieldCheckmark name="shield-checkmark" className="text-3xl text-white from-yellow-600 to-yellow-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="shield checkmark"></IoShieldCheckmark>
                                <div>
                                    <h3 className="font-semibold text-lg"> Ethical Hacking</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 12 Courses </div>
                                        <div>·</div>
                                        <div> 256 Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <IoLeaf name="leaf" class="text-3xl text-white from-green-600 to-green-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="leaf"></IoLeaf>
                                <div>
                                    <h3 className="font-semibold text-lg"> Cyber Security</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 34 Courses </div>
                                        <div>·</div>
                                        <div> 420 Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <IoLogoFigma name="logo-figma" class="text-3xl text-white from-pink-600 to-pink-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="logo figma"></IoLogoFigma>
                                <div>
                                    <h3 className="font-semibold text-lg"> Adobe Target</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 14 Courses </div>
                                        <div>·</div>
                                        <div> 259K Students</div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 -m-3 mt-7" style={{marginBottom:"3vh"}}>
                        
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <FaBriefcase name="briefcase" class="text-3xl text-white from-blue-600 to-blue-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="briefcase"></FaBriefcase>
                                <div>
                                    <h3 className="font-semibold text-lg"> Financial Analysis</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 16 Courses </div>
                                        <div>·</div>
                                        <div> 523 Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3" style={{padding:"2% 3%"}}>
                                <IoColorWand name="color-wand" className="text-3xl text-white from-purple-600 to-purple-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="color wand"></IoColorWand>
                                <div>
                                    <h3 className="font-semibold text-lg"> Graphic Design</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 23 Courses </div>
                                        <div>·</div>
                                        <div> 356  Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <IoShieldCheckmark name="shield-checkmark" className="text-3xl text-white from-yellow-600 to-yellow-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="shield checkmark"></IoShieldCheckmark>
                                <div>
                                    <h3 className="font-semibold text-lg"> Ethical Hacking</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 12 Courses </div>
                                        <div>·</div>
                                        <div> 256 Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <FaAngular name="logo-angular" className="text-3xl text-white from-red-600 to-red-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="logo angular"></FaAngular>
                                <div>
                                    <h3 className="font-semibold text-lg">Web Development</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 12 Courses </div>
                                        <div>·</div>
                                        <div> 156 Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <IoLeaf name="leaf" className="text-3xl text-white from-green-600 to-green-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="leaf"></IoLeaf>
                                <div>
                                    <h3 className="font-semibold text-lg"> Cyber Security</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 34 Courses </div>
                                        <div>·</div>
                                        <div> 420 Students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hover:bg-gray-100 flex items-center px-3 py-2 rounded-lg gap-x-3"style={{padding:"2% 3%"}}>
                                <IoLogoFigma name="logo-figma" className="text-3xl text-white from-pink-600 to-pink-400 bg-gradient-to-tl p-2 rounded-md md hydrated text-[40px]" style={{padding:"2% 2%"}} role="img" aria-label="logo figma"></IoLogoFigma>
                                <div>
                                    <h3 className="font-semibold text-lg"> Adobe Target</h3>
                                    <div className="flex space-x-2 items-center text-sm pt-0.5">
                                        <div> 14 Courses </div>
                                        <div>·</div>
                                        <div> 259K Students</div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex justify-center mt-9 cursor-pointer" style={{marginTop:"9%"}}>
                        <span className="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm hover:text-[blue] border-none shadow-[0px_0px_1px_black]" style={{padding:"1% 4%"}}> More Topics ..</span>
                    </div>
<div className='h-[5vh]'></div>
                </div>
      </article>
    </section>
  )
}
