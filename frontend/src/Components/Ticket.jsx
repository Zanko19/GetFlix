import React, { useState, useEffect, Suspense } from "react";
import { FaBars } from "react-icons/fa6";
import { useParams , Link} from "react-router-dom";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import Navleft from "./Navleft";
import Siege from "./Siege";
import cup from "../SVG/cupcinema.svg";
import pop from "../SVG/POPCORN_3D.svg";
import bol from "../SVG/BOULEPORN.svg";
import LoadingSpinner from "./LoadingSpinner";
import NavTop from "./Navtop";
import MobileSearchBar from "./MobileSearch";
import { fetchUserData } from "./api"; 

const Ticket = ({ setUsername, username }) => {
  const { movieId } = useParams();
  const [isOpen, setClose] = useState(false);
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFullLoading, setShowFullLoading] = useState(true);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const toggleNavLeft = () => {
    setClose(!isOpen);
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch("https://cinemania.space/movies/getDatas");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const selectedMovie = data.movies.find((m) => String(m.id) === movieId);
        setMovie(selectedMovie);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);

          setShowFullLoading(true);
          setTimeout(() => {
            setShowFullLoading(false);
          }, 100);
        }, 500);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);

      await fetchMovieData();

      // Fetch user data
      try {
        const userResponse = await fetchUserData(); // Adjust parameters if needed
        if (!userResponse.ok) {
          throw new Error(`HTTP error! Status: ${userResponse.status}`);
        }
        const userData = await userResponse.json();

        // Use userData to set the username or set default to "Guest"
        const fetchedUsername = userData.username || "Guest";
        setUsername(fetchedUsername);
   
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className="containermain w-screen h-auto lg:h-screen flex flex-col lg:overflow-hidden">
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
      <NavTop />
      <Suspense fallback={<LoadingSpinner />}>
        <section
          className={`lg:absolute lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:h-[85vh]  text-white text-3xl flex flex-col lg:flex lg:flex-row items-center lg:items-start justify-center lg:justify-start ${
            isOpen ? "bg-slate-700/0.5" : ""
          }`}
        >
          {movie && (
            <>
              <div className="lg:w-[25%] w-[90%] lg:h-[94%] lg:mt-0 lg:mr-20">
                <div className="lg:h-[50vh] w-full  ">
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
                <div className=" bg-slate-700 rounded-3xl h-[40vh] lg:h-[36%] flex flex-col pt-5 mb-5 lg:pt-0 lg:mb-0">
                  <div className="lg:text-xl text-2xl lg:pt-10 flex flex-col text-center mx-2 text-white">
                    {movie.title}
                    <h3 className="lg:text-sm text-xl text-center mt-3 lg:mt-0">
                      20th Dec, 20:30
                    </h3>
                    <div className="w-full lg:text-sm text-lg flex justify-between px-[15%] flex-row mt-5 lg:mt-2">
                      <h2>Hall: Lux</h2>
                      <h2 className="w-[50%]">
                        Seats: {selectedSeats.join(", ")}
                      </h2>
                    </div>
                    <h2 className="mt-10 lg:text-lg text-xl">{username || "Guest"}</h2>
                    {username ? (
                        <Link to="/payments">
                        <button className="bg-greeny px-4 text-lg rounded-3xl mt-5">Checkout</button>
                      </Link>
                    ) : (
                      <div className="mt-4 text-lg">
                        Please{" "}
                        <NavLink to="/login" className="text-[#b4d429]">
                          login
                        </NavLink>{" "}
                        to proceed to checkout.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Siege
                movieId={movieId}
                mainSectionStyle="lg:ml-10"
                setSelectedSeats={setSelectedSeats}
              />
              <section className="flex flex-col w-[30%] h-[94%] justify-between mr-10 hidden lg:flex">
                <div
                  className=" lglass  h-[30%] w-full rounded-3xl flex flex-row items-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0, 0, 128, 0.3), transparent)",
                  }}
                >
                  <div className="h-[100%] w-[40%]">
                    <img className="h-full z-50" src={cup} alt="" />
                  </div>
                  <div className="w-[60%] h-[60%] text-sm flex flex-col justify-between ml-5 mt-5">
                    <div>
                      {" "}
                      <h2 className="text-3xl ">Soda</h2>
                      <p>Small/Medium/Large"</p>
                    </div>
                    <h2 className="text-2xl mb-5">Price: 2$/4$/5$</h2>
                  </div>
                </div>
                <div
                  className=" lglass  h-[30%] w-full rounded-3xl flex flex-row items-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(128, 0, 128, 0.3), transparent)",
                  }}
                >
                  <div className="h-[100%] w-[40%]">
                    <img className="h-full z-50" src={pop} alt="" />
                  </div>
                  <div className="w-[60%] h-[60%] text-sm flex flex-col justify-between ml-5 mt-5">
                    <div>
                      {" "}
                      <h2 className="text-3xl">PopCorn</h2>
                      <p>Small/Medium/Large"</p>
                    </div>
                    <h2 className="text-2xl mb-5">Price: 5$/7$/8$</h2>
                  </div>
                </div>
                <div
                  className=" lglass  h-[30%] w-full rounded-3xl flex flex-row items-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(40, 167, 69, 0.3), transparent)",
                  }}
                >
                  <div className="h-[100%] w-[40%]">
                    <img className="h-full z-50" src={bol} alt="" />
                  </div>
                  <div className="w-[60%] h-[60%] text-sm flex flex-col justify-between ml-5 mt-5">
                    <div>
                      {" "}
                      <h2 className="text-3xl">BouleCorn</h2>
                      <p>Small/Medium/Large"</p>
                    </div>
                    <h2 className="text-2xl mb-5">Price: 5$/7$/8$</h2>
                  </div>
                </div>
              </section>
            </>
          )}
        </section>
      </Suspense>
      {isLoading && showFullLoading && <LoadingSpinner />}
    </div>
  );
}

export default Ticket;
