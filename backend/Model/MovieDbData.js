const mongoose = require('mongoose');

class Movie {
  constructor(
    id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    genre_ids,
    backdrop_path,
    videoData,
    runtime,
    productionCountries,
    productionCompanies
  ) {
    this.id = id;
    this.title = title;
    this.releaseDate = release_date;
    this.overview = overview;
    this.voteAverage = vote_average;
    this.posterPath = poster_path;
    this.genreIds = genre_ids;
    this.backdropPath = backdrop_path;
    this.videoData = videoData;
    this.runtime = runtime;
    this.productionCountries = productionCountries;
    this.productionCompanies = productionCompanies;
  }

  get videoKey() {
    return this.videoData ? this.videoData.videoKey : null;
  }

  get hasVideo() {
    return this.videoData && this.videoData.videoKey;
  }
}

class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const GenreSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

const MovieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  releaseDate: String,
  overview: String,
  voteAverage: Number,
  posterPath: String,
  genreIds: [Number],
  backdropPath: String,
  videoData: {
    videoKey: String,
  },
  runtime: Number,
  productionCountries: [String],
  productionCompanies: [
    {
      name: String,
      id: Number,
      logoPath: String,
      originCountry: String,
    }
  ],
});

const MovieToDB = mongoose.model('Movie', MovieSchema);
const GenreToDB = mongoose.model('Genre', GenreSchema);

module.exports = {
  Movie,
  Genre,
  MovieToDB,
  GenreToDB,
};
