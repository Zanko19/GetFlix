class Movie {
  constructor(
    id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    genre_ids
  ) {
    this.id = id;
    this.title = title;
    this.releaseDate = release_date;
    this.overview = overview;
    this.voteAverage = vote_average;
    this.posterPath = poster_path;
    this.genreIds = genre_ids;
  }
}

class Genre {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

module.exports = {
  Movie,
  Genre,
};
// window.Movie = Movie;
// window.Genre = Genre;
