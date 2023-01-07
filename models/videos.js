const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  id: {
    type: String, 
    required: true, 
    unique: true
  },
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String
  },
  publishedAt: {
    type: String,
    required: true
  },
  thumbnails: {
    type: Object,
    required: true
  }
});

const Videos = mongoose.model("videos", videoSchema);

module.exports = Videos;