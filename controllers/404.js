exports.get404 = (req, res, next) => {
  res.status(400).render('404', { path: '/404', pageTitle: 'Page not found'});
};