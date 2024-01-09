const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
  try {
    const localDB = process.env.MONGODB_URL;
    await mongoose.connect(localDB, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = { connectToDatabase, mongoose };
