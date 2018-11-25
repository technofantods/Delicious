const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('Gary is fuckin TOOTHY!');
  res.send('Baba Booey is Ta Ta Toofy!');
});

module.exports = router;
