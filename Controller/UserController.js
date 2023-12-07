const User = require("../Model/user");
const bcrypt = require("bcrypt");

class UserController {
  async signup(userData) {
    try {
      const { username, email, password, role, icon } = userData;

      // Check if password is provided
      if (!password) {
        throw { status: 400, message: "Password is required" };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role,
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

  async createUser(req, res) {
    try {
      console.log("Request headers:", req.headers);
      console.log("Request body:", req.body);

      const { username, email, password, role, icon } = req.body;
      const result = await this.signup({
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
  }
}

module.exports = UserController;
