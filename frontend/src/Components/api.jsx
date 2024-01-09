export const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://cinemania.space/users/${encodeURIComponent(username)}`);
      return response;
    } catch (error) {
      console.error("Error during user data fetch:", error.message);
      throw error;
    }
  };