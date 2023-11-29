import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navleft from './Navleft';
import NavTop from './Navtop';

function Home() {
  return (
    <div className='overflow-hidden'>
         <NavTop />
    <div className='w-screen h-[90vh] flex flex-col-reverse md:flex-row md:w-screen'>
    <Navleft />
      <div className='container min-w-[100vw] h-screen md:min-w-[90%] bg-white'>
      <h1 className='text-xl' >Home Page</h1>
      </div>
    </div>
    </div>
  );
}

export default Home