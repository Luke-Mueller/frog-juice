const express = require('express');

const app = express();

const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop');

app.use(indexRoutes);
app.use(shopRoutes);

app.listen(3000);