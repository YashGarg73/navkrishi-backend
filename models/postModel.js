const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
    authorName: { type: String, required: true },
    // We link the post to a user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
