const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;