import React, { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import TrailerPlayer from './TrailerPlayer';
import movieData from '../boss.json';

function Hero() {
  const firstMovie = movieData.movies[0];
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <>
      <div
        className='h-[40vh] bg-cover lg:h-[45%] lg:w-[90%] rounded-3xl flex items-end mt-0'
        style={{
          backgroundImage: `url(${firstMovie.backdropPath})`,
          backgroundSize: 'fit',
        }}
      >
        <div
          className='flex flex-row items-center justify-start text-black bg-greeny rounded-3xl text-sm pl-5 lg:h-[12%] lg:w-[30%] w-[40%] h-[12%] mb-[15%] lg:mb-[6%] ml-5 lg:ml-10 cursor-pointer'
          onClick={toggleTrailer}
        >
          <p className='flex flex-row text-[10px] lg:text-sm justify-between items-center lg:justify-center px-2'>
            Watch The Trailer <BsFillPlayFill className='ml-2 lg:mt-[1px] text-sm' />
          </p>
        </div>
      </div>

      {showTrailer && <TrailerPlayer videoKey={firstMovie.videoData.videoKey} onClose={() => setShowTrailer(false)} />}
    </>
  );
}

export default Hero;
