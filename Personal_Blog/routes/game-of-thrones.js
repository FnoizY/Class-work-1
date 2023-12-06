const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/gameOfThrones.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'gameOfThrones.html'));
});

// Add other route handlers as needed

module.exports = router;
