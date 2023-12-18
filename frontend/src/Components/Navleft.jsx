import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { BsBookmarkDashFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import cinemania from "../SVG/cinemania.svg";

function Navleft({ isOpen, toggleNavLeft, loggedInUsername }) {
  const [username, setUsername] = useState(loggedInUsername);
  const history = useNavigate();

  useEffect(() => {
    setUsername(loggedInUsername);
   
  }, [loggedInUsername]);
  console.log(loggedInUsername)
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear the user session and redirect to the login page
    // ...

    // Redirect to the login page
    history.push("/login");
  };

  useEffect(() => {
    const handleScrolling = () => {
      const body = document.body;
      const screenWidth = window.innerWidth;

      if (isOpen && screenWidth <= 768) {
        body.classList.add("overflow-hidden");
      } else {
        // Enable scrolling
        body.classList.remove("overflow-hidden");
      }
    };

    handleScrolling();

    window.addEventListener("resize", handleScrolling);

    return () => {
      window.removeEventListener("resize", handleScrolling);
    };
  }, [isOpen]);

  return (
    <section
      className={`w-[100vw] h-[110vh] overflow-hidden mglass md:w-[100vw]  lg:bg-transparent border-0 lg:h-screen lg:max-w-[20vw] absolute left-0 top-0 z-[70] overflow-hidden lg:mr-5 transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } lg:translate-x-0`}
    >
      <aside className="h-screen flex flex-col lg:items-start items-center lg:ml-10 justify-start">
        <div className="lg:h-[10vh] z-100 text-xl text-greeny flex flex-row self-start lg:items-center">
          <img className=" w-[160px] lg:absolute lg:left-5 lg:mt-2" src={cinemania} alt="" />
        </div>
        <MdClose
          className="flex lg:hidden text-white absolute top-10 mt-3 right-4 cursor-pointer"
          onClick={toggleNavLeft}
        />
        <div className="mt-[5vh] glass rounded-3xl w-48 h-[18%] mb-10 text-white text-3xl">{username}</div>
        <nav className="h-[50%] flex flex-col">
          <ul className="list-none h-[35%] p-0 text-white flex flex-col items-center justify-between text-lg mt-10">
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
              <li className="w-48 h-10 flex pl-7">
                <div className="flex flex-row items-center">
                  <RiHome6Fill className="mr-3" /> Home
                </div>
              </li>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
              <li className="w-48 h-10 flex pl-7">
                <div className="flex flex-row items-center">
                  <FaVideo className="mr-3" /> Movies
                </div>
              </li>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "bg-greeny rounded-xl text-black" : "")}>
              <li className="w-48 h-10 flex pl-7">
                <div className="flex flex-row items-center">
                  <FaUser className="mr-3" /> Profile
                </div>
              </li>
            </NavLink>
          </ul>
        </nav>
      </aside>
      <div className="text-white absolute bottom-28 lg:bottom-10 left-0 lg:ml-10 text-lg">
        <div className="ml-7 flex flex-row items-center" onClick={handleLogout}>
          <BsArrowRightSquareFill className="mr-3 text-greeny rounded-md" /> Logout
        </div>
      </div>
    </section>
  );
}

export default Navleft;
