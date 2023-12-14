const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./.env" });

const MovieRoutes = require("./Routes/MovieRoutes");
const UserRoutes = require("./Routes/userRoutes");
const path = require("path");
const { TokenKey } = require("./Model/AccesMovieDb");
const MovieController = require("./Controller/MovieDbFilter");
const UserController = require("./Controller/UserController");
const { connectToDatabase } = require("./Config/database");
const bodyParser = require("body-parser");

// Middleware
app.use("./Middleware/Auth", require("./Routes/userRoutes"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/movies", MovieRoutes);
app.use("/users", UserRoutes);

//const movieController = new MovieController(TokenKey);
const userController = new UserController();
const PORT = process.env.PORT || 8080;

// Top Movies Endpoint
/*app.get("/movies/top", async (req, res) => {
  console.log("salut la mif");
  try {
    const topMoviesData = await movieController.fetchTopMovies();

    if (topMoviesData.error) {
      return res.status(500).json({ error: topMoviesData.error });
    }

    res.json(topMoviesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});*/

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

// 404 Not Found Error Handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
