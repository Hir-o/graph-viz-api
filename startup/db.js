const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('graph_election_db', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;