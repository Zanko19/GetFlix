import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { BsBookmarkDashFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import cinemania from "../SVG/cinemania.svg";
import catImage from "../img/cat.jpg";
import horrorImage from "../img/horror.jpg";
import sfImage from "../img/sf.jpg";
import { fetchUserData } from "./api";
function Navleft({ isOpen, toggleNavLeft, username, onLogout }) {
  const handleLogout = () => {
    try {
      // Check if localStorage is available
      if (typeof window !== "undefined" && window.localStorage) {
        // Clear user data from local storage
        window.localStorage.removeItem("userData");
      }

 
   

      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  const [userData, setUserData] = useState({
    email: "",
    icon: "",
  });

  useEffect(() => {
    const fetchUserDataFromAPI = async () => {
      try {
        const response = await fetchUserData(username);
        if (response.ok) {
          const userData = await response.json();
        

          const { email, icon } = userData;
          setUserData({
            email: email || "",
            icon: icon || "1", 
          });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error during user data fetch:", error.message);
      }
    };

    fetchUserDataFromAPI();
  }, [username]);

  
  const iconImageMap = {
    "1": catImage,
    "2": horrorImage,
    "3": sfImage,
  };


  return (
    <section
      className={`w-[100vw] h-screen overflow-hidden mglass md:w-[100vw] z-0 lg:bg-transparent border-0 h-screen lg:max-w-[20vw] absolute left-0 top-0 z-[70] overflow-hidden lg:mr-5 transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } lg:translate-x-0`}
    >
      <aside className="h-screen flex flex-col lg:items-start items-center lg:ml-10 justify-start">
        <div className="lg:h-[10vh] z-100 text-xl text-greeny flex flex-row self-start lg:items-center">
        <img
            className=" w-[160px] lg:absolute lg:left-5 lg:mt-2"
            src={cinemania}
            alt=""
          />
        </div>
        <MdClose
          className="flex lg:hidden text-white absolute top-10 mt-3 right-4 cursor-pointer"
          onClick={toggleNavLeft}
        />
        {/* //TU MODIFIE LA */}
        {username ? ( // If user is logged in, display user info and logout
          <>
            <div className="mt-[5vh] glass rounded-3xl w-48 h-[18%] mb-10 flex flex-col">
              <div className="flex flex-row items-center ml-2 mt-8">
                <img
                  src={iconImageMap[userData.icon] || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                  alt=""
                  className="rounded-full h-[50px] w-[50px]"
                />
                <h3 className="ml-3 text-xl text-white">{username || "Guest"}</h3>
              </div>
              <h3 className="text-white/80 text-center mt-1 text-sm">
                {userData.email}
              </h3>
            </div>
          </>
        ) : ( 
          <div className="mt-[5vh] glass rounded-3xl w-48 h-[20%] lg:h-[18%] mb-10 flex flex-col ">
            <div className="flex flex-row items-center ml-2 mt-8">
              <img
                src={iconImageMap[userData.icon] || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt=""
                className="rounded-full h-[50px] w-[50px]"
              />
              <h3 className="ml-3 text-xl text-white">{username || "Guest"}</h3>
            </div>
            <h3 className="text-white/80 text-center mt-1 text-sm">
              {userData.email}
            </h3>
            <NavLink to="/login" className="ml-3 w-[60%] text-center ml-10  mt-10 rounded-3xl bg-greeny text-black cursor-pointer">
              Login
            </NavLink>
          </div>
        )}
        <nav className="h-[50%] flex flex-col">
          <ul className="list-none h-[35%] p-0 text-white flex flex-col items-center justify-between text-lg mt-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-greeny rounded-xl text-black" : ""
              }
            >
              <li className="w-48 h-10 flex pl-7">
                <div className="flex flex-row items-center">
                  <RiHome6Fill className="mr-3" /> Home
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive ? "bg-greeny rounded-xl text-black" : ""
              }
            >
              <li className="w-48 h-10 flex pl-7">
                <div className="flex flex-row items-center">
                  {" "}
                  <FaVideo className="mr-3" /> Movies
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "bg-greeny rounded-xl text-black" : ""
              }
            >
              <li className="w-48 h-10 flex pl-7">
                <div className="flex flex-row items-center">
                  <FaUser className="mr-3" /> Profile
                </div>
              </li>
            </NavLink>
          </ul>
        </nav>
      </aside>
      <div className="text-white absolute bottom-5 left-0 lg:ml-10 text-lg">
      <div
          className="ml-7 flex flex-row items-center cursor-pointer"
          onClick={handleLogout}
        >
          {" "}
          <BsArrowRightSquareFill className="mr-3 text-greeny rounded-md" />{" "}
          Logout
        </div>
      </div>
    </section>
  );
}

export default Navleft;
