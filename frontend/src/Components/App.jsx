// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Password from './Forgot';
import Movie from './Onemovie'; // Assuming the component name is OneMovie
import Sign from './Signup';
import Login from './Login';
import Admin from './Admin';
import Home from './Landingpage';
import '../App.css';
import Profil from './Profil';
import Favorites from './Favorites';
import Category from './Movie';
import screen from './img/screen.jpeg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profil />} />
        <Route path="/category" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Password />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
