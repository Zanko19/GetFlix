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

//route get movies from MongoDB to send to frontend
router.get("/getDatas", async (req, res) => {
  const movieController = new MovieController(TokenKey);
  const result = await movieController.getMovies();
  res.json(result);
});

module.exports = router;
