const mongoose = require("mongoose");
const mongooseFuzzySearching = require('mongoose-fuzzy-searching')

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

videoSchema.plugin(mongooseFuzzySearching, { fields: ['title', 'description'] })

const Videos = mongoose.model("videos", videoSchema);

module.exports = Videos;