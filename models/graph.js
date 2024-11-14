const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const Graph = sequelize.define('Graph', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data: {
        type: DataTypes.JSON,  // Store the data as a JSON object
        allowNull: false
      },
}, {
    sequelize,
    tableName: 'Graph'
});

module.exports = Graph;