import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AverageVote from "./Star";

function Cards() {
  const [movies, setMovies] = useState([]);
  const numberOfRandomMovies = 4;
  const navigate = useNavigate();
  const [genresData, setGenresData] = useState({ genres: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movies data
        const moviesResponse = await fetch(
          "https://cinemania.space/movies/getDatas"
        );
        if (!moviesResponse.ok) {
          throw new Error("Failed to fetch movies data");
        }
        const moviesData = await moviesResponse.json();

        // Shuffle the movies array
        const shuffledMovies = [...moviesData.movies].sort(() => Math.random() - 0.5);

        // Select the first four movies from the shuffled array
        const randomMovies = shuffledMovies.slice(0, numberOfRandomMovies);

        setMovies(randomMovies);

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
      }
    };

    fetchData();
  }, []);

  const getGenres = (genreIds) => {
    return genreIds
      .map((genreId) => {
        const genre = genresData.genres.find((g) => g.id === genreId);
        return genre ? genre.name : "";
      })
      .join(", ");
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="mt-5 lg:mt-0 h-[60%] w-full lg:h-[55%] lg:w-[90%] flex flex-row items-center justify-between">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`overflow-hidden bg-black h-[90%] w-[47%] lg:mr-0 lg:h-[80%] lg:w-[22%] rounded-3xl flex flex-col lg:flex lg:origin-bottom-right lg:hover:rotate-[10deg] lg:hover:-translate-y-[25px] z-${
            40 - index * 1
          } transition duration-100 mb-4 ${index >= 2 ? "hidden lg:flex" : ""}`}
          onClick={() => handleCardClick(movie.id)}
        >
          <img
            src={`${baseUrl}${movie.posterPath}`}
            alt={movie.title}
            className="h-[70%] rounded-3xl object-cover m-2"
          />
          <p className="text-xs mx-3 mb-1 w-screen">{movie.title}</p>
          <p className="text-xs mx-3 w-screen text-white/[0.6]">
            {getGenres(movie.genreIds)}
          </p>
          <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
