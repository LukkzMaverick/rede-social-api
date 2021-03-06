const mongoose = require('mongoose');
const { Schema } = mongoose;

const opts = { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};

const PostSchema = new Schema({
  content:  String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'topic'
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  dislikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  comments:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }],
}, opts);
const Post = mongoose.model('post', PostSchema)
module.exports = Post;