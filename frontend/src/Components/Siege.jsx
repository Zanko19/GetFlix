// Siege.jsx

import React, { useEffect, useState } from 'react';
import { GiSofa } from 'react-icons/gi';
import movieData from '../boss.json';
import { FaCalendar } from 'react-icons/fa';

function Siege({ movieId, mainSectionStyle, setSelectedSeats, onClick }) {
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedLocalSeats] = useState([]);

  useEffect(() => {
    const selectedMovie = movieData.movies.find((m) => String(m.id) === movieId);
    setMovie(selectedMovie);
  }, [movieId]);

  const handleSeatClick = (seatNumber) => {
    setSelectedLocalSeats((prevSeats) => {
      if (prevSeats.includes(seatNumber)) {
        // If seat is already selected, remove it
        return prevSeats.filter((seat) => seat !== seatNumber);
      } else {
        // If seat is not selected, add it
        return [...prevSeats, seatNumber];
      }
    });

    // Directly update the parent component state
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seatNumber)) {
        // If seat is already selected, remove it
        return prevSeats.filter((seat) => seat !== seatNumber);
      } else {
        // If seat is not selected, add it
        return [...prevSeats, seatNumber];
      }
    });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className={`w-[85%] h-[70vh] lg:w-[35%] lg:h-[80%] glass rounded-3xl lg:mt-[5%] lg:mr-[8%] flex flex-col rounded-3xl z-0 mb-10 ${mainSectionStyle}`}
      onClick={onClick}
    >
      {/* Movie Information Section */}
      <div className='w-full h-[30%] lg:px-5 flex flex-row rounded-t-3xl z-0 overflow-hidden justify-around mt-5'>
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
      </div>

      {/* Seat Selection Section */}
      <section className='w-full flex flex-col justify-center text-greeny h-full rounded-3xl rounded-t-[100px] border-t-greeny border-t-[5px]' style={{ background: 'radial-gradient(circle, rgba(40, 167, 69, 0.4), transparent)' }}>
        {/* First row with 4 seats */}
        <div className='w-full flex flex-row justify-center'>
          {Array.from({ length: 4 }, (_, index) => (
            <GiSofa
              key={index}
              className={`lg:w-[20%] lg:h-[50%] h-[50px] w-[50px] mx-3 lg:mx-0 rotate-[180deg] cursor-pointer ${
                selectedSeats.includes(index + 1) ? 'text-gray-500' : 'text-greeny'
              }`}
              onClick={() => handleSeatClick(index + 1)}
            >
              {selectedSeats.includes(index + 1) ? index + 1 : ''}
            </GiSofa>
          ))}
        </div>

        {/* Second row with 4 seats */}
        <div className='w-full flex flex-row justify-center'>
          {Array.from({ length: 4 }, (_, index) => (
            <GiSofa
              key={index + 4} // Start index from 4 for the second row
              className={`lg:w-[20%] lg:h-[50%] h-[50px] w-[50px] mx-3 my-8 lg:my-0 lg:mx-0 rotate-[180deg] cursor-pointer ${
                selectedSeats.includes(index + 5) ? 'text-gray-500' : 'text-greeny'
              }`}
              onClick={() => handleSeatClick(index + 5)}
            >
              {selectedSeats.includes(index + 5) ? index + 5 : ''}
            </GiSofa>
          ))}
        </div>

        {/* Third row with 2 seats */}
        <div className='w-full flex flex-row justify-center'>
          {Array.from({ length: 2 }, (_, index) => (
            <GiSofa
              key={index + 8} // Start index from 8 for the third row
              className={`lg:w-[20%] lg:h-[50%] h-[50px] w-[50px] mx-10 lg:mx-0 rotate-[180deg] cursor-pointer ${
                selectedSeats.includes(index + 9) ? 'text-gray-500' : 'text-greeny'
              }`}
              onClick={() => handleSeatClick(index + 9)}
            >
              {selectedSeats.includes(index + 9) ? index + 9 : ''}
            </GiSofa>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Siege;
