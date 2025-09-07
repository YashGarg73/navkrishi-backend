const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,
  updateUserProgress,
  getLeaderboard, // We are now importing the new leaderboard function
} = require('../controllers/userController');

// Route for creating a new user
router.route('/').post(registerUser);

// Route for logging a user in
router.route('/login').post(authUser);

// Route for updating user progress after a quiz
router.route('/progress').post(updateUserProgress);

// THIS IS THE NEW ROUTE for the leaderboard
router.route('/leaderboard').get(getLeaderboard);

module.exports = router;

