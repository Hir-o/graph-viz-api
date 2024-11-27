const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const Municipality = sequelize.define('Municipality', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
      },
      abbreviation:{
        type: DataTypes.STRING
      },
}, {
    sequelize,
    tableName: 'Municipality'
});

module.exports = Municipality;