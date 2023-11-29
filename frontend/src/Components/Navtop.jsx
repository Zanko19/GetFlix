import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function NavTop() {
  return (
    <div className='w-screen h-[10vh] bg-black text-white'>
      <h1 className='text-xl' >Nav-Top</h1>
    </div>
  );
}

export default NavTop