const express = require("express");
const MovieController = require("../Controller/MovieDbFilter.js");

const router = express.Router();

router.get("/movies/top", async (req, res) => {
  const topMoviesData = await MovieController.fetchTopMovies();

  if (topMoviesData.error) {
    return res.status(500).json({ error: topMoviesData.error });
  }

  res.json(topMoviesData);
});

module.exports = router;
