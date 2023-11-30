import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[100vh] px-3 sm:px-10 flex items-center">
      <div className="w-1/2 sm:w-1/3 lg:1/2 px-6 bg-gray-500 bg-opacity-20 backdrop-blur-sm text-white py-4 rounded-lg">
        <div className="w-full flex justify-center text-[#b4d429] text-xl mb:2 md:mb-5">
          Sign In
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-medium text-[#b4d429]"
          >
            Full name
          </label>
          <input
            type="name"
            id="email1"
            className="border border-gray-300 focus:ring bg-[#153635]  text-white text-xs rounded-lg  block w-full p-1.5 md:p-2.5"
            placeholder="Sarah Willis"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-xs font-medium text-[#b4d429]"
          >
            Your Email
          </label>
          <input
            type="email"
            id="password1"
            className="bg-[#153635] border text-white text-xs rounded-lg focus:ring block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="sarahwillis@hotmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-medium text-[#b4d429]"
          >
            Your password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="email"
              className="bg-[#153635] border border-gray-300 text-white text-xs rounded-lg focus:ring block w-full p-1.5 md:p-2.5"
              placeholder="XXXXXXX"
              required
            />
          <button
  type="button"
  onClick={togglePasswordVisibility}
  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
>
  {showPassword ? (
    <FaEyeSlash className="h-5 w-5 text-[#b4d429]" />
  ) : (
    <FaEye className="h-5 w-5 text-[#b4d429]" />
  )}
</button>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-xs font-medium text-[#b4d429]"
          >
            Confirm your password
          </label>
          <div className="relative">
          <input
            type="password"
            onClick={togglePasswordVisibility}
            id="password"
            className="bg-[#153635] border border-gray-300 text-white text-xs rounded-lg focus:ring block w-full p-1.5 md:p-2.5"
            placeholder="XXXXXXX"
            required
          />
            <button
  type="button"
  onClick={togglePasswordVisibility}
  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
>
  {showPassword ? (
    <FaEyeSlash className="h-5 w-5 text-[#b4d429]" />
  ) : (
    <FaEye className="h-5 w-5 text-[#b4d429]" />
  )}
</button>
</div>

        </div>
        <div className="flex flex-row justify-between">
          <div className="text-[#b4d429] text-sm md:text-md">
            <a href="">Forgot Password?</a>
          </div>
          <div className="text-[#b4d429] text-sm md:text-md">
            <a href="../login">Login here</a>
          </div>
        </div>
        <a href="#">
          {" "}
          <div className="fancy w-1/2 sm:w-2/3 mt-2 md:mt-4 w-60 mx-auto flex items-center justify-center text-xl md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429] hover:bg-[#71801a] border border-[#b4d429] hover:scale-110 group-hover:animate-shine focus:ring">
            Become a member
          </div>
        </a>
      </div>
    </div>
  );
}

export default Login;
