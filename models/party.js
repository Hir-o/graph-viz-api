const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const Party = sequelize.define('Party', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,  // Store the data as a JSON object
        allowNull: false
      },
      abbreviation:{
        type: DataTypes.STRING
      },
      color:{
        type: DataTypes.STRING,
      }
}, {
    sequelize,
    tableName: 'Party'
});

module.exports = Party;