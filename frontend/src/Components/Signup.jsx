import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Sign() {
  return (
    <div>
      <h1 className="bg-dark text-xl text-white">Sign Up Page</h1>

      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 relative">
          <div className='glass px-6 py-8 rounded shadow-md text-dark w-full'>
            <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
            <input
              type="text"
              className="glass block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="glass block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="glass block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="glass block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="glass bg-lime-100 block border border-grey-light w-full p-3 rounded mb-4"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                <p class="underline">Terms of Service</p>
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                <p class="underline">Privacy Policy</p>
              </a>
            </div>
          </div>
          <div className="text-white mt-6">
            <p>Already have an account?</p>
            <a
              className="no-underline border-b border-blue text-white"
              href="../login/"
            >
              <p class="text-center underline">Log in
            </p></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
