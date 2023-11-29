import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Sign() {
  return (
    <div>
      <h1 className="bg-dark text-xl text-white">Sign Up Page</h1>

      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container glass max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          
          <div classname='bg-lime-200 px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
                  class=" glass block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="glass block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class=" glass block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="glass block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="glass bg-lime-100 block border border-grey-light w-full p-3 rounded mb-4 w-full text-darkq"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                 Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div class="text-white mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-white"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Sign;
