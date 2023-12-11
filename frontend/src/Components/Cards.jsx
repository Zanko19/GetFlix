import React from 'react';
import movieData from '../boss.json';

function Cards() {
  const cards = movieData.movies.slice(1, 5); // Extract movies from index 1 to 5 (excluding the first one)

  const handleHover = (index) => {
    console.log(`Hovering over card with index ${index}`);
  };

  return (
    <div className='mt-5 lg:mt-0 h-[60%] w-full lg:h-[55%] lg:w-[90%] flex flex-row items-center justify-between'>
      {cards.map((movie, index) => (
        <div
          key={movie.id}
          className={`bg-black h-[90%] w-[47%] lg:mr-0 lg:h-[80%] lg:w-[22%] rounded-3xl flex flex-col lg:flex lg:origin-bottom-right lg:hover:rotate-[10deg] lg:hover:-translate-y-[25px] z-${40 - index * 1} transition duration-100 mb-4 ${index >= 2 ? 'hidden lg:flex' : ''}`}
          onMouseEnter={() => handleHover(index)}
        >
          <img
            src={movie.posterPath}
            alt={movie.title}
            className='h-[70%] rounded-3xl object-cover m-2'
          />
          <p className='text-xs mx-3 mb-1'>{movie.title}</p>
          <p className='text-xs mx-3 text-white/[0.6]'>{getGenres(movie.genreIds)}</p>
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
