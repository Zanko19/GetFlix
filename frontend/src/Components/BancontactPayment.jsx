import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import YourSvg from "../Components/img/TICKETS_CINEMA.svg";
import PaypalLogo from "../img/Paypallogo.jsx";
import BancontactLogo from "../img/BancontactLogo.jsx";

import {
  faCreditCard,
  faUser,
  faLock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function BancontactPayment() {
  {
    /* -------------------------------------------------------------------------BACKEND CONNECTION */
  }
  //   const [totalPrice, setTotalPrice] = useState(null);

  //   useEffect(() => {
  //     // Make an API call to fetch the price from the server
  //     fetch("/user_id/selected_movies/price") // Replace "/api/price" with your actual API endpoint
  //       .then((response) => response.json())
  //       .then((data) => setTotalPrice(data.price))
  //       .catch((error) => console.error("Error fetching price:", error));
  //   }, []); // The empty dependency array ensures the effect runs only once when the component mounts
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className=" p-5 min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex">
        <h1 className="text-5xl text-white mb-10 mx-6 mt-5">Checkout</h1>
      </div>
      <div className="flex w-full lg:flex-row flex-col">
        <div className="w-3/4 pr-8">
          <form
            //-----------------------------------------------------------------------------------------------------Route !
            action="/route du back"
            className="w-[90vw] lg:w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-3xl items-center justify-center"
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
              </div>
            </div>

            <button
              type="button"
              onClick={openModal}
              className="transition duration-300 ease-in-out text-black bg-greeny rounded-3xl hover:bg-opacity-80 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue to Bancontact
            </button>
          </form>
        </div>

        <div className="w-1/4">
          <div className="w-[90vw] lg:w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-3xl items-center justify-center">
            {<BancontactLogo />}
            <h4 className="text-lg font-semibold mb-4">
              Select a paiement method{" "}
              <span className="price" style={{ color: "black" }}>
                <i className="fa fa-shopping-cart"></i>{" "}
              </span>
            </h4>

            {/* Sample product entries */}
            <p className="transition duration-300 ease-in-out text-black bg-slate-100 rounded-3xl hover:bg-slate-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to="/payments/paypal">{<PaypalLogo />}</Link>
            </p>
            <p className="mt-5 transition duration-300 ease-in-out text-black bg-slate-100 rounded-3xl hover:bg-slate-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to="/payments/visa">
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
              </Link>
            </p>

            <hr />
            <p className="mt-5">
              Total{" "}
              <span className="price" style={{ color: "black" }}>
                <b>$12</b>
                {/* -------------------------------------------------------------------------BACKEND CONNECTION */}

                {/* <b>${totalPrice}</b> */}
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
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none m-5">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/* Modal content */}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-400 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Feature not available
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-70 hover:opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p>Sorry, the feature you requested is not yet available.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={showModal ? "opacity-25 fixed inset-0 z-40 bg-black" : ""}
        ></div>
      </div>
    </div>
  );
}

export default BancontactPayment;