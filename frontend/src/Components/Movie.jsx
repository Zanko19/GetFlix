import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";
import LoadingSpinner from "./LoadingSpinner";
import AverageVote from "./Star"; // Import the AverageVote component
import { useNavigate } from "react-router-dom";
import MobileSearchBar from "./MobileSearch";
function Category({ setUsername, username }) {
  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [isOpen, setClose] = useState(false);
  const [movies, setMovies] = useState([]);
  const [genresData, setGenresData] = useState({ genres: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movies data
        const response = await fetch("https://cinemania.space/movies/getDatas");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.movies);

        // Fetch genres data
        const genresResponse = await fetch(
          "https://cinemania.space/movies/genres"
        );
        if (!genresResponse.ok) {
          throw new Error("Failed to fetch genres data");
        }
        const genresData = await genresResponse.json();
        setGenresData(genresData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Set isLoading to false after fetching data with a 500ms delay
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, []);

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const getGenres = (genreIds) => {
    if (!genresData.genres) {
      return ""; // Handle the case where genres are undefined
    }

    const genres = genresData.genres.filter((genre) =>
      genreIds.includes(genre.id)
    );
    const firstTwoGenres = genres.slice(0, 2);
    return firstTwoGenres.map((genre) => genre.name).join(", ");
  };

  return (
    <div className="containermain h-auto w-screen flex flex-col mt-5 lg:overflow-hidden overflow-auto">
      <div className="flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around">
        <FaBars
          className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${
            isOpen ? "invisible opacity-0" : ""
          }`}
          onClick={toggleNavLeft}
        />
        <MobileSearchBar />
      </div>
      <Navleft
        username={username}
        isOpen={isOpen}
        toggleNavLeft={toggleNavLeft}
      />
      {/* Mobile Version */}
      <section className="lg:hidden my-5">
        <div className="flex flex-wrap">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="w-[50%] sm:w-[50%] md:w-[33.33%] lg:w-[33.33%] xl:w-[33.33%] p-3 flex"
              onClick={() => handleCardClick(movie.id)}
            >
              <div className="overflow-hidden bg-black rounded-3xl flex flex-col">
                <img
                  src={`${baseUrl}${movie.posterPath}`}
                  alt={movie.title}
                  className="h-[70%] rounded-3xl object-cover  m-2"
                />
                <div className="p-3 flex flex-col items-start justify-start">
                  <p className="text-xs mb-1 text-white w-screen">
                    {movie.title}
                  </p>
                  <p className="text-xs text-white/[0.6]">
                    {getGenres(movie.genreIds)}
                  </p>
                  <AverageVote
                    voteAverage={movie.voteAverage}
                    largeStyle={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {isLoading && <LoadingSpinner />} {/* Display loading spinner */}
      {/* Desktop Version */}
      <section
        className={`lg:absolute hidden lg:flex lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:h-[95vh] text-white text-3xl flex flex-col px-5 lg:pr-32 ${
          isOpen ? "bg-white/0.5" : ""
        }`}
      >
        {/* first line of cards */}
        <div className="mt-5 lg:mt-0 h-[32%] w-full lg:h-[32%] lg:w-full flex flex-row  mb-2 flex-wrap justify-between">
          {movies.slice(0, 6).map((movie, index) => (
            <div
              key={movie.id}
              className={`overflow-hidden bg-black h-[90%] w-[47%] lg:mr-0 lg:h-full lg:w-[12%] rounded-3xl flex flex-col lg:flex lg:origin-bottom-right lg:hover:rotate-[10deg] lg:hover:-translate-y-[25px] z-${
                40 - index * 1
              } transition duration-100 mb-4 ${
                index >= 2 ? "hidden lg:flex" : ""
              }`}
              onClick={() => handleCardClick(movie.id)}
            >
              <img
                src={`${baseUrl}${movie.posterPath}`}
                alt={movie.title}
                className="h-[60%] rounded-3xl object-cover  m-2"
              />
              <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
              <p className="text-xs mx-3 text-white/[0.6] w-screen overflow-hidden">
                {getGenres(movie.genreIds)}
              </p>
              <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
            </div>
          ))}
        </div>

        {/* 2nd line of cards */}
        <div className="mt-5 lg:mt-0 h-[32%] w-full lg:h-[32%] lg:w-full flex flex-row justify-between  mb-2 flex-wrap">
          {movies.slice(6, 12).map((movie, index) => (
            <div
              key={movie.id}
              className={`overflow-hidden bg-black h-[90%] w-[47%] lg:mr-0 lg:h-full lg:w-[12%] rounded-3xl flex flex-col lg:flex lg:origin-bottom-right lg:hover:rotate-[10deg] lg:hover:-translate-y-[25px] z-${
                40 - index * 1
              } transition duration-100 mb-4 ${
                index >= 2 ? "hidden lg:flex" : ""
              }`}
              onClick={() => handleCardClick(movie.id)}
            >
              <img
                src={`${baseUrl}${movie.posterPath}`}
                alt={movie.title}
                className="h-[60%] rounded-3xl object-cover  m-2"
              />
              <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
              <p className="text-xs mx-3 text-white/[0.6] w-screen overflow-hidden">
                {getGenres(movie.genreIds)}
              </p>
              <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
            </div>
          ))}
        </div>

        {/* 3rd line of cards */}
        <div className="mt-5 lg:mt-0 h-[32%] w-full lg:h-[32%] lg:w-full flex flex-row justify-between  mb-2 flex-wrap">
          {movies.slice(12, 18).map((movie, index) => (
            <div
              key={movie.id}
              className={`overflow-hidden bg-black h-[90%] w-[47%] lg:mr-0 lg:h-full lg:w-[12%] rounded-3xl flex flex-col lg:flex lg:origin-bottom-right lg:hover:rotate-[10deg] lg:hover:-translate-y-[25px] z-${
                40 - index * 1
              } transition duration-100 mb-4 ${
                index >= 2 ? "hidden lg:flex" : ""
              }`}
              onClick={() => handleCardClick(movie.id)}
            >
              <img
                src={`${baseUrl}${movie.posterPath}`}
                alt={movie.title}
                className="h-[60%] rounded-3xl object-cover  m-2"
              />
              <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
              <p className="text-xs mx-3 text-white/[0.6] w-screen overflow-hidden">
                {getGenres(movie.genreIds)}
              </p>
              <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Category;
