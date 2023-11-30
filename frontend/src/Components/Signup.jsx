import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Login() {
  useEffect(() => {
    const para = document.createElement("div");
    para.className =
      "flex flex-wrap gap-0.5 h-2/3 w-2/3 items-center justify-center relative";
    let el =
      '<div class="transition-colors duration-[1.5s] hover:duration-[0s] border-[#b4d429] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#b4d429]"></div>';
    for (var k = 1; k <= 1000; k++) {
      el +=
        '<div class="transition-colors duration-[1.5s] hover:duration-[0s] border-[#b4d429] h-[calc(5vw-2px)] w-[calc(5vw-2px)] md:h-[calc(4vw-2px)] md:w-[calc(4vw-2px)] lg:h-[calc(3vw-4px)] lg:w-[calc(3vw-4px)] bg-gray-900 hover:bg-[#b4d429]"></div>';
    }

    para.innerHTML = el;
    document.getElementById("myDIV").appendChild(para);
  }, []);

  return (

      <div className="before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute ">
        <div className="w-1/2" id="myDIV">
          <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-left absolute">
            <div className="w-1/2 sm:w-1/3 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-10 py-4 rounded-lg">
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
                  type="email"
                  id="email"
                  className="bg-[#153635] border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  type="password"
                  id="password"
                  className="bg-[#153635] border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <input
                  type="email"
                  id="email"
                  className="bg-[#153635] border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="XXXXXXX"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xs font-medium text-[#b4d429]"
                >
                  Confirm your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-[#153635] border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="XXXXXXX"
                  required
                />
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-[#b4d429] text-sm md:text-md">
                  <a href="">Forgot Password?</a>
                </div>
                <div className="text-[#b4d429] text-sm md:text-md">
                  <a href="../login">Login here</a>
                </div>
              </div>
              <div className="w-1/2 sm:w-2/3 mt-2 md:mt-4 w-60 mx-auto flex items-center justify-center text-sm md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429]">
                <a href="#">Become a member</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Login;
