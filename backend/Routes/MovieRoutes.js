const express = require("express");
const { TokenKey } = require("../Model/AccesMovieDb");
const MovieController = require("../Controller/MovieDbFilter");

const router = express.Router();
const movieController = new MovieController(TokenKey);

// route get movies/genres from API
router.get("/top", async (req, res) => {
  const topMoviesData = await movieController.fetchTopMovies();

  if (topMoviesData.error) {
    return res.status(500).json({ error: topMoviesData.error });
  }

  res.json(topMoviesData);
});

//route get movies from MongoDB to send to frontend
router.get("/getDatas", async (req, res) => {
  const result = await movieController.getMovies();
  res.json(result);
});

//route get genres from MongoDB to send to frontend
router.get('/genres', async (req, res) => {
  const result = await movieController.getGenres();
  res.json(result);
});

module.exports = router;
