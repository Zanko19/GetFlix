// MovieBackdrop.jsx
import React from 'react';

export const modifyBackdropPath = (path) => {
  return path.replace('/w500/', '/original/');
};

const MovieBackdrop = ({ backdropPath, className }) => {
  const modifiedBackdropPath = modifyBackdropPath(backdropPath);

  return (
    <div className={className}>
      <img src={modifiedBackdropPath} alt={`Backdrop`} />
    </div>
  );
};

export default MovieBackdrop;
