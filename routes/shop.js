const express = require('express');

const router = express();

router.get('/shop', (req, res, next) => {
  res.render('shop', { 
    pageTitle: 'Frog Juice the Shop',
    path: '/shop'
  });
});

module.exports = router;