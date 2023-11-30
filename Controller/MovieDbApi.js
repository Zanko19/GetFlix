const fetch = require("node-fetch");
class MovieController {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async fetchData(movieName) {
    const genreUrl =
      "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      movieName
    )}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`;

    try {
      const [genreResponse, searchResponse] = await Promise.all([
        fetch(genreUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${this.apiKey}`,
          },
        }),
        fetch(searchUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${this.apiKey}`,
          },
        }),
      ]);

      if (!genreResponse.ok || !searchResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [genreData, searchData] = await Promise.all([
        genreResponse.json(),
        searchResponse.json(),
      ]);

      const movies = searchData.results.map(
        (movieData) =>
          new Movie(
            movieData.id,
            movieData.title,
            movieData.release_date,
            movieData.overview,
            movieData.vote_average,
            movieData.poster_path,
            movieData.genre_ids
          )
      );

      this.displayMovies(movies, genreData.genres);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  displayMovies(movies, genres) {
    console.log(movies);
    console.log(genres);
  }
}

module.exports = MovieController;

// window.MovieController = MovieController;
