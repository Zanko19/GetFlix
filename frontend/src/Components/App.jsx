import { useState } from "react";
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Password from "./Forgot";
import Movie from "./Onemovie";
import Sign from "./Signup";
import Login from "./Login";
import Admin from "./Admin";
import Home from "./Landingpage";
import "../App.css";
import Profil from "./Profil";
import Ticket from "./Ticket";
import Category from "./Movie";
import screen from "../img/screen.jpeg";
import Payments from "./Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profil />} />
        <Route path="/category" element={<Category />} />
        <Route path="/ticket/:movieId" element={<Ticket />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Password />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default App;
