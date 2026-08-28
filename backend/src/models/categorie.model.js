const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Une catégorie regroupe plusieurs spécialités (ex: Bâtiment, Services, Fabrication, Alimentation)
const Categorie = sequelize.define('Categorie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'categories',
  timestamps: false,
});

module.exports = Categorie;
