const express = require("express");
const router = express.Router();
const InterviewResponse = require("../models/interview");

router.post("/submit", async (req, res) => {
  try {
    const { userId, responses } = req.body;

    const newResponse = new InterviewResponse({ userId, responses });
    await newResponse.save();

    res.status(200).json({ message: "Responses saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error saving responses." });
  }
});
