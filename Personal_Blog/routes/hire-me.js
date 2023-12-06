const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Hire%20me.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Hire me.html'));
});

// Add other route handlers as needed

module.exports = router;
