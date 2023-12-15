import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";
import NavTop from "./Navtop";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  const [isOpen, setClose] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  const [profileInfo, setProfileInfo] = useState({
    fullName: "Blablabla",
    emailAddress: "blablabla@example.com",
    phoneNumber: "+32474025647",
    address: "123 rue Saint Antoine",
  });

  const updateProfileInfo = (fieldName, newValue) => {
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [fieldName]: newValue,
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className="containermain w-screen flex flex-col mt-5 overflow-hidden">
      <div className="flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around">
        <FaBars
          className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${
            isOpen ? "invisible opacity-0" : ""
          }`}
          onClick={toggleNavLeft}
        />
        <input
          type="text"
          className="glass ml-5 sm:w-screen sm:mx-5 h-[40px] rounded-xl pr-10 pl-4 flex items-center lg:hidden"
          placeholder="Search"
        />
      </div>
      <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
      <NavTop />
     
      <section
        className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:bg-white/10 h-[85vh] text-white text-3xl flex items-center justify-center ${
          isOpen ? "bg-white/0.5" : ""
        }`}
      >
        <div className="px-6 py-6 lglass rounded-3xl items-center justify-center">
          <h3 className="w-full flex justify-center text-[#b4d429] text-3xl font-bold">
            Your Profile
          </h3>
          <div className="items-center justify-center text-center mt-2">
            {isEditing ? (
              <form>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    value={profileInfo.fullName}
                    onChange={(e) => updateProfileInfo("fullName", e.target.value)}
                    className="border rounded p-1 text-gray-300"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="email"
                    value={profileInfo.emailAddress}
                    onChange={(e) => updateProfileInfo("emailAddress", e.target.value)}
                    className="border rounded p-1 text-gray-300"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="tel"
                    value={profileInfo.phoneNumber}
                    onChange={(e) => updateProfileInfo("phoneNumber", e.target.value)}
                    className="border rounded p-1 text-gray-300"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    value={profileInfo.address}
                    onChange={(e) => updateProfileInfo("address", e.target.value)}
                    className="border rounded p-1 text-gray-300"
                  />
                </dd>
              </div>
            </form>
            
            
            ) : (
              <dl className="sm:w-fit lg:w-fit">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {profileInfo.fullName}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {profileInfo.emailAddress}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {profileInfo.phoneNumber}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {profileInfo.address}
                  </dd>
                </div>
              </dl>
            )}
          </div>
          {isEditing ? (
            <button
              className="fancy w-1/2 mt-2 md:w-60 md:mb-4 w-40 mx-auto flex items-center justify-center text-center text-xl md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429] border border-[#b4d429] hover:scale-105 group-hover:animate-shine focus:ring"
              onClick={handleSaveClick}
            >
              Save
            </button>
          ) : (
            <button
              className="fancy w-1/2 mt-2 md:w-60 md:mb-4 w-40 mx-auto flex items-center justify-center text-center text-xl md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429] border border-[#b4d429] hover:scale-105 group-hover:animate-shine focus:ring"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Profile;