import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import PrivacyPolicy from "./privacy";
const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get("cookiesAccepted"));

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", true); 
    setShowBanner(false);
  };

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté les cookies dans le cache
    const hasAcceptedCookies = Cookies.get("cookiesAccepted");

    // Affiche la bannière des cookies uniquement si l'utilisateur n'a pas encore accepté
    setShowBanner(!hasAcceptedCookies);
  }, []);

  return (
    showBanner && (
      <div className="info-popup fixed flex items-center justify-center inset-x-0 bottom-0 mb-4 z-[70]">
        <div className="glass rounded-3xl p-6" style={{ cursor: "auto" }}>
          <div className="w-16 mx-auto -mt-10 mb-3">
            <img
              className="-mt-1"
              src="https://www.svgrepo.com/show/30963/cookie.svg"
              alt="Cookie Icon SVG"
            />
          </div>
          <span className="w-full block text-white mb-3">
            We use cookies to provide a better user experience.
          </span>
          <div className="flex items-center justify-between">
            <a className="text-xs text-gray-400 mr-1 hover:text-gray-800">
              <NavLink
                to="/privacy"
                className="text-xs text-gray-400 mr-1 hover:text-gray-800"
              >
                Privacy Policy
              </NavLink>
            </a>

            <button
              type="button"
              className="fancy mt-2 w-40 mx-auto flex items-center justify-center text-center text-xl md:text-xl bg-[#60701a] py-2 rounded-md text-[#b4d429] border border-[#b4d429] hover:scale-105 group-hover:animate-shine focus:ring"
              onClick={acceptCookies}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
