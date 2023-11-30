import React from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

function Navleft({ isOpen, toggleNavLeft }) {
  return (
    <section
      className={`w-[65vw] md:w-[50vw] glass lg:bg-transparent border-0 h-screen lg:max-w-[20vw] absolute left-0 top-0 z-10 overflow-hidden lg:mr-5 transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } lg:translate-x-0`}
    >
      <aside className="h-screen mt-10 flex flex-col items-start items-center justify-start">
        <div className="h-[50px] text-white">Logo</div>
        <MdClose
          className="flex lg:hidden text-white absolute top-10 mt-3 right-4 cursor-pointer"
          onClick={toggleNavLeft}
        />
        <div className="mt-5 glass rounded-3xl w-48 h-[18%] mb-10"></div>
        <nav className="h-[50%] flex flex-col">
          <ul className="list-none h-[60%] p-0 text-white flex flex-col items-start justify-evenly">
          <NavLink to="/" className={({ isActive }) => (isActive ? "bg-greeny rounded-lg" : "")}>
          <li className="px-20 py-2">
            Home
            </li></NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "bg-greeny rounded-lg" : "")}>
            <li className="px-20  py-2">
            Movies
            </li></NavLink>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? "bg-greeny rounded-lg" : "")}>
            <li className="px-20 py-2">
            Favorites
            </li></NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "bg-greeny rounded-lg" : "")}>
            <li className="px-20 py-2">
            Profile
            </li></NavLink>
          </ul>
        </nav>
      </aside>
      <div className="text-white absolute bottom-5 left-5">Logout</div>
    </section>
  );
}

export default Navleft;