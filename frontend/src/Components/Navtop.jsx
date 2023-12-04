import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function NavTop() {
  return (
    <div className='hidden mt-5 lg:flex w-[80vw] h-[10vh] text-white flex flex-row justify-between items-center fixed top-0 right-0 mb-5 z-10 '>
         <input
          type="text"
          className='glass w-[49.5%] h-[40px] rounded-xl pr-10 pl-4 flex items-center z-10 ml-1'
          placeholder="Search"
        />
      <div className='sm:hidden lg:flex right w-[40%] text-center'>Right</div>
    </div>
  );
}

export default NavTop