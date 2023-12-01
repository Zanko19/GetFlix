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

  async fetchTopMovies() {
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&page=1&vote_average.gte=7&api_key=${this.TokenKey}`;

    try {
      const response = await fetch(discoverUrl, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${this.TokenKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch top movies");
      }

      const discoverData = await response.json();

      const movies = await Promise.all(
        discoverData.results.slice(0, 30).map(async (movieData) => {
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

      return { movies };
    } catch (error) {
      console.error("Error:", error);
      return { error: "Failed to fetch top movies" };
    }
  }
}

module.exports = MovieController;
