const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users'); // We are now correctly using this file
const modules = require('./data/modules');
const User = require('./models/userModel');
const Module = require('./models/moduleModel');
const connectDB = require('./config/db');

dotenv.config();

const importData = async () => {
  try {
    await connectDB(); // Ensure we are connected to the database first

    // Step 1: Clear all old data from the database
    await Module.deleteMany();
    await User.deleteMany();

    // Step 2: Insert the new, perfect data
    await User.insertMany(users); // Creates the new user with the correct structure
    await Module.insertMany(modules);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    await Module.deleteMany();
    await User.deleteMany();

    console.log('🗑️ Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

// This part checks if you ran the command with a '-d' flag
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}