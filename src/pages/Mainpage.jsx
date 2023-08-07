import Astroid1 from "../assets/astroid 2.png";
import Astroid2 from "../assets/astroid.png";
import Astro from "../assets/astro.png";
import PurplePlanet from "../assets/purplePlanet.png";
import Start from "../assets/star.png";
import Planet1 from "../assets/planet.png";
import Planet2 from "../assets/planet2.png";
import Planet3 from "../assets/plant 3.png";
import Planet5 from "../assets/planet5.png";
import Glow from "../assets/glow.png";
import Cloud from "../assets/cloud.png";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import { useEffect, useState } from "react";


const Mainpage = () => {
  const [theme, setTheme] = useState(null);
  const [sun, setSun] = useState(false);



    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);

    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      setSun(!sun)
    };



  return (
    <div className=" Main_body">


      <div className="flex select-none space-x-[200px] sm:hidden ">
        <img src={Start} className="w-32 h-32 mt-10 " alt="" srcset="" />
        <img src={Planet1} className="w-24 h-24 " alt="" srcset="" />
        <img src={Start} className="w-3 h-3 mt-10 star " alt="" srcset="" />
        <img src={Planet2} className="w-32 h-32 " alt="" srcset="" />
        <img src={Start} className="w-10 h-10 mt-10 star " alt="" srcset="" />
      </div>

      <div className="flex select-none sm:hidden">
        <img src={Cloud} className="w-32 h-32 grow" alt="" />
        <img src={Start} className="w-4 h-4 mt-10 star" alt="" srcset="" />
      </div>

<div className="select-none Main_Planet">
  <img src={!sun?Sun:Moon} onClick={handleThemeSwitch}  className= ' sm:w-[150px] sm:left-[40%] sm:top-[90px] hover:opacity-100  noSelect  z-10  opacity-90 sun absolute left-[55%] top-[250px] cursor-pointer '   />


</div>


      <div className="absolute select-none left-[80%] top-[20%]  lg:hidden  ">
        <img src={Planet3} className="w-20 h-20" alt="" />
      </div>


      <div className="flex select-none  mt-[-80px]  md:hidden ">
        <img src={Glow} className="w-64 h-40" alt="" />
      </div>


     <div className="  absolute top-[600px] flex select-none  ml-[500px] space-x-14 sm:top-[400px] sm:ml-[200px]">
        <img src={Astroid1} className="w-12 h-12 astroid" alt="" srcset="" />
        <img src={Start} className="w-4 h-4 mt-10 star sm:hidden" alt="" srcset="" />
        <img src={Astroid2} className="w-8 h-8 astroid" alt="" srcset="" />
      </div>  
    

    <div className="">
      <img src={PurplePlanet}  className=' w-[40vw] sm:w-[556px] sm:left-[-90px] sm:top-[400px] absolute top-[500px] ' alt="" />
    </div>

    <div className="">
      <img src={Astro} className=' astro w-[350px] sm:w-[150px] absolute  top-[400px] left-[80%] sm:left-[50%] ' alt="" />
    </div>
        
        <div className=" mt-[-80px]  absolute top-[650px] left-[900px]  md:hidden ">
          <img src={Planet5} className="w-64 " alt="" />
        </div>
 <div className="relative z-50 w-full ">

 <div className="absolute top-0 left-40 Stars ">
        
        <span className="starsfalling"></span>
        <span className="starsfalling"></span>
        <span className="starsfalling"></span>
       
        </div>

 </div>
   

 <div className=" sm:top-[250px]  absolute top-[200px] left-[40px] dark:text-white text-orange heroText text-[10vw]  sm:text-[50px]">
  <h1>Hey There !!</h1>
 </div>

    </div>
  );
};

export default Mainpage;
