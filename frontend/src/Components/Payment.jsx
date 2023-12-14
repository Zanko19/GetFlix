import React, { useState } from "react";
import movieData from "../boss.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YourSvg from "../Components/img/TICKETS_CINEMA.svg";

import {
  faCreditCard,
  faUser,
  faLock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function Payments() {
  const firstMovie = movieData.movies[0];
  //   const [formData, setFormData] = useState({
  //     cardName: "",
  //     cardNumber: "",
  //     expirationDate: "",
  //     securityCode: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     console.log("Form submitted:", formData);
  //   };
  return (
    <div className=" p-5 min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex">
        <h1 className="text-5xl text-white mb-10 mx-6 mt-5">Checkout</h1>
      </div>
      <div className="flex w-full ">
        <div className="w-3/4 pr-8">
          <form
            //-----------------------------------------------------------------------------------------------------Route !
            action="/route du back"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-3xl items-center justify-center"
          >
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-semibold mb-4 mt-5">
                  Billing Address
                </h3>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                  htmlFor="fname"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-500 mr-2"
                  />
                  <i className="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M. Doe"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label className="block text-gray-700 text-sm font-bold mt-4">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="text-gray-500 mr-2"
                  />
                  <i className="fa fa-credit-card"></i> Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="**** **** **** ****"
                  className="shadow appearance-none border rounded w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                {/* Other billing address fields go here */}
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <h3 className="text-lg font-semibold mb-4 mt-5">Payment</h3>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                  htmlFor="cname"
                >
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="text-gray-500 mr-2"
                  />
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="expirationDate"
                >
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-gray-500 mr-2 mt-5"
                  />
                  <i className="fa fa-calendar-alt"></i> Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="MM / YY"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cvv"
                >
                  <FontAwesomeIcon
                    icon={faLock}
                    className="text-gray-500 mr-2 mt-5"
                  />
                  <i className="fa fa-lock"></i> CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <label className="block mb-4 mt-5">
              <input
                type="checkbox"
                defaultChecked
                className="mr-2"
                name="sameadr"
              />{" "}
              Shipping address same as billing
            </label>

            <button
              type="submit"
              className="transition duration-300 ease-in-out text-black bg-greeny rounded-3xl hover:bg-opacity-80 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue to checkout
            </button>
          </form>
        </div>

        <div className="w-1/4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-3xl items-center justify-center">
            <h4 className="text-lg font-semibold mb-4">
              Select a paiement method{" "}
              <span className="price" style={{ color: "black" }}>
                <i className="fa fa-shopping-cart"></i>{" "}
                <b>/Visa insert logo/</b>
              </span>
            </h4>

            {/* Sample product entries */}
            <p className="transition duration-300 ease-in-out text-black bg-slate-100 rounded-3xl hover:bg-slate-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <a href="#">
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    id="paypal"
                  >
                    <path
                      fill="#32A6CE"
                      fill-rule="evenodd"
                      d="M49.6 27c-1.5 0-2.7.4-3.7.6l-.3 2.3c.5-.2 1.9-.6 3.1-.7 1.2 0 1.9.2 1.7 1.3-3.6 0-6 .7-6.5 3.1-.7 4 3.7 4.1 5.4 2.3l-.2 1.1h3.2l1.4-6.5c.5-2.7-1.9-3.6-4.1-3.5zm.2 6.7c-.2.8-.9 1.1-1.7 1.2-.7 0-1.3-.4-.9-1.2.4-.6 1.3-.6 2-.6h.8c-.1-.1-.2.3-.2.6z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#1A80AD"
                      fill-rule="evenodd"
                      d="M45.6 29.9c.5-.2 1.9-.6 3.1-.7 1.2 0 1.9.2 1.7 1.3-3.6 0-6 .7-6.5 3.1-.7 4 3.7 4.1 5.4 2.3l-.2 1.1h3.2l1.4-6.5c.6-2.7-1.9-3.4-4.1-3.4m.2 6.6c-.2.8-.9 1.1-1.7 1.2-.7 0-1.3-.4-.9-1.2.4-.6 1.3-.6 2-.6h.8c-.1-.1-.2.3-.2.6z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#32A6CE"
                      fill-rule="evenodd"
                      d="m56.4 24-2.6 13H57l2.7-13h-3.3z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#1A80AD"
                      fill-rule="evenodd"
                      d="m58.7 24-4.9 13H57l2.7-13h-3.3z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#32A6CE"
                      fill-rule="evenodd"
                      d="M41.5 24h-5.9L33 37h3.5l.9-4h2.5c2.4 0 4.4-1.4 4.9-3.9.5-2.9-1.6-5.1-3.3-5.1zm-.1 4.5c-.2.9-1.1 1.5-2 1.5h-1.6l.7-3h1.7c.9 0 1.4.6 1.2 1.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#1A80AD"
                      fill-rule="evenodd"
                      d="M41.5 24h-4l-4.6 13h3.5l.9-4h2.5c2.4 0 4.4-1.4 4.9-3.9.6-2.9-1.5-5.1-3.2-5.1zm-.1 4.5c-.2.9-1.1 1.5-2 1.5h-1.6l.7-3h1.7c.9 0 1.4.6 1.2 1.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#21789E"
                      fill-rule="evenodd"
                      d="M18.4 27c-1.5 0-2.7.4-3.6.6l-.3 2.3c.4-.2 1.9-.6 3.1-.7 1.2 0 1.9.2 1.7 1.3-3.5 0-5.9.7-6.4 3.1-.7 4 3.6 4.1 5.3 2.3L18 37h3.2l1.4-6.5c.5-2.7-2-3.6-4.2-3.5zm.3 6.7c-.2.8-.9 1.1-1.7 1.2-.7 0-1.3-.4-.8-1.2.4-.6 1.3-.6 1.9-.6h.8c-.1-.1-.2.3-.2.6z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#1A5B80"
                      fill-rule="evenodd"
                      d="M14.6 29.9c.4-.2 1.9-.6 3.1-.7 1.2 0 1.9.2 1.7 1.3-3.5 0-5.9.7-6.4 3.1-.7 4 3.6 4.1 5.3 2.3L18 37h3.2l1.4-6.5c.6-2.7-1.9-3.4-4.1-3.4m.2 6.6c-.2.8-.9 1.1-1.7 1.2-.7 0-1.3-.4-.8-1.2.4-.6 1.3-.6 1.9-.6h.8c-.1-.1-.2.3-.2.6z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#21789E"
                      fill-rule="evenodd"
                      d="M23.9 27h3.2l.5 5.6 3.2-5.6h3.3l-7.6 14h-3.6l2.3-4.2-1.3-9.8z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#1A5B80"
                      fill-rule="evenodd"
                      d="m27.1 27.2.5 5.5 3.2-5.7h3.3l-7.6 14h-3.6l2.3-4.1"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#21789E"
                      fill-rule="evenodd"
                      d="M10.5 24h-6L1.9 37h3.5l.9-4h2.5c2.4 0 4.4-1.4 4.9-3.9.6-2.9-1.5-5.1-3.2-5.1zm-.1 4.5c-.2.9-1.1 1.5-2 1.5H6.8l.7-3h1.7c.9 0 1.4.6 1.2 1.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#1A5B80"
                      fill-rule="evenodd"
                      d="M10.5 24H7.8L1.9 37h3.5l.9-4h2.5c2.4 0 4.4-1.4 4.9-3.9.6-2.9-1.5-5.1-3.2-5.1zm-.1 4.5c-.2.9-1.1 1.5-2 1.5H6.8l.7-3h1.7c.9 0 1.4.6 1.2 1.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#06435E"
                      fill-rule="evenodd"
                      d="M17.8 30.5c-2.7.2-4.5 1-4.9 3-.7 4 3.6 4.1 5.3 2.3L18 37h3.2l.5-2.4-3.9-4.1zm.9 3.2c-.2.8-.9 1.1-1.7 1.2-.7 0-1.3-.4-.8-1.2.4-.6 1.3-.6 1.9-.6h.8c-.1-.1-.2.3-.2.6zM27.8 32.5l-.2.3 2.1 2 4.4-7.8h-3.3zM5.4 37l.9-4-4.1 4z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#2273AA"
                      fill-rule="evenodd"
                      d="m36.4 37 .9-4.2v.1L33.2 37zM48.9 30.5c-2.7.2-4.5 1-4.9 3-.7 4 3.7 4.1 5.4 2.3l-.3 1.2h3.2l.5-2.4-3.9-4.1zm.9 3.2c-.2.8-.9 1.1-1.7 1.2-.7 0-1.3-.4-.9-1.2.4-.6 1.3-.6 2-.6h.8c-.1-.1-.2.3-.2.6zM56.1 31.1 53.8 37H57l.9-4z"
                      clip-rule="evenodd"
                    ></path>
                    <g fill="#32A6CE">
                      <path d="M60.4 26.1v-1.4h-.5v-.2h1.3v.2h-.5v1.4h-.3zM61.4 26.1v-1.6h.3l.4 1.1c0 .1.1.2.1.2 0-.1 0-.1.1-.3l.4-1.1h.3V26h-.2v-1.4l-.5 1.4H62l-.5-1.4V26h-.1z"></path>
                    </g>
                  </svg>
                }
              </a>
            </p>
            <p className="mt-5 transition duration-300 ease-in-out text-black bg-slate-100 rounded-3xl hover:bg-slate-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <a href="#">
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="visa"
                    width="64"
                    height="64"
                  >
                    <path
                      fill="#191E6E"
                      d="M13.967 13.837c-.766 0-1.186-.105-1.831-.37l-.239-.109-.271 1.575c.466.192 1.306.357 2.175.37 2.041 0 3.375-.947 3.391-2.404.016-.801-.51-1.409-1.621-1.91-.674-.325-1.094-.543-1.094-.873 0-.292.359-.603 1.109-.603a3.602 3.602 0 0 1 1.455.269l.18.08.271-1.522-.047.01a5.053 5.053 0 0 0-1.74-.297c-1.92 0-3.275.954-3.285 2.321-.012 1.005.964 1.571 1.701 1.908.757.345 1.01.562 1.008.872-.005.471-.605.683-1.162.683zm8.461-5.655h-1.5c-.467 0-.816.125-1.021.583l-2.885 6.44h2.041l.408-1.054 2.49.002c.061.246.24 1.052.24 1.052H24l-1.572-7.023zM20.03 12.71l.774-1.963c-.01.02.16-.406.258-.67l.133.606.449 2.027H20.03zM8.444 15.149h1.944l1.215-7.026H9.66v-.002zM4.923 12.971l-.202-.976v.003l-.682-3.226c-.117-.447-.459-.579-.883-.595H.025L0 8.325c.705.165 1.34.404 1.908.697a.392.392 0 0 1 .18.234l1.68 5.939h2.054l3.061-7.013H6.824l-1.901 4.789z"
                    ></path>
                  </svg>
                }
              </a>
            </p>
            <p className="mt-5 transition duration-300 ease-in-out text-black bg-slate-100 rounded-3xl hover:bg-slate-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5">
              <a href="#">
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 192.756 192.756"
                    id="bancontact"
                  >
                    <g fill-rule="evenodd" clip-rule="evenodd">
                      <path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path>
                      <path
                        fill="#fff"
                        stroke="#2d78bb"
                        stroke-miterlimit="2.613"
                        stroke-width="1.889"
                        d="M96.378 45.137h73.411c9.719 0 12.738 7.13 12.738 12.169v78.145c0 4.848-3.02 12.168-12.738 12.168H22.967c-9.625 0-12.739-7.32-12.739-12.168V57.306c0-5.039 3.114-12.169 12.739-12.169h73.411z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M61.843 104.555h26.798l15.004-16.067h26.89l-22.834 25.477H23.25V96.949h45.292l-6.699 7.606z"
                      ></path>
                      <path
                        fill="#f8e14b"
                        d="M130.535 88.488h-26.89l-15.004 16.16H61.654l22.835-25.477h84.546v16.922h-45.293l6.793-7.605z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M158.184 72.897c-1.227.76-2.83 1.141-4.342 1.141-4.34 0-8.209-3.232-8.209-7.7 0-4.469 3.492-7.701 7.926-7.701 1.605 0 3.398.285 4.625 1.046v4.753c-.943-.856-2.359-1.141-3.963-1.141-1.51 0-3.303 1.236-3.303 3.232 0 1.711 1.793 2.757 3.303 2.757 1.697 0 2.736-.095 3.963-1.045v4.658zM169.223 69.284v3.613c-3.869 2.852-8.303.475-8.303-2.852v-6.654h-1.889v-4.374h1.889V55.5l5.283-2.853v6.37h3.02v3.993h-2.736v6.179c-.001 1.141 1.886 1.046 2.736.095zM131.008 63.771l.85-4.088c5.283-1.806 12.832-.761 12.832 3.993v10.077h-4.906l-.189-.476c-2.264 1.426-10.568 2.092-9.436-4.468.66-3.898 5.096-4.848 7.832-4.848 1.416 0 1.982-1.332.189-1.426-1.606-.096-4.813.094-7.172 1.236zM41.933 63.771l.755-4.088c5.284-1.806 12.833-.761 12.833 3.993v10.077H50.52l-.094-.476c-2.17 1.426-10.757 2.092-9.436-4.468.661-3.898 5.001-4.848 7.738-4.848 1.415 0 1.981-1.332.283-1.426-1.605-.096-4.908.094-7.078 1.236zM102.418 66.527c0 4.468-3.682 7.605-8.116 7.605-4.435 0-8.209-3.327-8.209-7.795 0-4.373 3.774-7.796 8.115-7.796 4.528.001 8.21 3.423 8.21 7.986zM129.215 69.284v3.613c-3.963 2.852-8.303.475-8.303-2.852v-6.654h-1.889v-4.374h1.889V55.5l5.377-2.853v6.37h2.926v3.993h-2.83v6.179c0 1.141 1.98 1.046 2.83.095z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M33.158 51.602c4.906 0 8.492 6.56 3.963 10.647 5.662 3.518 3.114 11.312-3.208 11.408H23.344V51.602h9.814zM85.149 72.897c-1.227.76-2.642 1.141-4.247 1.141-4.435 0-8.209-3.232-8.209-7.7 0-4.469 3.492-7.701 7.832-7.701 1.604 0 3.396.285 4.624 1.046v4.753c-1.038-.856-2.265-1.141-3.869-1.141s-3.397 1.236-3.397 3.232c0 1.711 1.887 2.757 3.397 2.757 1.604 0 2.642-.095 3.869-1.045v4.658zM71.656 64.15v9.602h-5.284v-8.271c0-2.947-4.246-2.852-4.246 0v8.271h-5.284V59.017h5.379v1.236c4.434-3.328 9.435-.285 9.435 3.897zM118.27 64.15v9.602h-5.285v-8.271c0-2.947-4.246-2.852-4.246 0v8.271h-5.283V59.017h5.283v1.236c4.529-3.328 9.531-.285 9.531 3.897zM138.18 62.535c1.793.095 1.227 1.426-.189 1.426-2.736 0-7.172.95-7.832 4.848-1.133 6.56 7.172 5.894 9.436 4.468l.189.476h4.906V63.675c0-4.753-7.549-5.799-12.832-3.993l-.85 4.088c2.359-1.141 5.566-1.331 7.172-1.235z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M49.01 62.535c1.698.095 1.132 1.426-.283 1.426-2.737 0-7.077.95-7.738 4.848-1.321 6.56 7.266 5.894 9.436 4.468l.094.476h5.001V63.675c0-4.753-7.548-5.799-12.833-3.993l-.755 4.088c2.171-1.141 5.474-1.331 7.078-1.235zM94.208 58.542c-4.34 0-8.115 3.423-8.115 7.796 0 4.468 3.774 7.795 8.209 7.795 4.434 0 8.116-3.137 8.116-7.605 0-4.564-3.682-7.986-8.21-7.986zM126.385 69.189V63.01h2.83v-3.993h-2.926v-6.37l-5.377 2.853v3.517h-1.889v4.374h1.889v6.654c0 3.327 4.34 5.704 8.303 2.852v-3.613c-.85.951-2.83 1.046-2.83-.095z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M23.344 51.602v22.055h10.568c6.322-.095 8.87-7.89 3.208-11.408 4.529-4.088.943-10.647-3.963-10.647h-9.813zM85.149 68.239c-1.227.95-2.265 1.045-3.869 1.045-1.51 0-3.397-1.045-3.397-2.757 0-1.997 1.792-3.232 3.397-3.232 1.604 0 2.831.285 3.869 1.141v-4.753c-1.227-.761-3.02-1.046-4.624-1.046-4.34 0-7.832 3.232-7.832 7.701 0 4.468 3.774 7.7 8.209 7.7 1.604 0 3.02-.38 4.247-1.141v-4.658zM62.22 60.253v-1.236h-5.379v14.735h5.284v-8.271c0-2.852 4.246-2.947 4.246 0v8.271h5.284V64.15c.001-4.182-5-7.225-9.435-3.897zM108.738 60.253v-1.236h-5.283v14.735h5.283v-8.271c0-2.852 4.246-2.947 4.246 0v8.271h5.285V64.15c.001-4.182-5.001-7.225-9.531-3.897zM158.184 68.239c-1.227.95-2.266 1.045-3.963 1.045-1.51 0-3.303-1.045-3.303-2.757 0-1.997 1.793-3.232 3.303-3.232 1.604 0 3.02.285 3.963 1.141v-4.753c-1.227-.761-3.02-1.046-4.625-1.046-4.434 0-7.926 3.232-7.926 7.701 0 4.468 3.869 7.7 8.209 7.7 1.512 0 3.115-.38 4.342-1.141v-4.658zM166.486 69.189V63.01h2.736v-3.993h-3.02v-6.37L160.92 55.5v3.517h-1.889v4.374h1.889v6.654c0 3.327 4.434 5.704 8.303 2.852v-3.613c-.85.951-2.737 1.046-2.737-.095zM97.322 66.527c0 1.616-1.416 2.947-3.02 2.947s-2.925-1.331-2.925-3.137c0-1.901 1.321-2.947 2.925-2.947s3.02 1.046 3.02 3.137z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M29.383 64.816h2.359c2.925 0 3.208 4.468.094 4.468h-2.453v-4.468zM50.236 67.288v1.807c0 1.996-3.963 2.566-3.963.475 0-1.902 2.831-2.472 3.963-2.282zM139.406 67.288v1.807c0 1.996-3.869 2.566-3.869.475 0-1.902 2.83-2.472 3.869-2.282zM31.743 56.07c2.736 1.236 1.792 4.183.094 4.183h-2.453V56.07c-.001-.095 1.698-.19 2.359 0z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M94.302 63.391c-1.604 0-2.925 1.045-2.925 2.947 0 1.806 1.321 3.137 2.925 3.137s3.02-1.331 3.02-2.947c0-2.092-1.416-3.137-3.02-3.137zM135.537 69.569c0 2.091 3.869 1.521 3.869-.475v-1.807c-1.039-.189-3.869.381-3.869 2.282zM29.383 56.07v4.183h2.453c1.699 0 2.643-2.947-.094-4.183-.66-.19-2.359-.095-2.359 0zM46.273 69.569c0 2.091 3.963 1.521 3.963-.475v-1.807c-1.132-.189-3.963.381-3.963 2.282zM29.383 69.284h2.453c3.114 0 2.831-4.468-.094-4.468h-2.359v4.468z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M88.924 133.834c0-5.133-2.077-8.461-7.267-8.461-4.906 0-7.832 3.709-7.832 7.891 0 4.564 3.492 7.891 8.398 7.891 4.246 0 6.417-1.711 6.417-1.711v-4.373c-1.793.951-3.774 1.521-5.19 1.521-2.831 0-4.34-.762-4.34-2.758h9.814zM33.535 134.596l4.34-6.276v12.453h5.662l.094-21.58h-5.756l-4.34 6.465-4.435-6.465h-5.756l.095 21.58H29.1V128.32l4.435 6.276zM95.057 132.123c.566-1.236 1.792-2.281 3.396-2.281.85 0 1.793.379 2.455.855v-4.658c-.473-.57-1.227-.762-1.982-.762-1.32 0-3.114.762-3.869 1.713v-1.521h-5.095v15.305h5.095v-8.651zM51.652 139.824c1.793.76 3.963 1.045 5.378 1.045 5.473 0 7.077-2.852 7.077-5.229 0-2.758-2.831-4.277-5.378-4.658-.378 0-1.416-.285-1.416-.762 0-.379.284-.855 1.51-.855 1.038 0 2.925.381 3.869.855l-.188-3.992c-1.416-.475-3.397-.855-4.907-.855-3.114 0-5.851 1.902-5.851 4.943 0 2.377 1.699 3.613 4.435 4.184 1.132.096 2.17.57 2.17 1.141 0 .76-.754.951-1.51.951-.66 0-2.358.189-5.189-.951v4.183z"
                      ></path>
                      <path
                        fill="#2d78bb"
                        d="M70.996 136.115v-6.273h2.925v-4.088h-3.114v-6.561l-5.378 2.854v3.707h-1.887v4.373h1.887v6.846c0 3.422 4.435 5.703 8.493 2.852v-3.709c-.851.857-2.926 1.046-2.926-.001zM50.708 140.584v-14.83h-5.662v14.83h5.662zM47.877 125.277c1.699 0 3.114-1.426 3.114-3.137 0-1.615-1.416-2.947-3.114-2.947-1.604 0-2.925 1.332-2.925 2.947.001 1.712 1.321 3.137 2.925 3.137zM140.916 139.824c1.793.76 3.963 1.045 5.379 1.045 5.473 0 7.17-2.852 7.17-5.229 0-2.758-2.83-4.277-5.473-4.658-.377 0-1.416-.285-1.416-.762 0-.379.283-.855 1.605-.855 1.037 0 2.83.381 3.867.855l-.281-3.992c-1.416-.475-3.398-.855-4.908-.855-3.113 0-5.85 1.902-5.85 4.943 0 2.377 1.699 3.613 4.436 4.184 1.131.096 2.17.57 2.17 1.141 0 .76-.756.951-1.51.951-.66 0-2.359.189-5.189-.951v4.183zM124.309 134.5c-1.793 1.33-3.209 1.615-5.568 1.615-3.584 0-6.793-2.947-6.793-5.988 0-3.328 1.793-6.465 6.793-6.465 2.266 0 4.152.381 5.568 1.711v-5.133c-1.793-1.047-4.246-1.332-6.416-1.332-6.512 0-11.512 4.658-11.512 11.029 0 6.273 5.473 11.027 11.889 11.027 2.17 0 4.246-.477 6.039-1.521V134.5zM133.367 129.082c1.793.094 1.227 1.52-.189 1.52-2.83 0-7.359.951-7.926 4.85-1.227 6.654 7.266 6.084 9.529 4.658l.189.379h5.096v-10.268c0-4.848-7.738-5.799-13.211-3.992l-.754 4.088c2.36-1.141 5.663-1.331 7.266-1.235zM159.504 126.895v-7.701h-5.283v21.58h5.283v-8.461c0-2.852 4.34-2.947 4.34 0v8.461h5.379v-9.791c0-4.374-5.096-7.417-9.719-4.088z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M78.921 130.887c.283-1.426 1.416-1.9 2.454-1.9 1.038 0 2.359.475 2.359 1.9h-4.813zM134.594 133.93v1.807c0 2.092-3.963 2.566-3.963.475 0-1.901 2.924-2.378 3.963-2.282z"
                      ></path>
                    </g>
                  </svg>
                }
              </a>
            </p>

            <hr />
            <p className="mt-5">
              Total{" "}
              <span className="price" style={{ color: "black" }}>
                <b>$30</b>
              </span>
            </p>
          </div>
          {/*<div className="flex ">
             Using img tag 
            <img
              src={YourSvg}
              alt="Your SVG Alt Text"
              className="w-90 h-90 "
              style={{ transform: "rotate(-10deg)" }}
            />
            </div>
            */}
        </div>
      </div>
    </div>
  );
}

export default Payments;
