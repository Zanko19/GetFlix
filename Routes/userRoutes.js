const express = require("express");
const router = express.Router();
const path = require("path");
const UserController = new (require("../Controller/UserController"))();
const { register, login, update, deleteUser } = require("../Middleware/Auth");
const { adminAuth, userAuth } = require("../Middleware/authMiddleware");

//-----------------------------------------------------------------------------Users Routes
router.get("/", (req, res) => UserController.getUser(req, res));
router.post("/", (req, res) => UserController.createUser(req, res));
router.post("/register", register);
router.route("/login").post(login);
router.route("/update").put(adminAuth, update);

//-----------------------------------------------------------------------------Admin Routes
router.route("/deleteUser").delete(adminAuth, deleteUser);

//-----------------------------------------------------------------------------SIGNUP PAGE
router.get("/signup-page", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/singup.html"));
});

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role, icon } = req.body;

    const result = await UserController.signup({
      username,
      email,
      password,
      role,
      icon,
    });

    res.json({ message: "User created successfully", user: result });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message });
  }
});
//-----------------------------------------------------------------------------FORGOT PASSWORD
router.get("/reset-password", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/reset-password.html"));
});

router.post("/update-password/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const newPassword = req.body.newPassword;

    // Assuming you have the new role available in your request body
    const newRole = req.body.newRole;

    // Call the updatePassword method in the controller
    const updatedUser = await UserController.updatePassword(
      userId,
      newPassword,
      newRole
    );

    // Log the updated user details
    console.log("Updated user details:", updatedUser);

    res.json({
      message: "Password and role updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Error updating password and role" });
  }
});

// Route for initiating the password reset process
router.post("/forgot-password", async (req, res) => {
  try {
    const email = req.body.email;

    // Call the generateResetTokenByEmail method in the controller
    const resetToken = await UserController.generateResetTokenByEmail(email);

    // Call the sendResetEmail method in the controller
    await UserController.sendResetEmail(email, resetToken);

    res.json({
      success: true,
      message: "Password reset email sent successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ error: error.message, success: false });
  }
});

// Handle updating the password using the reset token
router.post("/reset-password/:resetToken", async (req, res) => {
  try {
    const resetToken = req.params.resetToken;
    const newPassword = req.body.newPassword;

    // Call the updatePasswordByResetToken method in the controller
    const updatedUser = await UserController.updatePasswordByResetToken(
      resetToken,
      newPassword
    );

    // Log the updated user details
    console.log("Updated user details:", updatedUser);

    res.json({
      success: true,
      message: "Password updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ error: error.message, success: false });
  }
});

module.exports = router;
