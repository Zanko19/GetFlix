import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import screen from "../img/Sign1.jpg";

function Sign() {
  const navigate = useNavigate();

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullNameErrorClass, setFullNameErrorClass] = useState("");
  const [emailErrorClass, setEmailErrorClass] = useState("");
  const [passwordErrorClass, setPasswordErrorClass] = useState("");
  const [confirmPasswordErrorClass, setConfirmPasswordErrorClass] =
    useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    if (id === "fullName") {
      const fullNameErrorClass = isValidFullName(value)
        ? "border-green-500"
        : "border-red-500";
      setFullNameErrorClass(fullNameErrorClass);
    } else if (id === "email") {
      const emailErrorClass = isValidEmail(value)
        ? "border-green-500"
        : "border-red-500";
      setEmailErrorClass(emailErrorClass);
    } else if (id === "password") {
      // Update confirmation password error when the first password is changed
      const confirmPasswordErrorClass =
        formData.confirmPassword === value
          ? "border-green-500"
          : "border-red-500";
      setConfirmPasswordErrorClass(confirmPasswordErrorClass);

      // Update password error
      const passwordErrorClass = isValidPassword(value)
        ? "border-green-500"
        : "border-red-500";
      setPasswordErrorClass(passwordErrorClass);
    } else if (id === "confirmPassword") {
      // Update confirmation password error
      const confirmPasswordErrorClass =
        value === formData.password ? "border-green-500" : "border-red-500";
      setConfirmPasswordErrorClass(confirmPasswordErrorClass);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !isValidFullName(formData.fullName) ||
      !isValidEmail(formData.email) ||
      !isValidPassword(formData.password) ||
      formData.password !== formData.confirmPassword
    ) {
      return;
    }

    try {
      // Send the data with the correct keys expected by your backend model
      const response = await fetch("http://157.230.127.29/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      // Handle the response, for example, redirect the user to the login page
      if (response.ok) {
        navigate("/login");
      } else {
        // Handle errors, for example, display an error message to the user
        console.error("Error during signup:", response.statusText);
      }
    } catch (error) {
      // Handle errors, for example, display an error message to the user
      console.error("Error during signup:", error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 7;
  };

  const isValidFullName = (fullName) => {
    const words = fullName.split(" ");
    return words.length === 2;
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="w-[80%] h-[80%] flex flex-row items-center justify-center rounded-3xl">
        <img
          src={screen}
          alt="screen"
          className="w-2/3 hidden lg:flex h-full object-cover rounded-l-3xl "
        />
        <div className="lg:w-1/3 h-full flex flex-col justify-center w-full px-6 lglass text-white py-4 rounded-r-3xl rounded-l-3xl lg:rounded-l-none md:w-[50%] md:h-full ">
          <div className="w-full flex justify-center text-white mb-5 text-3xl font-bold ">
            Sign In
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block mb-2 text-xs font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`lglass peer-invalid:visible text-white text-xs rounded-lg block w-full p-1.5 md:p-2.5 ${fullNameErrorClass}`}
                placeholder="Sarah Willis"
                onChange={handleChange}
                required
              />
              <div className="mt-2 text-red-500 text-xs">
                {fullNameErrorClass.includes("red") &&
                  "Full name must contain two words"}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-xs font-medium text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className={`lglass border border-gray-300 text-white text-xs rounded-lg focus:ring ring-green-100 block w-full p-1.5 md:p-2.5 ${emailErrorClass}`}
                placeholder="sarahwillis@hotmail.com"
                onChange={handleChange}
                required
              />
              <div className="mt-2 text-red-500 text-xs">
                {emailErrorClass.includes("red") && "Invalid email address"}
              </div>
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
                {passwordErrorClass.includes("red") &&
                  "Password must have at least 7 characters"}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-xs font-medium text-white"
              >
                Confirm Your Password
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
                {confirmPasswordErrorClass.includes("red") &&
                  "Passwords don't match"}
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="text-[#b4d429] text-sm md:text-md hover:scale-105 hover:text-white">
                <Link to="/forgot">Forgot Password</Link>
              </div>
              <div className="text-[#b4d429] text-sm md:text-md hover:scale-105 hover:text-white">
                <Link to="/login">Login here</Link>
              </div>
            </div>
            <button
              type="submit"
              className="fancy w-1/2 flex mt-2 md:w-60 md:mb-4 w-40 mx-auto flex items-center justify-center text-xl md:text-xl mt-5 bg-greeny/30 py-2 rounded-md text-white border border-[#b4d429] hover:scale-105 group-hover:animate-shine"
            >
              Become a member
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
