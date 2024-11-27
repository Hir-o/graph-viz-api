const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');
const ElectionResult = require('./electionResult');

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

Party.hasOne(ElectionResult);
ElectionResult.belongsTo(Party);

module.exports = Party;