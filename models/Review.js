const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  gymId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gym",
  },
  reviewBy: {
    type: String,
    ref: "User",
  },
  reviewById: {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
});

module.exports = mongoose.model("Review", ReviewSchema);
