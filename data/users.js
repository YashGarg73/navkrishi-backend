const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Test Farmer',
    email: 'farmer@test.com',
    password: bcrypt.hashSync('password123', 10),
    xp: 0,
    level: 1,
    xpForNextLevel: 100, // Added the new field here
  },
];

module.exports = users;
