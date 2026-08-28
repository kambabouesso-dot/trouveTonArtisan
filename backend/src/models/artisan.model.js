const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Un artisan apparaît dans une seule spécialité
const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
    defaultValue: 0,
    validate: { min: 0, max: 5 },
  },
  localisation: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  aPropos: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  siteWeb: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    validate: { isEmail: true },
  },
  artisanDuMois: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  tableName: 'artisans',
  timestamps: false,
});

module.exports = Artisan;
