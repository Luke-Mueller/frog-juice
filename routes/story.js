const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/story', (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "html", "story.html"));
});

module.exports = router;