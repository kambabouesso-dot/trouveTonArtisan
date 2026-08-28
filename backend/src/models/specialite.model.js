const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Une spécialité est rattachée à une seule catégorie
const Specialite = sequelize.define('Specialite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'specialites',
  timestamps: false,
});

module.exports = Specialite;
