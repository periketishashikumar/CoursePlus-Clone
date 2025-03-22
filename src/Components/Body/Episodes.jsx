import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

export default function Episodes() {
  function popularSlide(e){
    e.target.classList.toggle('popularslide1')
    e.target.classList.toggle("popularslide2")

    e.target.firstChild.classList.toggle("hidden")
    e.target.lastChild.classList.toggle("hidden")
    
  }
  return (
  <section className='w-[calc(100vw-20vw)] absolute left-[20vw]' id='explore' >
    <div className='h-[105px] '></div>
    <div className='w-[75%]' style={{margin:"auto"}}>

<h1 className="text-2xl font-semibold mb-5" style={{marginBottom:"5%"}}> Episodes </h1>

<div className="grid lg:grid-cols-4 grid-cols-2 gap-3 mb-5" style={{marginBottom:"5%"}}>

    <span className="col-span-2 row-span-2" > 
        <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-full h-60 shadow-sm ">
            <img src="https://demo.foxthemes.net/courseplus/assets/images/blog/img-5.jpg" className="absolute w-full h-full object-cover" alt=""/>
            <div className="absolute bottom-0 w-full p-5 text-white z-20 text-opacity-90 backdrop-filter backdrop-blur-lg"style={{padding:"5% 5%"}}>
                <h1 className="font-bold lg:text-2xl text-xl text-white mb-1 line-clamp-2"> Learn Angular Fundamentals From beginning to advance lavel</h1>
                <div className="flex gap-x-2 items-center text-sm mt-2" style={{marginTop:"2%"}}>
                    <p className="font-semibold md:block hidden"> Denise Marie </p>
                    <div className="md:block hidden">·</div>
                    <div> 27 weeks ago</div> 
                    <div className="md:block hidden">·</div> 
                    <div> 156.9K views</div>
                </div>
            </div>
            <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
        </div>
    </span>
    
        <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle image relative">
            <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg" className="absolute w-full h-full object-cover" alt=""/>
            <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base"style={{padding:"3% 3%"}}>  The PHP Singleton class  </div>
            <span className='hidden '><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" className="w-12 h-12 uk-position-center uk-transition-fade -mt-4 absolute left-[40%] top-[35%] " alt=""/></span>
            <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
        </div>
        <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle image relative">
            <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-3.jpg" className="absolute w-full h-full object-cover" alt=""/>
            <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base" style={{padding:"3% 3%"}}>  Creating sticky in HTML  </div>
            <span className='hidden'><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" className="w-12 h-12 uk-position-center uk-transition-fade absolute left-[40%] top-[35%] -mt-4" alt=""/></span>
            <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
        </div>
        <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle image relative">
            <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-4.jpg" className="absolute w-full h-full object-cover " alt=""/>
            <div className="absolute bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base" style={{padding:"3% 3%"}}>  Larafel $ fliepond  </div>
            <span className='hidden'><img src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" className="w-12 h-12 uk-position-center uk-transition-fade -mt-4 absolute left-[40%] top-[35%]" alt=""/></span>
            <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
        </div>
        <div className="bg-gray-200 rounded-md overflow-hidden relative w-full lg:h-44 h-36 shadow-sm uk-transition-toggle image relative">
            <img src="https://demo.foxthemes.net/courseplus/assets/images/episodes/img-1.jpg" className="absolute w-full h-full object-cover" alt=""/>
            <div className="absolute -bottom-1.5 w-full p-3 text-white z-20 line-clamp-2 text-opacity-95 font-medium text-base"style={{padding:"3% 3%"}}> Creating Website Pure CSS  </div>
            <span className='hidden'><img  src="https://demo.foxthemes.net/courseplus/assets/images/icon-play.svg" className="w-12 h-12 uk-position-center uk-transition-fade -mt-4 absolute left-[40%] top-[35%]" alt=""/></span>
            <div className="absolute w-full h-full -bottom-1/2 bg-gradient-to-b from-transparent to-gray-800 z-10"></div>
        </div>

</div>


</div>



<article id='latest_episodes' className=''>
    
        <section className='w-[75%] h-[40vh] relative overflow-hidden mx-auto'>
        <div className='h-[9vh] flex items-center '><h4 className="py-3 px-5 border-b font-bold text-grey-700 -mx-4 -mt-3 mb-2 flex items-center gap-x-2 text-l"style={{padding:"3% 2%"}}> <IoIosStar name="star" className="mr-2 md hydrated" role="img" aria-label="star"></IoIosStar> Graphic desginer </h4></div>
          <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[57vw] top-[20vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
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

        

        <section className='w-[75%] h-[40vh] relative overflow-hidden relative' id='latest_episodes' style={{margin:"auto"}}>
                                      
                                      <div className='h-[15vh] flex justify-evenly flex-col'><h2 class="text-2xl font-semibold"> Categories  </h2><p class="font-medium text-gray-500 leading-6"> Find a topic by browsing top categories. </p></div>
                                      
        
                                      <div className='absolute h-[40px] w-[40px] rounded-[50%] flex items-center justify-center left-[57vw] top-[23vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
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


                                    <article id='latest_episodes' className=''>
        <section className='w-[75%] h-[40vh] relative overflow-hidden mx-auto'>
        <div className='h-[9vh] flex items-center '><h4 className="py-3 px-5 border-b font-bold text-grey-700 -mx-4 -mt-3 mb-2 flex items-center gap-x-2 text-l"style={{padding:"3% 2%"}}> <IoIosStar name="star" className="mr-2 md hydrated" role="img" aria-label="star"></IoIosStar> Graphic desginer </h4></div>
          <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[57vw] top-[20vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
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
        <div className='h-[5vh]'></div>
        
  </section>
  )
}
