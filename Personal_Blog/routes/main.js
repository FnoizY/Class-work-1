const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Main Page.html'));
});

router.get('/Main%20Page.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Main Page.html'));
});

// Add other route handlers as needed

module.exports = router;
