// Model dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Model extension
class Category extends Model {}

// Model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Model export
module.exports = Category;
