const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/pinterest');
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  likes: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
