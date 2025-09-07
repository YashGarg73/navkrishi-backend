const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// The registerUser and authUser functions are correct and remain unchanged.
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      xp: user.xp,
      level: user.level,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      xp: user.xp,
      level: user.level,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// @desc    Update user progress after a quiz
// @route   POST /api/users/progress
// @access  Private (for now)
// THIS IS THE FINAL, CORRECTED, AND MOST ROBUST FUNCTION:
// REPLACE the old updateUserProgress function with this one

const updateUserProgress = async (req, res) => {
  const { userId, moduleId, xp, badge } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.completedModules.includes(moduleId)) {
      return res.json(user);
    }

    // Add new XP and module/badge data
    user.xp += xp;
    user.completedModules.push(moduleId);
    if (badge) {
      user.badges.push(badge);
    }

    // THIS IS THE NEW LEVEL-UP LOGIC:
    // Check if the user has enough XP to level up.
    // A while loop handles the case where they earn enough for multiple levels at once.
    while (user.xp >= user.xpForNextLevel) {
      user.xp -= user.xpForNextLevel; // Subtract the XP needed for the level
      user.level += 1; // Increase their level
      // Make the next level require more XP (e.g., 1.5x harder)
      user.xpForNextLevel = Math.floor(user.xpForNextLevel * 1.5);
    }
    
    const updatedUser = await user.save(); // Save all the changes
    res.json(updatedUser);

  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ message: 'Server error while updating progress' });
  }
};
const getLeaderboard = async (req, res) => {
  // Find users, sort by XP descending, and take the top 10
  const users = await User.find({}).sort({ xp: -1 }).limit(10);
  res.json(users);
};

// I have corrected the typo here from 'module.A' to 'module.exports'
module.exports = { registerUser, authUser, updateUserProgress, getLeaderboard };

