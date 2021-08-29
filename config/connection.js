// Connection dependencies
require('dotenv').config();
const mysql2 = require("mysql2");
const Sequelize = require('sequelize');

// Sequelize database setup
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.PORT,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;