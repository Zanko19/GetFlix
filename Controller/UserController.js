const User = require("../Model/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

class UserController {
  //--------------------------------------------------------------------------sign up
  async signup(userData) {
    try {
      const { username, email, password, role, icon } = userData;

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

  //--------------------------------------------------------------------------forgot password

  async generateResetToken(userId) {
    try {
      const resetToken = crypto.randomBytes(20).toString("hex");
      await User.findByIdAndUpdate(userId, { resetToken });
      return resetToken;
    } catch (error) {
      console.error("Error generating reset token:", error);
      throw {
        status: error.status || 500,
        message: error.message || "Error generating reset token",
      };
    }
  }

  //--------------------------------------------------------------------------send email config
  async sendResetEmail(email, resetToken) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bemovie331@gmail.com",
          pass: "bemovie1234",
        },
      });

      // Send email
      await transporter.sendMail({
        to: email,
        subject: "Password Reset",
        html: `<p>Click <a href="http://localhost:8080/users/reset-password/${resetToken}">here</a> to reset your password.</p>`,
      });
    } catch (error) {
      console.error("Error sending reset email:", error);
      throw {
        status: error.status || 500,
        message: error.message || "Error sending reset email",
      };
    }
  }

  async updatePasswordByResetToken(resetToken, newPassword) {
    try {
      const user = await User.findOne({ resetToken });

      if (!user) {
        throw { status: 404, message: "Invalid or expired reset token" };
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password and reset token in MongoDB
      user.password = hashedPassword;
      user.resetToken = null; // Clear the reset token
      await user.save();

      console.log("Password updated successfully");
      return user;
    } catch (error) {
      console.error("Error updating password by reset token:", error);
      throw {
        status: error.status || 500,
        message: error.message || "Error updating password by reset token",
      };
    }
  }
}

module.exports = UserController;
