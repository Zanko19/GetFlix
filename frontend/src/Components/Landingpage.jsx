import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import Navleft from './Navleft';
import NavTop from './Navtop';
import Hero from './Hero';


function Home() {
    const [isOpen, setClose] = useState(false);
    const toggleNavLeft = () => {
      setClose(!isOpen);
    };
    return (
        <div className='containermain w-screen flex flex-col mt-5 '>
        <div className='flex h-[10vh] w-screen flex-row-reverse w-screen relative items-center md:justify-between justify-around'>
          <FaBars
            className={`mr-5 text-white flex lg:hidden cursor-pointer transition-opacity duration-300 ${isOpen ? 'invisible opacity-0' : ''}`}
            onClick={toggleNavLeft}
          />
          <input
            type="text"
            className='glass ml-5 sm:w-screen sm:mx-5 h-[40px] rounded-xl pr-10 pl-4 flex items-center lg:hidden'
            placeholder="Search"
          />
        </div>
        <Navleft isOpen={isOpen} toggleNavLeft={toggleNavLeft} />
        <NavTop />
        <section className={`lg:absolute lg:left-[20vw] lg:bottom-0 w-[100vw] lg:w-[80vw] lg:bg-white/10 h-[85vh] text-white text-3xl flex flex-col lg:flex-row items-center justify-between ${isOpen ? 'bg-white/0.5' : ''}`}>
          <div className=' w-[90%] h-[60%] lg:w-[55%] lg:h-full lg:ml-1'>
            <Hero />
          </div>
          <div className='w-[90%] h-[35%] lg:w-[35%] bg-white lg:h-full rounded-3xl lg:mr-[5%]'>Bla</div>
        </section>
      </div>
       )
     }
     

export default Home
