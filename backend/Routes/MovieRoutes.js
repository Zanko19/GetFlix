const express = require("express");
const MovieController = require("../Controller/MovieDbFilter");
// const userController = require("../controllers/UserController");

const router = express.Router();
// const { register } = require("../Middleware/Auth.js");

// router.route("/register").post(register);

router.get("/movies/top", async (req, res) => {
  console.log("request received for movies/top");
  const movieController = new MovieController();
  const topMoviesData = await MovieController.fetchTopMovies();

  if (topMoviesData.error) {
    return res.status(500).json({ error: topMoviesData.error });
  }

  res.json(topMoviesData);
});

router.get("/movies/deploy", async (req, res) => {
  console.log("Request received for /movies/deploy");

  // Vous pouvez également ajouter d'autres informations de la requête si nécessaire
  console.log("Request method:", req.method);
  console.log("Request query parameters:", req.query);
  console.log("Request headers:", req.headers);

  // Simulez une réponse en renvoyant un message JSON
  res.json({ message: "Request received successfully" });
});

//route get movies from MongoDB to send to frontend

// router.post("/Signin", async (req, res) => {
//   try {
//     // Récupérer les données de l'utilisateur à partir du corps de la requête
//     const { username, email, password, role, icon } = req.body;

//     // Créer un utilisateur avec les données récupérées
//     const result = await userController.Signin({ username, email, password, role, icon });

//     // Envoyer une réponse JSON au client
//     res.json({ message: "Utilisateur créé avec succès", user: result });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
//   }
// });

module.exports = router;
