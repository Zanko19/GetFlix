const express = require("express");
const MovieController = require("../Controller/MovieDbAwait.js");

const router = express.Router();

router.get("/search/:movieName", MovieController.searchMovies);

module.exports = router;
