const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB Connection successful");
  } catch (err) {
    console.error("ERROR ON DATABASE CONNECTION", err);
    process.exit(1); // Exit the process with an error code if the connection fails
  }

  // Connection Events
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });

  // Graceful shutdown of the connection when the process is terminated
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
  });
};
