import React from 'react'
import { useRef } from 'react'
import { motion, inView, useScroll } from 'framer-motion'


const Zoom = ({Title , Link}) => {
    const ref =useRef(null)
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:['0 1', '1.33 1']
    
    })
    
      
      return (
        <div ref={ref}  className='flex items-center justify-center w-full min-h-[50vh] bg-black '>
           
         
          <motion.div 
           style={{
            scale:scrollYProgress,
            opacity:scrollYProgress
            }}
     
          className=' text-orange text-[10vw] dark:text-white'>
            <img src={Link} className=' lg:w-[200px]' alt="" srcset="" />
           <h1 className='text-center '> {Title}</h1>
          </motion.div>
    
     
        </div>
      )
}

export default Zoom