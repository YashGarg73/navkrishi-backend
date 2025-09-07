const express = require('express');
const router = express.Router();
// We need to tell this file to import BOTH functions from the controller.
const { getModules, getModuleById } = require('../controllers/moduleController');

// This route gets all the modules.
router.route('/').get(getModules);

// This route gets a single module by its ID.
router.route('/:id').get(getModuleById);

module.exports = router;

