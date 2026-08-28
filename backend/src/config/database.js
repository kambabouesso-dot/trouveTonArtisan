require('dotenv').config();
const { Sequelize } = require('sequelize');

// Connexion unique à la base MySQL, réutilisée par tous les modèles
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
