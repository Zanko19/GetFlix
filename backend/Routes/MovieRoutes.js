const express = require("express");
const { TokenKey } = require("../Model/AccesMovieDb");
const MovieController = require("../Controller/MovieDbFilter");

const router = express.Router();

router.get("/top", async (req, res) => {
  
  const movieController = new MovieController(TokenKey);
  const topMoviesData = await movieController.fetchTopMovies();

  if (topMoviesData.error) {
    return res.status(500).json({ error: topMoviesData.error });
  }

  res.json(topMoviesData);
});

router.get("/deploy", async (req, res) => {
  console.log("Request received for /movies/deploy");

  // Vous pouvez également ajouter d'autres informations de la requête si nécessaire
  console.log("Request method:", req.method);
  console.log("Request query parameters:", req.query);
  console.log("Request headers:", req.headers);

  // Simulez une réponse en renvoyant un message JSON
  res.json({ message: "Request received successfully" });
});

//route get movies from MongoDB to send to frontend

module.exports = router;
