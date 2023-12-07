const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to indicate a failed connection
  }
};

module.exports = { connectToDatabase, mongoose };
