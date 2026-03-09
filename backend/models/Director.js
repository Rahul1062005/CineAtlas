const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  birthYear: {
    type: Number
  },
  photo: {
    type: String
  }
});

module.exports = mongoose.model("Director", directorSchema);