const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Contact%20info.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Contact info.html'));
});

// Add other route handlers as needed

module.exports = router;
