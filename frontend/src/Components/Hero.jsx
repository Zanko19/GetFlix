import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import movieData from '../model.json';

function Hero() {
  // Get the first movie from the data
  const firstMovie = movieData.movies[2];

  return (
    <div
      className='h-[35vh] bg-cover lg:h-[45%] lg:w-[90%] rounded-3xl flex items-end'
      style={{
        backgroundImage: `url(${firstMovie.backdropPath})`,
      }}
    >
      <div className='flex flex-row items-center justify-start text-black bg-greeny rounded-3xl text-sm pl-5 lg:h-[12%] lg:w-[25%] w-[50%] h-[20%] mb-10 ml-5 lg:ml-10'>
        Watch The Trailer <FaPlay className='ml-3 mt-[1px]' />
      </div>
    </div>
  );
}

export default Hero;
