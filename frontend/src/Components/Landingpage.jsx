import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import Navleft from './Navleft';
import NavTop from './Navtop';
import Hero from './Hero';
import Cards from './Cards';
import Siege from './Siege';
import movieData from '../boss.json'

function Home() {
  const firstMovie = movieData.movies[0];
    const [isOpen, setClose] = useState(false);
    const toggleNavLeft = () => {
      setClose(!isOpen);
    };
    return (
        <div className='containermain w-screen h-[160vh] lg:h-screen flex flex-col lg:flex-row items-center my-5 lg:mb-5 lg:mt-5'>
        <div className='flex h-[10vh] w-screen md:px-5 flex-row-reverse w-screen relative items-center md:justify-between justify-between'>
          <FaBars
            className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${isOpen ? 'invisible opacity-0' : ''}`}
            onClick={toggleNavLeft}
          />
          <input
            type="text"
            className='glass ml-5 w-full mr-5 sm:mx-5 h-[40px] rounded-3xl pr-10 pl-4 flex items-center lg:hidden'
            placeholder="Search"
          />
        </div>
        <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
        <NavTop />
        <section className={`lg:absolute h-[100vh] w-full lg:left-[20vw] lg:bottom-0 lg:w-[80vw] lg:h-[85vh] text-white text-3xl flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between ${isOpen ? 'bg-white/0.5' : ''}`}>
          <div className='w-[90%] h-[80vh] lg:w-[55%] lg:h-full lg:ml-1 flex flex-col lg:justify-between'>
            <Hero />
            <Cards />
          </div>
        </section>
        <Siege movieId={String(firstMovie.id)} />
      </div>
       )
     }
     

export default Home
