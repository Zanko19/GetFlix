import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import movieData from '../boss.json';

function NavTop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filteredData = movieData.movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOutsideClick = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      listRef.current &&
      !listRef.current.contains(event.target)
    ) {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='hidden  lg:flex w-[80vw] h-[10vh] text-white flex flex-row justify-between items-center fixed top-0 right-0 z-50 '>
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowList(true)}
        className='glass w-[49.5%] h-[40px] rounded-3xl pr-10 pl-4 flex items-center z-50 ml-1'
        placeholder="Search"
      />
      {searchQuery && showList && (
        <div ref={listRef} className='sm:hidden lg:flex flex-col right w-[50%] text-center absolute top-[8vh] px-5'>
          {filteredData.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className='flex flex-row items-center bg-black/[0.9]'
              onClick={() => setShowList(false)}
            >
              <img src={movie.posterPath} className='w-[50px] mr-2' alt="" />
              <p>{movie.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavTop;
