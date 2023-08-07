import React from 'react'
import Astro5 from '../assets/astro5.png'
const Findme = () => {
  return (
   <>
   <div className="w-full min-h-screen bg-black ">
        <div className="flex items-center justify-center space-x-40 sm:space-x-0 ">
          <div className="">
            <img src={Astro5} className='astro w-[500px] sm:hidden' alt="" srcset="" />
          </div>
          <div className=" Contact w-[600px] h-[500px] sm:w-[300px] sm:h-[500px] rounded-[40px] ">
                   <h1 className='  ml-6 text-white text-[50px] sm:text-[40px] '>Get in Touch</h1>
                   <div className="h-2 ml-12 sm:h-1 sm:w-16 rounded-xl w-60 bg-orange"></div>
                   <form className='flex flex-col items-center mt-12 space-y-6 text-white'>
                    <input type="text" className='border-b-2 border-b-white Contact w-[90%] ' placeholder=' Name' />
                    <input type="text" className='border-b-2 border-b-white Contact w-[90%]  ' placeholder=' Email' />
                    <textarea placeholder='Message ' className=' resize-none border-b-2 border-b-white w-[90%]    Contact' name="" id="" cols="25" rows="5"></textarea>               
                  <button className='w-20 h-10 text-black bg-orange rounded-3xl'>Connect</button>
                   </form>
                   <input type="checkbox" className='ml-8 mt-9' name="" id="" /> <span className='text-white '>Send me Notification</span>
     
          </div>
          
        </div>

   </div>
   
   </>
  )
}

export default Findme