import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading absolute flex top-0 z-50 items-center justify-center w-screen h-[100vh] ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-greeny"></div>

    </div>
  );
};

export default LoadingSpinner;