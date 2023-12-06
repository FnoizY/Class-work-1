const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Advanced%20Table.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Advanced Table.html'));
});

// Add other route handlers as needed

module.exports = router;
