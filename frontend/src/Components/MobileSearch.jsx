import React, { useState, useEffect, useRef } from 'react';

function MobileSearchBar() {
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
        const response = await fetch('https://cinemania.space/movies/getDatas');
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
    <div className='flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around'>
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowList(true)}
        className='glass ml-5 w-full mr-5 sm:mx-5 h-[40px] rounded-3xl pr-10 pl-4 z-[60] flex items-center lg:hidden text-white'
        placeholder="Search"
      />
      {searchQuery && showList && (
        <div ref={listRef} className='absolute left-5 top-5 mt-10 mx-5 w-[80%] z-50 bg-black/[0.9] text-white'>
          {filteredData.map((movie) => (
            <div key={movie.id} className='flex items-center p-3 hover:bg-gray-800 cursor-pointer'>
              <img src={`${baseUrl}${movie.posterPath}`} className='w-8 h-8 mr-3' alt="" />
              <p className='text-white'>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileSearchBar;