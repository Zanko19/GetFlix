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

router.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/forgetpassword.html"));
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

router.post("/update-password/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const newPassword = req.body.newPassword;

    // Call the updatePassword method in the controller
    const updatedUser = await UserController.updatePassword(
      userId,
      newPassword
    );

    res.json({ message: "Password updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Error updating password" });
  }
});

// New route for reset password page
router.get("/reset-password", (req, res) => {
  // You can render a view or send an HTML file here
  res.sendFile(path.join(__dirname, "../views/reset-password.html"));
});

module.exports = router;
