import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Login() {
  return (
    <div className="h-[100vh] px-3 sm:px-1 flex items-center justify-center absolute">
      <div className="glass w-1/2 sm:w-2/3 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg">
        <div className="w-full flex justify-center text-[#b4d429] text-xl mb:2 md:mb-5">
          Log in
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-xs font-medium text-[#b4d429]"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#153635] border text-gray-900 text-xs rounded-lg focus:ring block w-full p-1.5 md:p-2.5"
            placeholder="sarahwillis@hotmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-xs font-medium text-[#b4d429]"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#153635] border text-gray-900 text-xs rounded-lg focus:ring block w-full p-1.5 md:p-2.5 "
            placeholder="XXXXXXX"
            required
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-[#b4d429] text-sm md:text-md justify-between">
            <a href="">Forgot Password?</a>
          </div>
          <div className="text-[#b4d429] text-sm md:text-md">
            Don't have an account ?{" "}
            <a className="underline" href="../signup">
              Signup here
            </a>
          </div>
        </div>
        <div className="mt-2 md:mt-4 sm:w-2/3 w-60 mx-auto flex items-center justify-center text-sm md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429]">
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
