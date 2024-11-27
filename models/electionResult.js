const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const ElectionResult = sequelize.define('ElectionResult', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    },
    results: {
        type: DataTypes.JSON,  // Store the data as a JSON object
        allowNull: false
      },
      customResult: {
        type: DataTypes.JSON
      }
}, {
    sequelize,
    tableName: 'Election_Result'
});

module.exports = ElectionResult;