const fetch = require("node-fetch");
const { Movie } = require("../Model/MovieDbData");

class MovieController {
  constructor(TokenKey) {
    this.TokenKey = TokenKey;
  }
  //----------------------------------------------------------------------------> FETCH VIDEO
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
  //----------------------------------------------------------------------------> FETCH TOP MOVIES
  async fetchTopMovies() {
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&page=1&vote_average.gte=7&api_key=${this.TokenKey}`;

    try {
      const [response, genreResponse] = await Promise.all([
        fetch(discoverUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${this.TokenKey}`,
          },
        }),
        //----------------------------------------------------------------------------> FETCH GENRE
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${this.TokenKey}`,
          },
        }),
      ]);

      if (!response.ok || !genreResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [discoverData, genreData] = await Promise.all([
        response.json(),
        genreResponse.json(),
      ]);
      //----------------------------------------------------------------------------> RETURN MODEL SLICE 30
      const movies = [];
      for (const movieData of discoverData.results.slice(0, 30)) {
        const videoData = await this.fetchVideoData(movieData.id);

        if (
          videoData.videoKey &&
          !videoData.error &&
          (await this.isYouTubeVideoAvailable(videoData.videoKey))
        ) {
          const movie = new Movie(
            movieData.id,
            movieData.title,
            movieData.release_date,
            movieData.overview,
            movieData.vote_average,
            movieData.poster_path,
            movieData.genre_ids,
            movieData.backdrop_path,
            videoData
          );
          movies.push(movie);
        }
      }

      return { movies, genres: genreData.genres };
    } catch (error) {
      console.error("Error:", error);
      return { error: "Failed to fetch data" };
    }
  }
  async isYouTubeVideoAvailable(videoKey) {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoKey}`,
        {
          method: "GET",
        }
      );

      return response.ok;
    } catch (error) {
      console.error("Error checking YouTube video availability:", error);
      return false;
    }
  }
}

module.exports = MovieController;
