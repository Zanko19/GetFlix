const MovieDB = require("node-themoviedb");

import MovieDB from "node-themoviedb";
const mdb = new MovieDB("717c65444a1b44b426f908cdbbd4c091", options);

(async () => {
  try {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };
    const movie = await mdb.movie.getDetails(args);
    console.log(movie);
  } catch (error) {
    console.error(error);
  }
})();
