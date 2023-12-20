import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Faites une requête API pour récupérer les détails de l'utilisateur en utilisant le nom d'utilisateur
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://cinemania.space/users/${username}`
        );
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {userData.username}</p>
      {/* Ajoutez d'autres détails de l'utilisateur en fonction de votre modèle de données */}
    </div>
  );
}

export default UserProfile;
