const connection = require('../config/db');
const Sequelize = require('sequelize');
const User = connection.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    age: Sequelize.INTEGER
});

module.exports = User;
