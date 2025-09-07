// This file is the blueprint for how a "User" will be structured in our database.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 1. Define the schema for a user
const userSchema = mongoose.Schema(
  {
    // These are the fields each user will have.
    name: {
      type: String,
      required: true, // A name is mandatory.
    },
    email: {
      type: String,
      required: true, // An email is mandatory.
      unique: true, // Each email must be unique.
    },
    password: {
      type: String,
      required: true, // A password is mandatory.
    },
    xp: {
      type: Number,
      required: true,
      default: 0, // Users start with 0 XP.
    },
    level: {
      type: Number,
      required: true,
      default: 1, // Users start at level 1.
    },
    // We can add more fields later, like badges or completedModules.
    xpForNextLevel: {
        type: Number,
        required: true,
        default: 100, // The first level up requires 100 XP
    },
    completedModules: [
      {
        type: String, // We will store an array of module IDs, e.g., ["m01", "m02"]
      },
    ],
    badges: [
      {
        type: String, // We will store an array of badge names
      },
    ],
  },
  {
    // This automatically adds "createdAt" and "updatedAt" fields.
    timestamps: true,
  }
);

// 2. Add a special function to encrypt the password before saving
userSchema.pre('save', async function (next) {
  // This code runs right before a new user is saved to the database.
  // We only want to encrypt the password if it's new or has been changed.
  if (!this.isModified('password')) {
    next();
  }

  // Generate a "salt" to make the encryption stronger.
  const salt = await bcrypt.genSalt(10);
  // Encrypt the plain text password.
  this.password = await bcrypt.hash(this.password, salt);
});
// Add this new function to userModel.js

// 3. Add a method to compare entered password with the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 3. Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;