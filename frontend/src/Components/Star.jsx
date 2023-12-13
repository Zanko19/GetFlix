// AverageVote.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const AverageVote = ({ voteAverage, largeStyle }) => {
  const getStarRating = () => {
    const rating = Math.round(voteAverage / 2);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className={largeStyle ? 'text-3xl text-greeny' : 'text-greeny'} />);
      } else {
        stars.push(<FaStar key={i} className={largeStyle ? 'text-3xl text-gray-300' : 'text-gray-300'} />);
      }
    }

    return stars;
  };

  return (
    <div className={`flex items-center ${largeStyle ? 'mx-3 mt-1 text-lg' : 'mx-3 mt-1 text-sm'}`}>
      <div className='flex space-x-1'>{getStarRating()}</div>
    </div>
  );
};

export default AverageVote;
