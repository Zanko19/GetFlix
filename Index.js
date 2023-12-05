const express = require("express");
const cors = require("cors");
const app = express();
const MovieRoutes = require("./Routes/MovieRoutes");
const path = require("path");
const { TokenKey } = require("./Model/AccesMovieDb");
const MovieController = require("./Controller/MovieDbFilter");
require("dotenv").config({ path: "./.env"});

// app.use("/api/auth", require("./Middleware/Auth"));

app.use(cors());
app.use(express.static(path.join(__dirname, "Views")));
app.use("/movies", MovieRoutes);

const movieController = new MovieController(TokenKey);
const PORT = process.env.PORT || 8080;
//////////////////////////////////////////////////////////////////////////ALL MOVIE API
// // Endpoint pour rechercher des films par nom
// app.get("/movies/search", async (req, res) => {
//   const movieName = req.query.movieName;

//   // Effectuez une recherche de films avec le nom spécifié
//   const searchData = await movieController.fetchData(movieName);

//   // Vérifiez si une erreur s'est produite
//   if (searchData.error) {
//     // Retournez une réponse d'erreur
//     return res.status(500).json({ error: searchData.error });
//   }

//   // Renvoyez les résultats de la recherche
//   res.json(searchData);
// });
//////////////////////////////////////////////////////////////////////////

// Endpoint pour obtenir les 30 films les plus populaires
app.get("/movies/top", async (req, res) => {
  // Obtenez les 30 films les plus populaires
  const topMoviesData = await movieController.fetchTopMovies();

  // Vérifiez si une erreur s'est produite
  if (topMoviesData.error) {
    // Retournez une réponse d'erreur
    return res.status(500).json({ error: topMoviesData.error });
  }

  // Renvoyez les résultats des 30 films les plus populaires
  res.json(topMoviesData);
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongoose'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Serveur à l'écoute sur le port ${PORT}`);
});
