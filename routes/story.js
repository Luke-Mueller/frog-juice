const express = require('express');

const router = express.Router();

router.get('/story', (req, res, next) => {
  res.render('story', { 
    pageTitle: 'Frog Juice the Story',
    path: '/story'
  });
});

module.exports = router;