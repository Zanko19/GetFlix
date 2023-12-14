import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import movieData from "../boss.json";
import NavTop from "./Navtop";
import { FaBars } from "react-icons/fa6";
import MovieBackdrop from "./MovieBackdrop";
import { modifyBackdropPath } from "./MovieBackdrop";
import { BsFillPlayFill } from "react-icons/bs";
import TrailerPlayer from "./TrailerPlayer"; // Import the TrailerPlayer component
import Navleft from "./Navleft";
import { BsBookmarkDashFill } from "react-icons/bs";

function OneMovie() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isOpen, setClose] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}min`;
  };

  useEffect(() => {
    console.log("Movie ID:", movieId); // Add this line
    const selectedMovie = movieData.movies.find(
      (m) => String(m.id) === movieId
    );
    setMovie(selectedMovie);
  }, [movieId]);
  if (!movie) {
    return <div>Loading...</div>;
  }

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  function getGenres(genreIds) {
    const genres = movieData.genres.filter((genre) =>
      genreIds.includes(genre.id)
    );
    const firstTwoGenres = genres.slice(0, 2);
    return firstTwoGenres.map((genre) => genre.name).join("  ·  ");
  }

  function getYearFromDate(dateString) {
    return dateString.split("-")[0];
  }
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const releaseYear = getYearFromDate(movie.releaseDate);

  return (
    <div className="containermain w-screen h-auto lg:h-screen flex flex-col lg:overflow-hidden">
      <img
        src={`${baseUrl}${modifyBackdropPath(movie.backdropPath)}`}
        alt={movie.title}
        className="absolute object-cover h-[100vh] object-top w-[100vw] z-[-10] lg:overflow-hidden lg:flex hidden"
        style={{
          position: "relative",
        }}
      />
      <div
        className="absolute h-[100vh] w-[100vw] z-[-5] lg:overflow-hidden lg:flex hidden"
        style={{
          background:
            "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)",
        }}
      ></div>
      <div className="flex h-[10vh] w-screen flex-row-reverse w-screen absolute z-50 items-center md:justify-between justify-start">
        <FaBars
          className={`mr-5 text-white text-2xl mt-5 flex lg:hidden cursor-pointer transition-opacity duration-300 ${
            isOpen ? "invisible opacity-0" : ""
          }`}
          onClick={toggleNavLeft}
        />
      </div>
      <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
      <NavTop />
      <section className="lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:h-[85vh] text-white text-3xl flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:ml-5">
        <img
          src={`${baseUrl}${movie.posterPath}`}
          alt={movie.title}
          className="h-[55vh] object-cover object-top w-full opacity-80 lg:hidden cursor-pointer"
        />
        <div className="flex flex-col lg:justify-between lg:h-[60%] w-[90%] lg:w-[40%] my-10 lg:my-0">
          <p className="text-sm mt-5 lg:mt-0 lg:text-xl opacity-90">{getGenres(movie.genreIds)}</p>
          <h2 className="text-3xl lg:text-5xl mb-3 mt-2">{movie.title}</h2>
          <div className="flex flex-row text-sm lg:text-lg mb-5">
            <p className="pr-3">{releaseYear}</p>
            <p className="pr-3">IMDB {movie.voteAverage}</p>
            <p className="pr-3">{movie.productionCountries.join("/")}</p>
            <p>{convertMinutesToHours(movie.runtime)}</p>
          </div>
          <p className="lg:text-xl text-lg mb-4">PLOT ·</p>
          <p className="lg:text-lg text-sm opacity-60 w-[80%]">{movie.overview}</p>

          <div className="flex flex-row items-center justify-between w-[75%] lg:mt-5">
            <div
              className="bg-greeny  w-[200px] py-3 rounded-3xl flex items-center justify-center text-black text-xl mt-5 cursor-pointer lg:relative hidden lg:flex"
              onClick={toggleTrailer}
            >
              <p className="flex flex-row text-xs lg:text-[17px] justify-center items-center lg:justify-center">
                Watch The Trailer{" "}
                <BsFillPlayFill className="lg:ml-2 ml-1 lg:mt-[1px] text-sm " />
              </p>
            </div>
            <div
              className="bg-greeny  p-3 rounded-full lg:rounded-3xl flex items-center justify-center text-black text-xl mt-5 cursor-pointer top-[50%] absolute lg:hidden"
              onClick={toggleTrailer}
            >
              <div className="flex flex-row text-xs lg:text-[17px] justify-center items-center lg:justify-center">
                <p className="hidden"> Watch The Trailer</p>{" "}
                <BsFillPlayFill className="lg:ml-2 ml-1 lg:mt-[1px] text-3xl lg:text-sm " />
              </div>
            </div>
            <div
              className="bg-black w-[200px] py-2 rounded-3xl flex items-center justify-center text-greeny text-xl mt-5 cursor-pointer"
              onClick={() => navigate(`/ticket/${movieId}`)}
            >
              <p className="flex flex-row text-lg lg:text-[17px] justify-center items-center lg:justify-center">
                Buy Ticket <BsBookmarkDashFill className="ml-3 text-lg" />
              </p>
            </div>
          </div>
        </div>
      </section>
      {showTrailer && (
        <TrailerPlayer
          videoKey={movie.videoData.videoKey}
          onClose={toggleTrailer}
        />
      )}
    </div>
  );
}

export default OneMovie;
