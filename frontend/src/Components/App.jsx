import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Password from "./Forgot";
import Movie from "./onemovie";
import Sign from "./Signup";
import Login from "./Login";
import Admin from "./Admin";
import Home from "./Landingpage";
import "../App.css";
import screen from "./img/screen.jpeg"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Password />} />
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
