// This file handles the connection to our MongoDB database.

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // We try to connect to the database using the connection string
    // from our .env file.
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // If the connection is successful, we print a confirmation message.
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there is an error, we print the error message and exit.
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;