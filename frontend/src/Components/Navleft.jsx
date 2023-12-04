import React from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { BsBookmarkDashFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";function Navleft({ isOpen, toggleNavLeft }) {
  return (
    <section
      className={`w-[65vw] md:w-[50vw] z-0 glass lg:bg-transparent border-0 h-screen lg:max-w-[20vw] absolute left-0 top-0 z-10 overflow-hidden lg:mr-5 transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } lg:translate-x-0`}
    >
      <aside className="h-screen mt-10 flex flex-col lg:items-start items-center lg:ml-10 justify-start">
        <div className="h-[50px] text-white">Logo</div>
        <MdClose
          className="flex lg:hidden text-white absolute top-10 mt-3 right-4 cursor-pointer"
          onClick={toggleNavLeft}
        />
        <div className="mt-5 glass rounded-3xl w-48 h-[18%] mb-10"></div>
        <nav className="h-[50%] flex flex-col">
          <ul className="list-none h-[60%] p-0 text-white flex flex-col items-center justify-evenly text-lg">
          <NavLink to="/" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
          <li className="w-48 h-10 flex pl-7">
            <div className="flex flex-row items-center">
          <RiHome6Fill className="mr-3" /> Home</div>
            </li></NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
            <li className="w-48 h-10 flex pl-7">
           <div className="flex flex-row items-center"> <FaVideo className="mr-3"/> Movies</div>
            </li></NavLink>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
            <li className="w-48 h-10 flex pl-7">
            <div className="flex flex-row items-center"> <BsBookmarkDashFill className="mr-3"/> Favorites</div>
            </li></NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
            <li className="w-48 h-10 flex pl-7">
            <div className="flex flex-row items-center"> <FaUser className="mr-3"/> Profile</div>
            </li></NavLink>
          </ul>
        </nav>
      </aside>
      <div className="text-white absolute bottom-5 left-0 lg:ml-10 text-lg"><div className="ml-7 flex flex-row items-center"> <BsArrowRightSquareFill className="mr-3 text-greeny rounded-md"/> Logout</div></div>
    </section>
  );
}

export default Navleft;