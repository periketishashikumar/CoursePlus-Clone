import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import styles from './course.module.css'
export default function Courses() {
  
    function popularSlide(e){
      e.target.classList.toggle('popularslide1')
      e.target.classList.toggle("popularslide2")
  
      e.target.firstChild.classList.toggle("hidden")
      e.target.lastChild.classList.toggle("hidden")
      
    }
    
  
  return (
    <section className='w-[calc(100vw-20vw)] absolute left-[20vw]' id='explore' >
      <div className='h-[105px] '></div>
      
      <article  className={`${styles.section} w-[75%] `}>
                    <div class="h-[80px] flex flex-col justify-evenly">
                        <div class="text-xl font-semibold">  The world's largest selection of courses  </div>
                        <div class="text-sm mt-2">  Choose from 130,000 online video courses with new additions published every month </div>
                    </div>
                    <div className='h-[1vh]'></div>
                    <section className='w-[100%] h-[50vh] relative overflow-hidden relative'>
                              
                              <div className='h-[9vh] flex items-center '><h2 class="text-2xl font-semibold"> Popular Classes   </h2></div>
                              <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[57vw] top-[15vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
                                  <span id='icon' className='pointer-events-none'><IoIosArrowForward   className='pointer-events-none'/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
                                </div>
                              <div className='flex gap-x-[19px] transition-all duration-700 w-[80vw] '>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] shadow-[0px_0px_1px_black] rounded-[10px] '>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-[10px] h-[40vh] shadow-[0px_0px_1px_black]'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] rounded-[10px] shadow-[0px_0px_1px_black]'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-3.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] rounded-[10px] shadow-[0px_0px_1px_black]'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              </div>
                              
                            </section>



                            <section className='w-[100%] h-[40vh] relative overflow-hidden relative'>
                              
                              <div className='h-[15vh] flex justify-evenly flex-col'><h2 class="text-2xl font-semibold"> Categories  </h2><p class="font-medium text-gray-500 leading-6"> Find a topic by browsing top categories. </p></div>
                              

                              <div className='absolute h-[40px] w-[40px] rounded-[50%] flex items-center justify-center left-[57.3vw] top-[22vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
                                  <span id='icon' className='pointer-events-none'><IoIosArrowForward   className='pointer-events-none'/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
                                </div>
                              <div className='flex gap-x-[19px] transition-all duration-700 w-[80vw] '>
                              <div className='w-[18vw] h-[21vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] relative '>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/category/marketing.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <span><div class="absolute bottom-[10px] left-[10px] w-full p-3 text-white z-20 font-semibold text-lg"> Marketing </div></span>
                              </div>
                              <div className='w-[18vw] h-[21vh] overflow-hidden rounded-[10px]  shadow-[0px_0px_1px_black] relative'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/category/it-and-software.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <span><div class="absolute bottom-[10px] left-[10px] w-full p-3 text-white z-20 font-semibold text-lg"> Software </div></span>
                                
                                
                              </div>
                              <div className='w-[18vw] h-[21vh] overflow-hidden rounded-t-[10px]  rounded-[10px] shadow-[0px_0px_1px_black] relative'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/category/music.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <span><div class="absolute bottom-[10px] left-[10px] w-full p-3 text-white z-20 font-semibold text-lg"> Music </div></span>
                                
                                
                              </div>
                              <div className='w-[18vw] h-[22vh] overflow-hidden rounded-t-[10px] rounded-[10px] shadow-[0px_0px_1px_black] relative'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/category/business.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <span><div class="absolute bottom-[10px] left-[10px] w-full p-3 text-white z-20 font-semibold text-lg"> Travel </div></span>
                                
                                
                              </div>
                              <div className='w-[18vw] h-[21vh] overflow-hidden rounded-t-[10px] rounded-[10px] shadow-[0px_0px_1px_black] relative'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/category/development.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <span><div class="absolute bottom-[10px] left-[10px] w-full p-3 text-white z-20 font-semibold text-lg"> Development </div></span>
                                
                                
                              </div>
                              <div className='w-[18vw] h-[21vh] overflow-hidden rounded-t-[10px] rounded-[10px] shadow-[0px_0px_1px_black] relative'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/category/design.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <span><div class="absolute bottom-[10px] left-[10px] w-full p-3 text-white z-20 font-semibold text-lg"> Design </div></span>
                                
                                
                              </div>
                              
                              </div>
                              
                            </section>







                            <section className='w-[100%] h-[60vh] relative overflow-hidden relative'>
                              
                            <div className='h-[15vh] flex justify-evenly flex-col'><h2 class="text-2xl font-semibold"> Web Development Courses  </h2><p class="font-medium text-gray-500 leading-6"> Choose from +10.000 courses with new additions published every months </p></div>
                            <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[57vw] top-[29vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
                                  <span id='icon' className='pointer-events-none'><IoIosArrowForward   className='pointer-events-none'/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
                                </div>
                              <div className='flex gap-x-[19px] transition-all duration-700 w-[80vw] '>
                              <div className='w-[20vw] h-[40vh] overflow-hidden rounded-t-[10px] h-[40vh] shadow-[0px_0px_1px_black] rounded-[10px] '>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-4.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-[10px] h-[40vh] shadow-[0px_0px_1px_black]'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-6.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] rounded-[10px] shadow-[0px_0px_1px_black]'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-5.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] rounded-[10px] shadow-[0px_0px_1px_black]'>
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                        <div class="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                                        <div class="flex space-x-2 items-center text-sm pt-3">
                                                                            <div> 13 hours  </div>
                                                                            <div> · </div>
                                                                            <div> 32 lectures </div>
                                                                        </div>
                                                                        <div class="pt-1 flex items-center justify-between">
                                                                            <div class="text-sm font-medium"> John Michael </div>
                                                                            <div class="text-lg font-semibold"> $14.99 </div>
                                                                        </div>
                                                                    </div>
                                
                                
                              </div>
                              </div>
                              
                            </section>
                            <div className='h-[10vh]'></div>
      </article>
      </section>
  )
}
