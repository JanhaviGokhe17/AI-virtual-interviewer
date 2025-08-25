// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // adjust path if needed

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // store user data in response (you can also return a token here)
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
