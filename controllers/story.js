exports.getStory = (req, res, next) => {
  res.render('story', { 
    pageTitle: 'Frog Juice the Story',
    path: '/story'
  });
}