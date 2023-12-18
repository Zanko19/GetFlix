import React, { useState, useEffect } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import TrailerPlayer from './TrailerPlayer';
import { modifyBackdropPath } from './MovieBackdrop';

function Hero() {
  const [firstMovie, setFirstMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  useEffect(() => {
    const fetchFirstMovie = async () => {
      try {
        const response = await fetch('https://cinemania.space/movies/getDatas');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data.movies && data.movies.length > 0) {
          setFirstMovie(data.movies[19]);
        } else {
          console.error('No movies found.');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchFirstMovie();
  }, []);

  const baseUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      {firstMovie && (
        <div
          className='h-[40vh] bg-cover lg:h-[45%] lg:w-[90%] rounded-3xl flex items-end mt-0'
          style={{
            backgroundImage: `url(${baseUrl}${modifyBackdropPath(firstMovie.backdropPath)})`,
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
      )}

      {showTrailer && firstMovie && (
        <TrailerPlayer videoKey={firstMovie.videoData.videoKey} onClose={() => setShowTrailer(false)} />
      )}
    </>
  );
}

export default Hero;
