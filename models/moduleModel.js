const mongoose = require('mongoose');

// Define the structure for a single quiz question
const quizQuestionSchema = mongoose.Schema({
  q: { type: String, required: true }, // The question text
  o: [{ type: String, required: true }], // An array of options
  a: { type: Number, required: true }, // The index of the correct answer
});

// Define the schema for a learning module
const moduleSchema = mongoose.Schema(
  {
    // A unique ID we can use in the app, like "m01"
    moduleId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    xp: {
      type: Number,
      required: true,
    },
    badge: {
      type: String,
      required: false, // A badge is optional
    },
    // The quiz will be an array of questions, using the structure we defined above
    quiz: [quizQuestionSchema],
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;