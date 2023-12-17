import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavTop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showList, setShowList] = useState(false);
  const [movies, setMovies] = useState([]);
  const inputRef = useRef(null);
  const listRef = useRef(null);

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
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://157.230.127.29/movies/getDatas');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const filteredData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const baseUrl = 'https://image.tmdb.org/t/p/original';

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
        <div ref={listRef} className='sm:hidden h-[90vh] lg:flex flex-col right w-[48%] text-center absolute top-[8vh] ml-5 scroll-smooth overflow-y-auto scrollbar-thin scrollbar-thumb-greeny/70 scrollbar-track-greeny/25 scrollbar-thumb-rounded-3xl'>
          {filteredData.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className='flex flex-row items-center bg-black/[0.9] '
              onClick={() => setShowList(false)}
            >
             <img src={`${baseUrl}${movie.posterPath}`} className='w-[50px] mr-2' alt="" />
              <p>{movie.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavTop;
