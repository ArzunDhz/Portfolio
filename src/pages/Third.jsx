import React, { useEffect, useRef, useState } from "react";
import { motion, inView, useScroll } from "framer-motion";
import Project1 from "../assets/yt.png";
import Project2 from "../assets/todo.png";
import Project3 from "../assets/img.png";
import Github from "../assets/github.png";
import Link from "../assets/link.png";
import Project from "../components/Project";
import Aos from "aos";
import "aos/dist/aos.css";
const Third = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section id="section-1">
        <div className="flex flex-col items-center justify-center min-h-screen bg-black ">
         <Project Title='Youtube' Projects={Project1} Github ={Github} Link={Link} url1='https://github.com/ArzunDhz/abcd.git' url2='https://arzun-youtube.netlify.app/'  />
         <Project Title='UserAuth' Projects={Project2} Github ={Github} Link={Link} url1='https://github.com/ArzunDhz/BackSever.git' url2='https://arzun-node-backend.vercel.app/?fbclid=IwAR1jhRp248O33d9oYLwtddIiDBWOMJ-X0NrMONkKs7T6fo2v8dN8hXN6NV0'  />
         <Project Title='Image-Generation' Projects={Project3} Github ={Github} Link={Link} url1='https://github.com/ArzunDhz/ImageBack.git' url2='https://image-gene.netlify.app/?fbclid=IwAR00Y_rzz3ChNRTcPtpyHGxsJoPDaExgle1F9SggyLS9MeWEM6zzRcGkR_w'  />

        </div>
      </section>
    </>
  );
};

export default Third;
