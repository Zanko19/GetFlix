import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Forgot from "./Forgot";
import Movie from "./Onemovie";
import Sign from "./Signup";
import Login from "./Login";
import Home from "./Landingpage";
import "../App.css";
import Profil from "./Profil";
import Ticket from "./Ticket";
import Category from "./Movie";
import Payments from "./Payment";
import UserProfile from "./UserProfile";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/category"
          element={<Category setUsername={setUsername} username={username} />}
        />
        <Route
          path="/ticket/:movieId"
          element={<Ticket setUsername={setUsername} username={username} />}
        />
        <Route
          path="/signup"
          element={<Sign setUsername={setUsername} username={username} />}
        />
        <Route path="/login/*" element={<Login setUsername={setUsername} />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route
          path="/"
          element={<Home setUsername={setUsername} username={username} />}
        />
        <Route
          path="/movie"
          element={<Movie setUsername={setUsername} username={username} />}
        />
        <Route
          path="/payments/*"
          element={<Payments setUsername={setUsername} username={username} />}
        />
        <Route
          path="/movie/:movieId"
          element={<Movie setUsername={setUsername} username={username} />}
        />
        <Route
          path="/users/:username"
          element={
            <UserProfile setUsername={setUsername} username={username} />
          }
        />
        <Route path="/profile" element={<Profil username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
