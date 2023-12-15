import React from 'react';
import movieData from '../boss.json';
import { useNavigate } from 'react-router-dom';
import AverageVote from './Star'; 

function Cards() {
  const allMovies = movieData.movies;
  const numberOfRandomMovies = 4;

  // Shuffle the movies array to get a random order
  const shuffledMovies = [...allMovies].sort(() => Math.random() - 0.5);

  // Select the first four movies from the shuffled array
  const randomMovies = shuffledMovies.slice(0, numberOfRandomMovies);

  const navigate = useNavigate();

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const baseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <div className='mt-5 lg:mt-0 h-[60%] w-full lg:h-[55%] lg:w-[90%] flex flex-row items-center justify-between'>
      {randomMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`overflow-hidden bg-black h-[90%] w-[47%] lg:mr-0 lg:h-[80%] lg:w-[22%] rounded-3xl flex flex-col lg:flex lg:origin-bottom-right lg:hover:rotate-[10deg] lg:hover:-translate-y-[25px] z-${40 - index * 1} transition duration-100 mb-4 ${index >= 2 ? 'hidden lg:flex' : ''}`}
          onClick={() => handleCardClick(movie.id)}
        >
          <img
            src={`${baseUrl}${movie.posterPath}`}
            alt={movie.title}
            className='h-[70%] rounded-3xl object-cover m-2'
          />
          <p className='text-xs mx-3 mb-1 w-screen'>{movie.title}</p>
          <p className='text-xs mx-3 w-screen text-white/[0.6]'>{getGenres(movie.genreIds)}</p>
          <AverageVote voteAverage={movie.voteAverage} largeStyle={false} />
        </div>
      ))}
    </div>
  );
}

function getGenres(genreIds) {
  const genres = movieData.genres.filter((genre) => genreIds.includes(genre.id));
  const firstTwoGenres = genres.slice(0, 2);
  return firstTwoGenres.map((genre) => genre.name).join(', ');
}

export default Cards;
