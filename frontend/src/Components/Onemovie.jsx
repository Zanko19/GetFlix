import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavTop from "./Navtop";
import { FaBars } from "react-icons/fa6";
import MovieBackdrop, { modifyBackdropPath } from "./MovieBackdrop";
import { BsFillPlayFill } from "react-icons/bs";
import TrailerPlayer from "./TrailerPlayer";
import Navleft from "./Navleft";
import { BsBookmarkDashFill } from "react-icons/bs";

const getGenres = (movie, genresData) => {
  if (!movie || !genresData.genres) {
    return "";
  }

  const genres = genresData.genres.filter((genre) =>
    movie.genreIds.includes(genre.id)
  );
  const firstTwoGenres = genres.slice(0, 2);
  return firstTwoGenres.map((genre) => genre.name).join(", ");
};

const OneMovie = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isOpen, setClose] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [genresData, setGenresData] = useState({ genres: [] });

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}min`;
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
 
        const response = await fetch(`https://cinemania.space/movies/getDatas`);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();

  
        const selectedMovie = data.movies.find((m) => String(m.id) === movieId);
   
  
        if (selectedMovie) {
          setMovie(selectedMovie);
        } else {
          console.error('Movie not found for id:', movieId);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
  
    fetchMovieData();
  }, [movieId]);

  useEffect(() => {
    const fetchGenresData = async () => {
      try {
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
        console.error("Error fetching genres data:", error);
      }
    };

    fetchGenresData();
  }, []);

  if (!movie || !genresData.genres) {
    return <div>Loading...</div>;
  }

  const baseUrl = "https://image.tmdb.org/t/p/original"; // Replace with your base URL
  const releaseYear = new Date(movie.releaseDate).getFullYear();

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
          <p className="text-sm mt-5 lg:mt-0 lg:text-xl opacity-90">
            {getGenres(movie, genresData)}
          </p>
          <h2 className="text-3xl lg:text-5xl mb-3 mt-2">{movie.title}</h2>
          <div className="flex flex-row text-sm lg:text-lg mb-5">
            <p className="pr-3">{releaseYear}</p>
            <p className="pr-3">IMDB {movie.voteAverage}</p>
            <p className="pr-3">{movie.productionCountries.join("/")}</p>
            <p>{convertMinutesToHours(movie.runtime)}</p>
          </div>
          <p className="lg:text-xl text-lg mb-4">PLOT ·</p>
          <p className="lg:text-lg text-lg opacity-80 w-[85%] lg:w-[120%]">
            {movie.overview}
          </p>

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
              className=" bg-slate-900 w-[200px] py-2 rounded-3xl flex items-center lg:ml-10 justify-center text-greeny text-xl mt-5 cursor-pointer"
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
