import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import screen from "../img/password1.jpg";
import { Link } from "react-router-dom";

function Forgot() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrorClass, setPasswordErrorClass] = useState("");
  const [confirmPasswordErrorClass, setConfirmPasswordErrorClass] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "password") {
      const passwordErrorClass = isValidPassword(value) ? "border-green-500" : "border-red-500";
      setPasswordErrorClass(passwordErrorClass);
    } else if (id === "confirmPassword") {
      const confirmPasswordErrorClass =
        value === getPasswordValue() ? "border-green-500" : "border-red-500";
      setConfirmPasswordErrorClass(confirmPasswordErrorClass);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPassword(getPasswordValue())) {
      return;
    }

    // Perform your password reset logic here

    // Display success message
    setSuccessMessage("Password reset successful!");
  };

  const getPasswordValue = () => {
    return document.getElementById("password").value;
  };

  const isValidPassword = (password) => {
    return password.length >= 7;
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="w-[80%] h-[80%] flex flex-row items-center justify-center rounded-3xl">
        <img
          src={screen}
          alt="screen"
          className="w-2/3 hidden lg:flex h-full object-cover rounded-l-3xl xs:rounded-l-3xl"
        />
        <div className="lg:w-1/3 w-full h-full flex flex-col justify-center px-6 lglass text-white py-4 rounded-r-3xl rounded-l-3xl lg:rounded-l-none md:w-[50%] md:h-full">
          <div className="w-full flex justify-center text-center py-4 text-white text-3xl font-bold mb-10">
            Forgot Password?
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-xs font-medium text-white"
              >
                Your New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`lglass border border-gray-300 text-white text-xs rounded-lg focus:ring ring-green-100 block w-full p-1.5 md:p-2.5 ${passwordErrorClass}`}
                  placeholder="XXXXXXX"
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-[#b4d429]" />
                  ) : (
                    <FaEye className="h-5 w-5 text-[#b4d429]" />
                  )}
                </button>
              </div>
              <div className="mt-2 text-red-500 text-xs">
                {passwordErrorClass.includes("red") && "Password must have at least 7 characters"}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-xs font-medium text-white"
              >
                Confirm Your New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className={`lglass border border-gray-300 text-white text-xs rounded-lg focus:ring ring-green-100 block w-full p-1.5 md:p-2.5 ${confirmPasswordErrorClass}`}
                  placeholder="XXXXXXX"
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-[#b4d429]" />
                  ) : (
                    <FaEye className="h-5 w-5 text-[#b4d429]" />
                  )}
                </button>
              </div>
              <div className="mt-2 text-red-500 text-xs">
                {confirmPasswordErrorClass.includes("red") && "Passwords don't match"}
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="text-[#b4d429] text-sm md:text-md hover:scale-105 hover:text-white">
                <Link to="/signup">Sign up here</Link>
              </div>
              <div className="text-[#b4d429] text-sm md:text-md hover:scale-105 hover:text-white">
                <Link to="/login">Login here</Link>
              </div>
            </div>

            <button
              type="submit"
              className="fancy w-1/2 flex mt-2 md:w-60 md:mb-4 w-40 mx-auto flex items-center justify-center text-lg text-center md:text-xl mt-5 bg-greeny/30 py-2 rounded-md text-white border border-[#b4d429] hover:scale-105 group-hover:animate-shine"
            >
              Reset Password
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Forgot;
