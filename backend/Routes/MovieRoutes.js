const express = require("express");
const MovieController = require("../Controller/MovieController");
// const userController = require("../controllers/UserController");

const router = express.Router();
// const { register } = require("../Middleware/Auth.js");

// router.route("/register").post(register);

router.get("/movies/top", async (req, res) => {
  const movieController = new MovieController();
  const topMoviesData = await movieController.fetchTopMovies();

  if (topMoviesData.error) {
    return res.status(500).json({ error: topMoviesData.error });
  }

  res.json(topMoviesData);
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
