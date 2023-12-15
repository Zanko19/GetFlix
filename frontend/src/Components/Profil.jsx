import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";
import NavTop from "./Navtop";

function Profile() {
  const [isOpen, setClose] = useState(false);
  const toggleNavLeft = () => {
    setClose(!isOpen);
  };
  return (
    <div className="containermain w-screen flex flex-col mt-5 overflow-hidden">
      <div className="flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around">
        <FaBars
          className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${
            isOpen ? "invisible opacity-0" : ""
          }`}
          onClick={toggleNavLeft}
        />
        <input
          type="text"
          className="glass ml-5 sm:w-screen sm:mx-5 h-[40px] rounded-xl pr-10 pl-4 flex items-center lg:hidden"
          placeholder="Search"
        />
      </div>
      <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
      <NavTop />
      <section
        className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:bg-white/10 h-[85vh] text-white text-3xl flex items-center justify-center ${
          isOpen ? "bg-white/0.5" : ""
        }`}
      ></section>
    </div>
  );
}


export default Profile

