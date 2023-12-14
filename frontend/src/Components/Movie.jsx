import React, { useState } from "react";
import movieData from "../boss.json";
import { useNavigate } from "react-router-dom";
import AverageVote from "./Star";
import { FaBars } from "react-icons/fa6";
import Navleft from "./Navleft";

function Category() {
  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [isOpen, setClose] = useState(false);
  const cards1 = movieData.movies.slice(0, 6);
  const cards2 = movieData.movies.slice(6, 12);
  const cards3 = movieData.movies.slice(12, 18);
  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="containermain h-auto w-screen flex flex-col mt-5 lg:overflow-hidden overflow-auto">
      <div className="flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around">
      <FaBars
            className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${isOpen ? 'invisible opacity-0' : ''}`}
            onClick={toggleNavLeft}
          />
          <input
            type="text"
            className='glass ml-5 w-full mr-5 sm:mx-5 h-[40px] rounded-3xl pr-10 pl-4 flex items-center lg:hidden'
            placeholder="Search"
          />
      </div>
      <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />

      {/* Mobile Version */}
    <section className="lg:hidden my-5">
    <div className="flex flex-wrap">
    {movieData.movies.slice(0, 18).map((movie) => (
      <div
        key={movie.id}
        className="w-[50%] sm:w-[50%] md:w-[33.33%] lg:w-[33.33%] xl:w-[33.33%] p-3 flex"
        onClick={() => handleCardClick(movie.id)}
      >
        <div className="overflow-hidden bg-black rounded-3xl flex flex-col">
        <img
            src={`${baseUrl}${movie.posterPath}`}
            alt={movie.title}
            className='h-[70%] rounded-3xl object-cover  m-2'
          />
          <div className="p-3 flex flex-col items-start justify-start">
          <p className='text-xs mb-1 text-white w-screen'>{movie.title}</p>
          <p className='text-xs text-white/[0.6]'>{getGenres(movie.genreIds)}</p>
          <AverageVote voteAverage={movie.voteAverage} largeStyle={true} />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Desktop Version */}
      <section
        className={`lg:absolute hidden lg:flex lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:h-[95vh] text-white text-3xl flex flex-col px-5 lg:pr-32 ${
          isOpen ? "bg-white/0.5" : ""
        }`}
      >
           {/* first line of cards */}
           <div className="mt-5 lg:mt-0 h-[32%] w-full lg:h-[32%] lg:w-full flex flex-row  mb-2 flex-wrap justify-between">
          {cards1.map((movie, index) => (
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
                className="h-[70%] rounded-3xl object-cover  m-2"
              />
              <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
              <p className="text-xs mx-3 text-white/[0.6]">
                {getGenres(movie.genreIds)}
              </p>
              <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
            </div>
          ))}
        </div>

        {/* 2rd line of cards */}
        <div className="mt-5 lg:mt-0 h-[32%] w-full lg:h-[32%] lg:w-full flex flex-row justify-between  mb-2 flex-wrap">
          {cards2.map((movie, index) => (
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
                className="h-[70%] rounded-3xl object-cover m-2"
              />
              <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
              <p className="text-xs mx-3 text-white/[0.6]">
                {getGenres(movie.genreIds)}
              </p>
              <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
            </div>
          ))}
        </div>

        {/* 3rd line of cards */}
        <div className="mt-5 lg:mt-0 h-[32%] w-full lg:h-[32%] lg:w-full flex flex-row justify-between  mb-2 flex-wrap">
          {cards3.map((movie, index) => (
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
                className="h-[70%] rounded-3xl object-cover m-2"
              />
              <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
              <p className="text-xs mx-3 text-white/[0.6]">
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

function getGenres(genreIds) {
  const genres = movieData.genres.filter((genre) =>
    genreIds.includes(genre.id)
  );
  const firstTwoGenres = genres.slice(0, 2);
  return firstTwoGenres.map((genre) => genre.name).join(", ");
}

export default Category;
