const express = require("express");
const MovieController = require("../Controller/MovieDbApi.js");

const router = express.Router();

router.get("/search/:movieName", async (req, res) => {
  const movieName = req.params.movieName;

  const searchData = await movieController.fetchData(movieName);

  if (searchData.error) {
    return res.status(500).json({ error: searchData.error });
  }

  res.json(searchData);
});

module.exports = router;
