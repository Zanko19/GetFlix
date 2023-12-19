import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";
import NavTop from "./Navtop";
import { FaRegEdit } from "react-icons/fa";
import PictureSelection from "./PictureSelection";
import catImage from "../img/cat.jpg";
import horrorImage from "../img/horror.jpg";
import sfImage from "../img/sf.jpg";

function Profile({ setUsername, username }) {
  const [isOpen, setClose] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(1);

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  //model editing
  const [profileInfo, setProfileInfo] = useState({
    fullName: "Blablablaablu",
    emailAddress: "blablabla@example.com",
    phoneNumber: "+32474025647",
    address: "123 rue Saint Antoine",
  });
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          `https://cinemania.space/users/${encodeURIComponent(username)}`
        );
        if (response.ok) {
          const profileData = await response.json();
          console.log("Profile data:", profileData);
          setProfileInfo({
            fullName: profileData.username,
            emailAddress: profileData.email,
            // ... other fields you want to include
          });
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error during profile data fetch:", error.message);
      }
    };

    fetchProfileData();
  }, [username]);
  //return info
  const updateProfileInfo = (field, value) => {
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [field]: value,
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const picturesArray = [
    { id: 1, image: catImage },
    { id: 2, image: horrorImage },
    { id: 3, image: sfImage },
  ];

  const handlePictureSelect = (pictureId) => {
    setSelectedPicture(pictureId);
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
      <Navleft
        username={username}
        isOpen={isOpen}
        toggleNavLeft={toggleNavLeft}
      />
      <NavTop />

      <section
        className={`items start md:items-start flex flex-col md:flex-row lg:flex-row lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:bg-white/10 h-[85vh] text-white text-3xl flex items-center justify-center ${
          isOpen ? "bg-white/0.5" : ""
        }`}
      >
        <div className="w-[95%] lg:w-auto lg:absolute top-5 left-10 px-6 py-6 lglass rounded-3xl items-center justify-center">
          <div className="flex flex-row items-center">
            <img
              src={picturesArray.find((p) => p.id === selectedPicture).image}
              alt={`Selected Profile Picture`}
              className="rounded-full"
              style={{ width: "100px", height: "100px" }}
            />
            <h3 className="w-full text-[#b4d429] text-3xl font-bold mx-2 lg:mx-6">
              Your Profile
            </h3>
          </div>
          <div className="flex items-center justify-center text-left mt-2 lg:mx-2">
            {isEditing ? (
              <form>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) =>
                        updateProfileInfo("fullName", e.target.value)
                      }
                      className="glass border rounded-xl p-1 text-gray-100"
                    />
                  </dd>
                </div>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="email"
                      value={profileInfo.emailAddress}
                      onChange={(e) =>
                        updateProfileInfo("emailAddress", e.target.value)
                      }
                      className="glass border rounded-xl p-1 text-gray-100"
                    />
                  </dd>
                </div>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="tel"
                      value={profileInfo.phoneNumber}
                      onChange={(e) =>
                        updateProfileInfo("phoneNumber", e.target.value)
                      }
                      className="glass border rounded-xl p-1 text-gray-100"
                    />
                  </dd>
                </div>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      value={profileInfo.address}
                      onChange={(e) =>
                        updateProfileInfo("address", e.target.value)
                      }
                      className="glass border rounded-xl p-1 text-gray-100"
                    />
                  </dd>
                </div>
              </form>
            ) : (
              <dl className="sm:w-fit lg:w-fit">
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {username}
                  </dd>
                </div>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {profileInfo.emailAddress}
                  </dd>
                </div>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2">
                    {profileInfo.phoneNumber}
                  </dd>
                </div>
                <div className="py-3 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
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

        {isEditing ? (
          <div className=" lg:ml-5 mt-5 lg:mt-5 md:mt-0 md:ml-2 mt-lg-0 px-6 py-6 lglass rounded-3xl items-center justify-center">
            <h3 className="w-full flex justify-center text-[#b4d429] text-3xl font-bold mb-5">
              Select your profil image
            </h3>
            <div className="mt-2">
              <PictureSelection onSelectPicture={handlePictureSelect} />
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default Profile;
