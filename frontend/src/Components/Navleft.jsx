import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Navleft() {
  return (
    <div className='w-screen md:min-w-[10%] bg-banana overflow-hidden'>
      <h1 className='text-xl' >Nav-left</h1>
    </div>
  );
}

export default Navleft