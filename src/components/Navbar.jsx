import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black ">
      <div className="">
        <ul className="flex justify-end mr-12 space-x-8 text-orange dark:text-white">
          <a href="#section-1"><li className="mt-8 cursor-pointer hover:scale-105">Home</li></a>
          <li className="mt-8 cursor-pointer hover:scale-105">Skill</li>
          <li className="mt-8 cursor-pointer hover:scale-105">Project</li>
          <li className="mt-8 cursor-pointer hover:scale-105">Find me</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
