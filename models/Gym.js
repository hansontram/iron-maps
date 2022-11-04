const mongoose = require("mongoose");

const GymSchema = new mongoose.Schema({
  gymName: {
    type: String,
    required: true,
  },
  image: {
    // TODO: change to array for multiple images
    type: String,        
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Gym", GymSchema);
