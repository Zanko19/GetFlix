import React, { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import TrailerPlayer from './TrailerPlayer';
import movieData from '../boss.json';
import { modifyBackdropPath } from './MovieBackdrop';
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
          backgroundImage: `url(${modifyBackdropPath(firstMovie.backdropPath)})`, // Use modifyBackdropPath here
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div
          className='flex flex-row items-center justify-center text-black bg-greeny rounded-3xl text-sm  lg:h-[12%] lg:w-[30%] w-[40%] h-[12%] mb-[15%] lg:mb-[6%] ml-5 lg:ml-10 cursor-pointer'
          onClick={toggleTrailer}
        >
          <p className='flex flex-row text-xs lg:text-sm justify-center items-center lg:justify-center'>
            Watch The Trailer <BsFillPlayFill className='lg:ml-2 ml-1 lg:mt-[1px] text-sm ' />
          </p>
        </div>
      </div>

      {showTrailer && <TrailerPlayer videoKey={firstMovie.videoData.videoKey} onClose={() => setShowTrailer(false)} />}
    </>
  );
}

export default Hero;
