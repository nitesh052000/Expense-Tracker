const mongoose = require("mongoose");

// connecting to database function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo db connected");
  } catch (error) {
    console.log(`Error in connecting MongoDb: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
