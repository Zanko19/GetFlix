const fetch = require("node-fetch");
const { Movie, MovieToDB } = require("../Model/MovieDbData");

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
        // Fetch movies
        fetch(discoverUrl, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${this.TokenKey}`,
          },
        }),
        // Fetch movie genres
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

      //console.log("salut");
      //await GenreToDB.insertMany(genreData.genres);

      const movies = [];
      for (const movieData of discoverData.results.slice(0, 30)) {
        const videoData = await this.fetchVideoData(movieData.id);

        if (
          videoData.videoKey &&
          !videoData.error &&
          (await this.isYouTubeVideoAvailable(videoData.videoKey))
        ) {
          // Fetching movie details for each movie
          const movieDetailsResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movieData.id}?language=en-US&api_key=${this.TokenKey}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${this.TokenKey}`,
              },
            }
          );

          if (!movieDetailsResponse.ok) {
            throw new Error("Failed to fetch movie details");
          }

          const movieDetailsData = await movieDetailsResponse.json();

          // Extracting additional details
          const runtime = movieDetailsData.runtime;
          const productionCountries = movieDetailsData.production_countries.map(
            (country) => country.iso_3166_1
          );
          const productionCompanies = movieDetailsData.production_companies.map(
            (company) => ({
              logoPath: company.logo_path,
              name: company.name,
            })
          );

          // Creating the Movie object
          const movie = new Movie(
            movieData.id,
            movieData.title,
            movieData.release_date,
            movieData.overview,
            movieData.vote_average,
            movieData.poster_path,
            movieData.genre_ids,
            movieData.backdrop_path,
            videoData,
            runtime,
            productionCountries,
            productionCompanies
          );
          movies.push(movie);
        }
      }

      /*for (const movie of movies) {
        const movieInstance = new MovieToDB({
          id: movie.id,
          title: movie.title,
          releaseDate: movie.releaseDate,
          overview: movie.overview,
          voteAverage: movie.voteAverage,
          posterPath: movie.posterPath,
          genreIds: movie.genreIds,
          backdropPath: movie.backdropPath,
          videoData: movie.videoData,
          runtime: movie.runtime,
          productionCountries: movie.productionCountries,
          productionCompanies: movie.productionCompanies,
        });
  
        await movieInstance.save();
      }*/

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

exports.getMovies = async (req, res) => {
  try {
    const movies = await MovieToDB.find();
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Server error');
  }
};

module.exports = MovieController;
