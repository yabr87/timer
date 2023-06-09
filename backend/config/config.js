const { Sequelize } = require('sequelize');

const { DATABASE_NAME, DATABASE_HOST, USER_NAME, USER_PASSWORD } = process.env;

const db = new Sequelize(DATABASE_NAME, USER_NAME, USER_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'mysql',
});

module.exports = { db };
