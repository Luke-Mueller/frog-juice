const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { 
    pageTitle: 'Frog Juice',
    path: '/'
  });
});

module.exports = router;