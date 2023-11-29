import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Sign() {
  return (
    <div>
      <h1 className="bg-dark text-xl text-white">Sign Up Page</h1>

      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 relative">
          <div className='glass px-6 py-8 rounded shadow-md text-black w-full' style={{ backdropFilter: 'blur(5px)' }}>
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
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
              className="glass bg-lime-100 block border border-grey-light w-full p-3 rounded mb-4 w-full text-darkq"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-white mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-white"
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
