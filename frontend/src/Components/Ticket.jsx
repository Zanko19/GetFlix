import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Navleft from "./Navleft";
import NavTop from "./Navtop";
import Siege from "./Siege";
import bar from "../SVG/Barr.svg";
import movieData from "../boss.json";

function Ticket() {
  const { movieId } = useParams();
  const [isOpen, setClose] = useState(false);
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  useEffect(() => {
    const selectedMovie = movieData.movies.find(
      (m) => String(m.id) === movieId
    );
    setMovie(selectedMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containermain w-screen h-auto lg:h-screen flex flex-col lg:overflow-hidden">
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
        className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:h-[85vh]  text-white text-3xl flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start ${
          isOpen ? "bg-slate-700/0.5" : ""
        }`}
      >
        <div className="lg:w-[25%] w-[85%] h-auto lg:h-[74%] lg:mt-0 lg:mr-20">
          <div className="h-[45vh] w-full ">
            <img
              src={`${baseUrl}${movie.posterPath}`}
              className="w-full h-full object-cover object-top rounded-3xl"
              alt=""
            />
          </div>
          <div className="h-[1vh] flex flex-row w-full justify-evenly">
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
            <div className="bg-slate-700 w-[3%]"></div>
          </div>
          <div className=" bg-slate-700 rounded-3xl h-[30vh] lg:h-[35%] flex flex-col pt-5 mb-5 lg:pt-0 lg:mb-0"> 
            <div className="lg:text-xl text-2xl pt-2 flex flex-col text-center mx-2 text-white">
              {movie.title}
              <h3 className="lg:text-sm text-xl text-center mt-3 lg:mt-0">20th Dec, 20:30</h3>
              <div className="w-full lg:text-sm text-lg flex justify-between px-[15%] flex-row mt-5 lg:mt-2">
                <h2>Hall: Lux</h2>
                <h2 className="w-[50%]">Seats: {selectedSeats.join(', ')}</h2>
              </div>
              <h2 className="mt-1 lg:text-lg text-xl">UserName Test</h2>
            </div>
          </div>
        </div>
        <Siege movieId={movieId} mainSectionStyle="lg:mt-[0vh]" setSelectedSeats={setSelectedSeats} />
      </section>
    </div>
  );
}

export default Ticket;
