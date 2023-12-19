import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 rounded-md rounded-3xl items-center justify-center text-green mt-8 bg-white -mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center w-full text-[#b4d429]">
        Privacy Policy
      </h2>

      <div className="text-dark">
        <p className="mb-4">
          Welcome to Cinemania, the ultimate destination for streaming movies
          and cinematic experiences. Your privacy is important to us, and we are
          committed to protecting your personal information as you enjoy our
          vast collection of films. This Privacy Policy outlines how we collect,
          use, and safeguard your data to ensure a secure and enjoyable
          streaming experience.
        </p>

        <p className="mb-4">
          We may collect various types of information when you visit our website
          or use our streaming services. This includes but is not limited to
          your name, email address, and browsing activity. This information
          helps us personalize your content recommendations, improve our
          services, and keep you informed about the latest releases. Rest
          assured, we prioritize the security of your data and only use it in
          accordance with this Privacy Policy.
        </p>

        <p className="mb-4">
          To enhance your user experience, we use cookies and similar tracking
          technologies. Cookies are small pieces of data stored on your device
          that enable us to recognize your preferences and tailor our services
          to better suit your needs. These technologies also assist us in
          analyzing website traffic and user interactions. You have the option
          to manage cookie preferences through your browser settings, but please
          note that disabling cookies may impact certain features of our
          streaming platform.<br></br>
          Thank you for choosing Cinemania for your cinematic entertainment!
        </p>
        <div>
          <button className="rounded-3xl hover:scale-150 focus:ring border border-[#b4d429] fancy">
            <a href="./profile">
              <IoArrowBackOutline className="text-3xl text-gray" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;