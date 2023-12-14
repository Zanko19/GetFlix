import React, { useEffect, useState } from 'react';
import { GiSofa } from 'react-icons/gi';
import movieData from '../boss.json';
import { FaCalendar } from 'react-icons/fa';

function Siege({ movieId }) {
  const [movie, setMovie] = useState(null);
    
  useEffect(() => {
    const selectedMovie = movieData.movies.find((m) => String(m.id) === movieId);
    setMovie(selectedMovie);
  }, [movieId]);
  console.log(movieId);
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section className='w-[85%] h-[70vh] lg:w-[35%] lg:h-[80%] glass rounded-3xl lg:mt-[5%] lg:mr-[8%] flex flex-col rounded-3xl z-0 mb-10'>
      <section className='h-[30%] w-full lg:px-5 flex flex-row rounded-t-3xl z-0 overflow-hidden justify-around mt-5'>
        <h5 className='text-xl lg:text-2xl text-white/[0.8] w-[60%] lg:w-full'>{movie.title}</h5>
        <div className='flex flex-row h-[35px]'>
          <div className='w-[30px] h-[35px] bg-greeny flex items-center justify-center rounded-lg mr-2'>
            <FaCalendar className=' text-[16px] text-black/[0.9]' />
          </div>
          <div className='flex flex-col text-xs text-white items-center justify-between'>
            <p className='text-sm'>20:30</p>
            <small className='text-white/[0.8]'>20 Dec</small>
          </div>
        </div>
      </section>

      <section className='h-full w-full rounded-b-3xl  z-0 relative flex flex-col items-center justify-center'>
        <div className='box absolute h-[110%] rounded-b-3xl w-[100%] border-t-greeny top-[-10%] z-10 glass bg-greeny/[0.15] flex justify-center'>
          <p className='mt-6 text-xl h-[10%] text-greeny'>Lux Hall</p>
        </div>
        <section className='w-full h-[60%] flex flex-col text-greeny'>
        <div className='w-full flex flex-row justify-center'>
            <GiSofa className='w-[20%] h-[50%] rotate-[185deg]' /> <GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />{' '}
            <GiSofa className='w-[20%] h-[50%] rotate-[180deg]' /> <GiSofa className='w-[20%] h-[50%] rotate-[170deg]' />
          </div>
          <div className='w-full flex flex-row justify-center'>
            <GiSofa className='w-[20%] h-[50%] rotate-[185deg]' /> <GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />{' '}
            <GiSofa className='w-[20%] h-[50%] rotate-[180deg]' /> <GiSofa className='w-[20%] h-[50%] rotate-[170deg]' />
          </div>
          <div className='w-full flex flex-row justify-center'>
            <GiSofa className='w-[20%] h-[50%] rotate-[180deg]' /> <GiSofa className='w-[20%] h-[50%] rotate-[180deg]' />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Siege;
