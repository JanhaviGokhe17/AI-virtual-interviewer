const mongoose = require("mongoose");

const InterviewResponseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assuming user model is User.js
    required: true
  },
  responses: [
    {
      question: String,
      answer: String
    }
  ],
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("InterviewResponse", InterviewResponseSchema);
