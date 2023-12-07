import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import screen from "./img/screen.jpeg";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[100%] h-[100vh]  flex items-center justify-center overflow-hidden">
      <div className="w-[80%] h-[80%] flex flex-row items-center  rounded-3xl">
        <img
          src={screen}
          alt="screen"
          className="w-2/3 hidden lg:flex h-full object-cover rounded-l-3xl xs:rounded-l-3xl"
        />
      <div className="w-1/3 xl:h-full flex-auto px-6 lglass text-white py-4 rounded-r-3xl rounded-l-3xl lg:rounded-l-none sm:h-auto md:h-full  ">
        <div className="w-full flex justify-center text-[#b4d429] text-3xl font-bold ">
          Log in
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-medium text-white "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="lglass border border-gray-300 text-white text-xs rounded-lg focus:ring ring-green-100 block w-full p-1.5 md:p-2.5"
            placeholder="sarahwillis@hotmail.com"
            required
          />
        </div>
        <div className="mb-6">
      <label
        htmlFor="password"
        className="block mb-2 text-xs font-medium text-white"
      >
        Your Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="lglass border border-gray-300 text-white text-xs rounded-lg focus:ring ring-green-100 block w-full p-1.5 md:p-2.5 mb-2"
          placeholder="XXXXXXX"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <FaEyeSlash className="h-5 w-5 text-[#b4d429]" />
          ) : (
            <FaEye className="h-5 w-5 text-[#b4d429]" />
          )}
        </button>
        </div>
        <div className="flex flex-row justify-between">
  <div className="text-[#b4d429] text-sm hover:scale-105 hover:text-white mb-10">
    <a href="">Forgot Password?</a>
  </div>
  <div className="text-white text-sm md:text-md mt-10">
    Don't have an account ?{" "}
    <a className="text-[#b4d429] underline hover:scale-105 hover:text-white" href="../signup">
      Signup here
    </a>
  </div>
</div>

<a href="#">
            {" "}
            <div className="fancy w-1/2 sm:w-full mt-2 md:mt-4 w-60 mx-auto flex items-center justify-center text-xl md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429] border border-[#b4d429] hover:scale-105 group-hover:animate-shine focus:ring">
             Login
            </div>
          </a>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Login;
