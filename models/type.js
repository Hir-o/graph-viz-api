const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');
const Graph = require('./graph');

const Type = sequelize.define('Type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,  // Store the data as a JSON object
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
}, {
    sequelize,
    tableName: 'Type',
});

Type.hasMany(Graph);
Graph.belongsTo(Type);

module.exports = Type;