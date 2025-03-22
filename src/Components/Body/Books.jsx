import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Books() {
  function popularSlide(e){
    e.target.classList.toggle('popularslide1')
    e.target.classList.toggle("popularslide2")

    e.target.firstChild.classList.toggle("hidden")
    e.target.lastChild.classList.toggle("hidden")
    
  }
  return (
    <section className='w-[calc(100vw-20vw)] absolute left-[20vw] '>
            <div className='h-[80px] '></div>

      <article className='lg:flex lg:space-x-10  h-[80vh]' >
      <div className="lg:w-2/3 flex-shrink-0 "style={{paddingLeft:"10vw"}}> 
                        
                        <section className='w-[94%] h-[40vh] relative overflow-hidden ' >
                                  
                                  <div className='h-[9vh] flex items-center '><h2 class="text-2xl font-semibold"> Books  </h2></div>
                                  <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[37.5vw] top-[19vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
                                      <span id='icon' className='pointer-events-none'><IoIosArrowForward   className=''/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
                                    </div>
                                  <div className='flex gap-x-[19px] transition-all duration-700 w-[80vw] '>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> Vue.js Bsics </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book2.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> HTML5 & CSS </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book3.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> Learn CSS </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh]  overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book4.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> HTML5 Breaker </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book5.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> CSS Master </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  </div>
                                  
                                </section>



                                <section className='w-[94%] h-[40vh] relative overflow-hidden' >
                                  
                                  <div className='h-[9vh] flex items-center '><h2 class="text-2xl font-semibold"> Books  </h2></div>
                                  <div className='absolute h-[45px] w-[45px] rounded-[50%] flex items-center justify-center left-[37.5vw] top-[19vh] bg-white cursor-pointer z-[20] shadow-[0px_2px_2px_black] icon_sec' onClick={popularSlide}>
                                      <span id='icon' className='pointer-events-none'><IoIosArrowForward   className=''/></span> <span className='hidden pointer-events-none'><IoIosArrowBack  /></span>
                                    </div>
                                  <div className='flex gap-x-[19px] transition-all duration-700 w-[80vw] '>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book5.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> Vue.js Bsics </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book4.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> HTML5 & CSS </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book1.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> Learn CSS </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh]  overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book2.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> HTML5 Breaker </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  <div className='w-[9vw] h-[27vh] overflow-hidden rounded-t-[10px]  shadow-[0px_0px_1px_black] rounded-[10px] '>
                                    <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book3.jpg" alt="" className='rounded-t-[10px] h-[10rem] w-[20vw]'/>
                                    <div class="card-body p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                                                                            <div className="font-semibold line-clamp-2 h-full w-full flex items-center justify-center"> CSS Master </div>
                                                                          
                                                                        </div>
                                    
                                    
                                  </div>
                                  </div>
                                  
                                </section>
                    </div>



                    <div className="lg:w-1/3 w-full">

                        <div className="my-2 flex items-center justify-between pb-2" style={{margin:"2% 0%",paddingBottom:"2%"}}>
                            <div>
                                <h2 className="text-xl font-semibold">Top Books</h2> 
                            </div>
                            <span className="text-blue-500"> See all </span>
                        </div>

                        <div className="flex flex-col gap-y-7 mt-6" style={{marginTop:"6%"}}>
                            <div className="p-3 bg-white shadow rounded-md flex items-center gap-x-3">
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book1.jpg" class="w-20 h-24 rounded-lg -mt-7 shadow-md" alt=""/>
                                <div className="flex-1"> 
                                    <div className="font-semibold"> Vue.js Basics</div> 
                                    <div className="text-sm"> John smith </div> 
                                </div>
                                <span> 
                                    <ion-icon name="download-outline" className="text-2xl text-gray-600 md hydrated" role="img" aria-label="download outline"></ion-icon>
                                </span>
                            </div>
                        
                            <div className="p-3 bg-white shadow rounded-md flex items-center gap-x-3">
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book2.jpg" class="w-20 h-24 rounded-lg -mt-7 shadow-md" alt=""/>
                                <div className="flex-1"> 
                                    <div className="font-semibold"> HTML5 &amp; CSS3</div> 
                                    <div className="text-sm"> John smith </div> 
                                </div>
                                <span> 
                                    <ion-icon name="download-outline" className="text-2xl text-gray-600 md hydrated" role="img" aria-label="download outline"></ion-icon>
                                </span>
                            </div>
                         
                            <div className="p-3 bg-white shadow rounded-md flex items-center gap-x-3">
                                <img src="https://demo.foxthemes.net/courseplus/assets/images/book/book3.jpg" className="w-20 h-24 rounded-lg -mt-7 shadow-md" alt=""/>
                                <div className="flex-1"> 
                                    <div class="font-semibold"> Learn CSS</div> 
                                    <div class="text-sm"> John smith </div> 
                                </div>
                                <span> 
                                    <ion-icon name="download-outline" className="text-2xl text-gray-600 md hydrated" role="img" aria-label="download outline"></ion-icon>
                                </span>
                            </div>
                        </div>

                        <div className="mt-6" style={{marginTop:"6%"}}>
                            <h4 className="text-lg mb-2 font-semibold" style={{marginBottom:"2%"}}> Tags </h4>
                            <div className="flex flex-wrap font-medium gap-2 w-[200px]">
                                <span className="bg-white px-3.5 py-1 rounded shadow-[0px_0px_1px_black] text-sm" style={{padding:"2.9% 4.5%"}}> JavaScript</span>
                                <span className="bg-white px-3.5 py-1 rounded shadow-[0px_0px_1px_black] text-sm" style={{padding:"2.9% 4.5%"}}> Angular</span>
                                <span className="bg-white px-3.5 py-1 rounded shadow-[0px_0px_1px_black] text-sm" style={{padding:"2.9% 4.5%"}}> Design</span>
                                <span className="bg-white px-3.5 py-1 rounded shadow-[0px_0px_1px_black] text-sm" style={{padding:"2.9% 4.5%"}}> Photography</span>
                                <span className="bg-white px-3.5 py-1 rounded shadow-[0px_0px_1px_black] text-sm" style={{padding:"2.9% 4.5%"}}> Technology</span>
                                <span className="bg-white px-3.5 py-1 rounded shadow-[0px_0px_1px_black] text-sm" style={{padding:"2.9% 4.5%"}}> Music</span> 
                            </div>
                        </div>
                        
                    </div>
      </article>
    </section>
  )
}
