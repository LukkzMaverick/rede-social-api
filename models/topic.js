const mongoose = require('mongoose');

const { Schema } = mongoose;

const TopicSchema = new Schema({
  title:  String
});
const Topic = mongoose.model('topic', TopicSchema)
module.exports = Topic;