const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/Contact%20info.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Contact info.html'));
});

router.post('/submit-form', (req, res) => {

  const { name, title, email } = req.body;

  res.send(`Form submitted successfully. Name: ${name}, Title: ${title}, Email: ${email}`);
});


module.exports = router;
