import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forgot from "./Forgot"
import Movie from "./Onemovie";
import Sign from "./Signup";
import Login from "./Login";
import Home from "./Landingpage";
import "../App.css";
import Profil from "./Profil";
import Ticket from "./Ticket";
import Category from "./Movie";
import Payments from "./Payment";

function App() {
  return (
    <Router basename="/getflixProject">
      <Routes>
        <Route path="/profile" element={<Profil />} />
        <Route path="/category" element={<Category />} />
        <Route path="/ticket/:movieId" element={<Ticket />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </Router>
  );
}
export default App;
