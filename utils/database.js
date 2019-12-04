const Sequelize = require('sequelize');

const sequelize = new Sequelize('frog_juice', 'root', 'frogjuice', { 
  dialect: 'mysql', 
  host: 'localhost'
});