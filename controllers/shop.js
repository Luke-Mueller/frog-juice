exports.getShop = (req, res, next) => {
  res.render('shop', { 
    pageTitle: 'Frog Juice the Shop',
    path: '/shop'
  });
}