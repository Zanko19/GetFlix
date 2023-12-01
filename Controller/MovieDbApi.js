const fetch = require("node-fetch");
const { Movie } = require("../Model/MovieDbData");

class MovieController {
  constructor(TokenKey) {
    this.TokenKey = TokenKey;
  }

  async fetchVideoData(movieId) {
    const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    try {
      const response = await fetch(videoUrl, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${this.TokenKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch video data");
      }

      const videoData = await response.json();

      return videoData.results.length > 0
        ? { videoKey: videoData.results[0].key }
        : { error: "No video available" };
    } catch (error) {
      console.error("Error fetching video data:", error);
      return { error: "Failed to fetch video data" };
    }
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
            Authorization: `Bearer ${this.TokenKey}`,
          },
        }),
        fetch(searchUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${this.TokenKey}`,
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

      const movies = await Promise.all(
        searchData.results.map(async (movieData) => {
          const videoData = await this.fetchVideoData(movieData.id);

          return new Movie(
            movieData.id,
            movieData.title,
            movieData.release_date,
            movieData.overview,
            movieData.vote_average,
            movieData.poster_path,
            movieData.genre_ids,
            videoData
          );
        })
      );

      return { movies, genres: genreData.genres };
    } catch (error) {
      console.error("Error:", error);
      return { error: "Failed to fetch data" };
    }
  }
}

module.exports = MovieController;
