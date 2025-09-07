const Post = require('../models/postModel');

// @desc    Get all posts
// @route   GET /api/posts
const getPosts = async (req, res) => {
  // Get the most recent 50 posts
  const posts = await Post.find({}).sort({ createdAt: -1 }).limit(50);
  res.json(posts);
};

// @desc    Create a new post
// @route   POST /api/posts
const createPost = async (req, res) => {
  const { text, authorName, userId } = req.body;
  if (!text) {
    return res.status(400).json({ message: 'Post text cannot be empty' });
  }
  const post = new Post({
    text,
    authorName,
    user: userId,
  });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

module.exports = { getPosts, createPost };
