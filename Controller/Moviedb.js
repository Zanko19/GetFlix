//Discovermovies + Genres
const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";

const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
  movieName
)}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`;

//FECTH DATA
Promise.all([
  fetch(genreUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM0MDVjZTkwYWQ3YWJiY2M2NmVjZGQ4MzQzODAyMCIsInN1YiI6IjY1Njg0NjQzOWFmZmMwMDBlYmNmMzU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m4dPEXx0u6ZzRO0DzSsS5h-9bl8n5RvrpRdhvtNhCjI",
    },
  }),
  fetch(searchUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM0MDVjZTkwYWQ3YWJiY2M2NmVjZGQ4MzQzODAyMCIsInN1YiI6IjY1Njg0NjQzOWFmZmMwMDBlYmNmMzU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m4dPEXx0u6ZzRO0DzSsS5h-9bl8n5RvrpRdhvtNhCjI",
    },
  }),
]);

//LA DATA
releaseDateElement.textContent = `Release Date: ${movie.release_date}`;
overviewElement.textContent = `Overview: ${movie.overview}`;
voteAverageElement.textContent = `Vote Average: ${movie.vote_average}`;
posterElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
posterElement.alt = `${movie.title} Poster`;

// Attention extraire les genres des id
const genreNames = movie.genre_ids.map((genreId) => {
  const genre = genres.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Unknown";
});

//les genres extraits
categoriesElement.textContent = `Categories: ${genreNames.join(", ")}`;
