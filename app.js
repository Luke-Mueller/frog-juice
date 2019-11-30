const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop');
const storyRoutes = require('./routes/story');

app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);
app.use(shopRoutes);
app.use(storyRoutes);

app.listen(3000);