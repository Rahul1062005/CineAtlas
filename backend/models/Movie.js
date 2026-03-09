const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  year: {
    type: Number
  },

  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Director",
    required: true
  },

  country: {
    type: String
  },

  rating: {
    type: Number
  },

  popularity: {
    type: Number
  },

  poster: {
    type: String
  }
});

module.exports = mongoose.model("Movie", movieSchema);