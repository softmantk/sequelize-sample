const Sequelize = require('sequelize');
const connection = new Sequelize('seq_demo', 'root', 'root', {
    dialect: "mysql"
});


connection.sync({
    force: false
});


module.exports = connection
