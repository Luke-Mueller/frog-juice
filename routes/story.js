const express = require('express');

const storyController = require('../controllers/story');

const router = express.Router();

router.get('/story', storyController.getStory);

module.exports = router;