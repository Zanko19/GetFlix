import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";
import NavTop from "./Navtop";

function Profil() {
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
          className="ml-5 sm:w-screen sm:mx-5 h-[40px] rounded-xl pr-10 pl-4 flex items-center lg:hidden"
          placeholder="Search"
        />
      </div>
      <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
      <NavTop />
      <section
        className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] h-[85vh] ${
          isOpen ? "bg-white/50" : ""
        }`}
      >
        Profil
      </section>

      <div className="glass h-screen flex flex-col items-center justify-center">
        <h1 className="text-[#b4d429] text-5xl">Who's watching?</h1>

        <div className="flex flex-row flex-wrap gap-5 mt-8">
          <a href="#" className="flex flex-col items-center group gap-2">
            <img
              className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 hover:text-gray-400 hover:scale-105"
              src="https://picsum.photos/seed/a/150/150"
              alt="Julia"
            />
            <p className="text-gray-500 group-hover:text-[#b4d429]"> Julia </p>
          </a>
          <a href="#" className="flex flex-col items-center group gap-2">
            <img
              className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 hover:scale-105"
              src="https://picsum.photos/seed/b/150/150"
              alt="Clément"
            />
            <p className="text-gray-500 group-hover:text-[#b4d429]"> Clément </p>
          </a>

          <a href="#" className="flex flex-col items-center group gap-2">
            <img
              className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 hover:scale-105"
              src="https://picsum.photos/seed/c/150/150"
              alt="Oni"
            />
            <p className="text-gray-500 group-hover:text-[#b4d429]"> Oni </p>
          </a>

          <a href="#" className="flex flex-col items-center group gap-2">
            <img
              className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-[#b4d429] hover:scale-105"
              src="https://picsum.photos/seed/d/150/150"
              alt="Guillaume"
            />
            <p className="text-gray-500 group-hover:text-[#b4d429]"> Guillaume </p>
          </a>

          <a href="#" className="flex flex-col items-center group gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[150px] w-[150px] group-hover:bg-[#b4d429] border-2 border-transparent hover:scale-105"
              viewBox="0 0 20 20"
              fill="#6b7280"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-500 group-hover:text-gray-300">
              {" "}
              Add Profile{" "}
            </p>
          </a>
        </div>

        <button className="hover:scale-105 group-hover:animate-shine fancy border-2 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 ">
          Manage Profiles
        </button>
      </div>
    </div>
  );
}

export default Profil;
