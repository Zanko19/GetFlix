const express = require("express");
const router = express.Router();
const path = require("path");
const UserController = new (require("../Controller/UserController"))();

router
  .get("/", (req, res) => UserController.getUser(req, res))
  .post("/", (req, res) => UserController.createUser(req, res));

router.get("/signup-page", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/singup.html"));
});

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, icon } = req.body;

    const result = await UserController.signup({
      username,
      email,
      password,
      icon,
    });

    res.json({ message: "User created successfully", user: result });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message });
  }
});

module.exports = router;
