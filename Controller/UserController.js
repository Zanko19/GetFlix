const User = require("../Model/user");
const bcrypt = require("bcrypt");

class UserController {
  //--------------------------------------------------------------------------sign up
  async signup(userData) {
    try {
      const { username, email, password, icon } = userData;

      if (!password) {
        throw { status: 400, message: "Password is required" };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        icon,
      });

      const result = await newUser.save();
      console.log("User created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error creating the user:", error);
      if (error.code === 11000) {
        throw { status: 400, message: "Email or username already exists." };
      } else {
        throw { status: 500, message: "Error creating the user" };
      }
    }
  }
  //--------------------------------------------------------------------------get user
  async getUser(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching the user" });
    }
  }
  //--------------------------------------------------------------------------create user
  async createUser(req, res) {
    try {
      console.log("Request headers:", req.headers);
      console.log("Request body:", req.body);

      const { username, email, password, icon } = req.body;
      const result = await this.signup({
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
  }

  //--------------------------------------------------------------------------forgot password

  async updatePassword(userId, newPassword) {
    try {
      // Check if password is provided
      if (!newPassword) {
        throw { status: 400, message: "New password is required" };
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password in MongoDB
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { password: hashedPassword },
        { new: true }
      );

      if (!updatedUser) {
        throw { status: 404, message: "User not found" };
      }

      console.log("Password updated successfully");
      return updatedUser;
    } catch (error) {
      console.error("Error updating password:", error);
      throw {
        status: error.status || 500,
        message: error.message || "Error updating password",
      };
    }
  }
}

module.exports = UserController;
