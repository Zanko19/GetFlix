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

  // getGenreNames() {
  //   // Récupérer les noms des genres à partir des IDs
  //   return this.genreIds.map((genreId) => {
  //     const genre = this.genresList.find((g) => g.id === genreId);
  //     return genre ? genre.name : "";
  //   });
  // }
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
