const fetch = require("node-fetch");

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTdjNjU0NDRhMWI0NGI0MjZmOTA4Y2RiYmQ0YzA5MSIsInN1YiI6IjY1Njg0NjQzOWFmZmMwMDBlYmNmMzU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ezU35302lrY0T_rG3knYsb22MpvDzca1ZwXNkt-RKPM",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
