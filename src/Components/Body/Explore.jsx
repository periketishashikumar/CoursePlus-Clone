import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

export default function Explore() {
  function featuredSlide(e){
    e.target.classList.toggle('featuredslide1')
    e.target.classList.toggle("featuredslide2")

    e.target.firstChild.classList.toggle("hidden")
    e.target.lastChild.classList.toggle("hidden")
    
    
  }
  function popularSlide(e){
    e.target.classList.toggle('popularslide1')
    e.target.classList.toggle("popularslide2")

    e.target.firstChild.classList.toggle("hidden")
    e.target.lastChild.classList.toggle("hidden")
    
  }
  useEffect(()=>{
    let a  = document.querySelector("#slide2");
    console.log(a);
    a.checked = true
    
  },[])

  return (
    <section className='w-[calc(100vw-20vw)] absolute left-[20vw] ' id='explore' >
      <article id='slider' className='w-[inherit]'>
        <aside className='relative  border-1 w-full h-[450px]'>
          <label htmlFor="slide"></label>
          
          <input  type="radio" name="slide" id="slide2" htmlFor="slide" className='slide_check absolute cursor-pointer z-2 bottom-[30px] left-[35px]' />
          <section>
          <img src="https://demo.foxthemes.net/courseplus/assets/images/hero-2.jpg" alt="" className='absolute h-full w-full opacity-[1]'/>
          <div  className="flex flex-col justify-center h-full w-full " >
                            <h1 className="lg:text-4xl text-2xl text-white font-semibold" > Learn from the best</h1>
                            <p  className="text-base text-white font-medium lg:w-1/2" > Choose from 130,000 online video courses with new <br /> additions published every month </p>
                            <button  className="bg-white  rounded-md text-base text-center w-35 h-[50px] text-[20px] text-[#bbb] cursor-pointer" style={{transform: "translateY(50px)"}}> Get Started </button> 
          </div>
          </section>
          
          <input type="radio" name="slide" id="slide1" htmlFor="slide" className='slide_check absolute cursor-pointer z-2 bottom-[30px] left-[65px]' />
          <section>
          <img src="https://demo.foxthemes.net/courseplus/assets/images/hero-1.jpg" alt="" className='absolute h-full w-full'/>
          
          <div className="flex flex-col justify-center h-full w-full " >
                            <h1 className="lg:text-4xl text-2xl text-white font-semibold" > Learn from the best</h1>
                            <p  className="text-base text-white font-medium lg:w-1/2" > Choose from 130,000 online video courses with new additions published every month </p>
                            <button  className="bg-white  rounded-md text-base text-center w-35 h-[50px] text-[20px] text-[#bbb] cursor-pointer " > Get Started </button> 
          </div>
          </section>
        </aside>
        
      </article>
      <article id='featured_classes'>
        <div className='h-[5vh]'></div>
        <section className='w-[calc(100%-250px)] h-[50vh] relative overflow-hidden '>
          
          <div className='h-[9vh] flex items-center '><h2 class="text-2xl font-semibold"> Featured Classes   </h2></div>
          <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[60vw] top-[20vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={featuredSlide}>
              <span id='icon' className='pointer-events-none'><IoIosArrowForward   className=''/></span> <span className='hidden pointer-events-none'><IoIosArrowBack /></span>
            </div>
          <div className='flex gap-x-[75px] transition-all duration-700 w-[135vw] '>
          <div className='flex gap-x-[50px] w-[100%] h-[30vh] overflow-hidden '><img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-6.jpg" alt="" className='float-left rounded-[15px]'/>
            <div className='w-[35vw] flex flex-col justify-evenly '>
            <div className=''>
            <div className="font-semibold line-clamp-2 md:text-xl md:leading-relaxed ">Learn How to Build Responsive Web Design Essentials HTML5 CSS3 and Bootstrap </div>
            </div>
            <div className="mt-2 md:block hidden ">
                                            <p className="line-clamp-2 w-[70%]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
                                        </div>
                                        <div className="font-semibold mt-3 "> John Michael </div>
                                        <div className="mt-1 flex items-center justify-between ">
                                            <div className="flex space-x-2 items-center text-sm pt-2">
                                                <div> 13 hours </div>
                                                <div>·</div>
                                                <div> 32 lectures </div>
                                            </div>
                                            <div className="text-lg font-semibold"> $14.99 </div>
                                        </div>
            </div>
            
          </div>
          <div className='flex gap-x-[50px] w-[100%] h-[30vh] overflow-hidden '><img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg" alt="" className='float-left rounded-[15px]'/>
            <div className='w-[35vw] flex flex-col justify-evenly '>
            <div className=''>
            <div className="font-semibold line-clamp-2 md:text-xl md:leading-relaxed ">Learn How to Build Responsive Web Design Essentials HTML5 CSS3 and Bootstrap </div>
            </div>
            <div className="mt-2 md:block hidden ">
                                            <p className="line-clamp-2 w-[70%]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam</p>
                                        </div>
                                        <div className="font-semibold mt-3 "> John Michael </div>
                                        <div className="mt-1 flex items-center justify-between ">
                                            <div className="flex space-x-2 items-center text-sm pt-2">
                                                <div> 13 hours </div>
                                                <div>·</div>
                                                <div> 32 lectures </div>
                                            </div>
                                            <div className="text-lg font-semibold"> $14.99 </div>
                                        </div>
            </div>
            
          </div>
          </div>
          
        </section>
      </article>




    <article id='popular_classes'>
    <div className='h-[5vh]'></div>
        <section className='w-[calc(100%-250px)] h-[50vh] relative overflow-hidden '>
          
          <div className='h-[9vh] flex items-center '><h2 class="text-2xl font-semibold"> Popular Classes   </h2></div>
          <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[60vw] top-[25vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
              <span id='icon' className='pointer-events-none'><IoIosArrowForward   className=''/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
            </div>
          <div className='flex gap-x-[19px] transition-all duration-700 w-[80vw] '>
          <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] shadow-[0px_0px_1px_black] rounded-[10px] '>
            <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
            <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                    <div className="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                    <div className="flex space-x-2 items-center text-sm pt-3">
                                                        <div> 13 hours  </div>
                                                        <div> · </div>
                                                        <div> 32 lectures </div>
                                                    </div>
                                                    <div className="pt-1 flex items-center justify-between">
                                                        <div className="text-sm font-medium"> John Michael </div>
                                                        <div className="text-lg font-semibold"> $14.99 </div>
                                                    </div>
                                                </div>
            
            
          </div>
          <div className='w-[20vw] h-[30vh] overflow-hidden rounded-[10px] h-[40vh] shadow-[0px_0px_1px_black]'>
            <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
            <div className="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                    <div className="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                    <div className="flex space-x-2 items-center text-sm pt-3">
                                                        <div> 13 hours  </div>
                                                        <div> · </div>
                                                        <div> 32 lectures </div>
                                                    </div>
                                                    <div className="pt-1 flex items-center justify-between">
                                                        <div className="text-sm font-medium"> John Michael </div>
                                                        <div className="text-lg font-semibold"> $14.99 </div>
                                                    </div>
                                                </div>
            
            
          </div>
          <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] rounded-[10px] shadow-[0px_0px_1px_black]'>
            <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-3.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
            <div className="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                    <div className="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                    <div className="flex space-x-2 items-center text-sm pt-3">
                                                        <div> 13 hours  </div>
                                                        <div> · </div>
                                                        <div> 32 lectures </div>
                                                    </div>
                                                    <div className="pt-1 flex items-center justify-between">
                                                        <div className="text-sm font-medium"> John Michael </div>
                                                        <div className="text-lg font-semibold"> $14.99 </div>
                                                    </div>
                                                </div>
            
            
          </div>
          <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[40vh] rounded-[10px] shadow-[0px_0px_1px_black]'>
            <img src="https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
            <div className="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                    <div className="font-semibold line-clamp-2"> Learn JavaScript and Express to become a professional JavaScript developer. </div>
                                                    <div className="flex space-x-2 items-center text-sm pt-3">
                                                        <div> 13 hours  </div>
                                                        <div> · </div>
                                                        <div> 32 lectures </div>
                                                    </div>
                                                    <div className="pt-1 flex items-center justify-between">
                                                        <div className="text-sm font-medium"> John Michael </div>
                                                        <div className="text-lg font-semibold"> $14.99 </div>
                                                    </div>
                                                </div>
            
            
          </div>
          </div>
          
        </section>
        
    </article>  



    <article id='latest_episodes' className=''>
    <div className='h-[5vh]'></div>
        <section className='w-[calc(100%-250px)] h-[40vh] relative overflow-hidden mx-auto'>
        <div className='h-[9vh] flex items-center '><h2 class="text-2xl font-semibold"> Latest Episodes  </h2></div>
          <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[60vw] top-[20vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
              <span id='icon' className='pointer-events-none'><IoIosArrowForward   className=''/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
            </div>
          <div className='flex gap-[20px] transition-all duration-700 w-[80vw]'>
                <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[22vh] shadow-[0px_0px_1px_black] rounded-[10px] relative'>
                  <span className='text-white absolute left-[8vw] top-[7.8vh] text-[25px] border-black h-[50px] w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer'><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" alt="" /></span>
                  <span className="absolute bottom-[10vh] right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded w-[34px] text-center">12:21</span>

                  <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                  <div className="card-body  flex flex-col justify-evenly h-[calc(100%-10rem)]">
                                                          <div className="font-semibold line-clamp-2"> The PHP Singleton class </div>
                                                          <div className="flex space-x-2 items-center text-sm ">
                                                              <div className='text-[16px]'> By Stella Johnson  </div>
                                                          </div>
                                                      </div>
                  
                  
                </div>

                <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[22vh] shadow-[0px_0px_1px_black] rounded-[10px] relative'>
                <span className='text-white absolute left-[8vw] top-[7.8vh] text-[25px] border-black h-[50px] w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer'><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" alt="" /></span>
                <span className="absolute bottom-[10vh] right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded w-[34px] text-center">12:21</span>

                  <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-4.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                  <div className="card-body  flex flex-col justify-evenly h-[calc(100%-10rem)]">
                                                          <div className="font-semibold line-clamp-2"> The PHP Singleton class </div>
                                                          <div className="flex space-x-2 items-center text-sm ">
                                                              <div className='text-[16px]'> By Stella Johnson  </div>
                                                          </div>
                                                      </div>
                  
                  
                </div>


                <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[22vh] shadow-[0px_0px_1px_black] rounded-[10px] relative '>
                <span className='text-white absolute left-[8vw] top-[7.8vh] text-[25px] border-black h-[50px] w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer'><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" alt="" /></span>
                <span className="absolute bottom-[10vh] right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded w-[34px] text-center">12:21</span>

                  <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                  <div className="card-body  flex flex-col justify-evenly h-[calc(100%-10rem)]">
                                                          <div className="font-semibold line-clamp-2"> The PHP Singleton class </div>
                                                          <div className="flex space-x-2 items-center text-sm ">
                                                              <div className='text-[16px]'> By Stella Johnson  </div>
                                                          </div>
                                                      </div>
                  
                  
                </div>

                <div className='w-[20vw] h-[30vh] overflow-hidden rounded-t-[10px] h-[22vh] shadow-[0px_0px_1px_black] rounded-[10px] relative '>
                <span className='text-white absolute left-[8vw] top-[7.8vh] text-[25px] border-black h-[50px] w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer'><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" alt="" /></span>
                <span className="absolute bottom-[10vh] right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded w-[34px] text-center">12:21</span>
                    <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-3.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                    <div className="card-body  flex flex-col justify-evenly h-[calc(100%-10rem)]">
                                                            <div className="font-semibold line-clamp-2"> The PHP Singleton class </div>
                                                            <div className="flex space-x-2 items-center text-sm ">
                                                                <div className='text-[16px]'> By Stella Johnson  </div>
                                                            </div>
                                                            
                                                        </div>
                    
                    
                  </div>
          </div>
        </section>
        
        </article>   
    </section>

    
  )
}
