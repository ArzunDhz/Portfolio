import React from 'react'

const Project = ({Title='asdf' ,Projects='asdf',Github ='asdf' ,Link='asdf' ,url1='asdf' ,url2='asdf'}) => {
  return (

    <div className="m-4 mt-40 ">
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center   sm:text-[30px] text-[70px]  text-orange  dark:text-white
     "
      >
        {Title}
      </h1>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-taos-offset="400"
        className="relative "
      >
        <img src={Projects} className="mt-6 rounded-xl" />
        <a href={url1}>    <img src={Github} className="absolute top-[90%] left-[90%] w-16 h-16 sm:w-8 sm:h-8 sm:left-[80%] sm:top-[80%]" alt="" srcset="" /> </a>
        <a href={url2}>    <img src={Link} className="absolute top-[91%] left-[95%] w-14 h-14 sm:w-6 sm:h-6 sm:left-[90%] sm:top-[83%]" alt="" srcset="" /> </a>
     
      </div>


 
  </div>
  )
}

export default Project