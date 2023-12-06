const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/tic%20tac%20toe.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'tic tac toe.html'));
});

// Add other route handlers as needed

module.exports = router;
