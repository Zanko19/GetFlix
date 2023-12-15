// TrailerPlayer.jsx
import React, { useRef, useEffect } from 'react';
import { MdClose } from "react-icons/md";
function TrailerPlayer({ videoKey, onClose }) {
  const trailerUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1`;
  const trailerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (trailerRef.current && !trailerRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className='w-screen h-screen bg-black/[0.7] flex items-start justify-center  fixed top-0 left-0 z-50'>
      <div ref={trailerRef} className='trailer h-[50%] flex items-center justify-center w-screen lg:w-[80%] lg:h-[80%] bg-black lg:mt-10 lg-mt-0'>
        <button onClick={onClose} className="absolute text-lg lg:top-0 top-0 right-0 p-4 text-white cursor-pointer"><MdClose/></button>
        <iframe
          title='Trailer'
          width='100%'
          height='85%'
          src={trailerUrl} 
          frameBorder='0'
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerPlayer;
