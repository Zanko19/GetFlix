const express = require("express");
const app = express();
const MovieRoutes = require("./Routes/MovieRoutes");
const path = require("path");
const { TokenKey } = require("./Model/AccesMovieDb");
const MovieController = require("./Controller/MovieDbApi");

app.use(express.static(path.join(__dirname, "Views")));
app.use("/movies", MovieRoutes);

const movieController = new MovieController(TokenKey);

// Endpoint pour rechercher des films
app.get("/movies/search", async (req, res) => {
  const movieName = req.query.movieName;

  // Effectuez une recherche de films avec le nom spécifié
  const searchData = await movieController.fetchData(movieName);

  // Vérifiez si une erreur s'est produite
  if (searchData.error) {
    // Retournez une réponse d'erreur
    return res.status(500).json({ error: searchData.error });
  }

  // Renvoyez les résultats de la recherche
  res.json(searchData);
});

app.listen(8080, () => {
  console.log("Serveur à l'écoute sur le port 8080");
});
