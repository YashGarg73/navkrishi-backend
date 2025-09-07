const Module = require('../models/moduleModel');

// @desc    Fetch all modules
// @route   GET /api/modules
// @access  Public
const getModules = async (req, res) => {
  try {
    const modules = await Module.find({}); // find({}) gets all documents
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch a single module by its ID
// @route   GET /api/modules/:id
// @access  Public
const getModuleById = async (req, res) => {
  try {
    const module = await Module.findOne({ moduleId: req.params.id });
    if (module) {
      res.json(module);
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// THIS IS THE MOST IMPORTANT PART:
// We are ensuring that BOTH functions are included here.
module.exports = { getModules, getModuleById };

