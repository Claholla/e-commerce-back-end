// Model dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Model extension
class Tag extends Model {}

// Model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Model export
module.exports = Tag;