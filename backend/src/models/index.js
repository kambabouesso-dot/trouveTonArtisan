const sequelize = require('../config/database');
const Categorie = require('./categorie.model');
const Specialite = require('./specialite.model');
const Artisan = require('./artisan.model');

// Une catégorie a plusieurs spécialités, une spécialité appartient à une catégorie
Categorie.hasMany(Specialite, { foreignKey: 'categorieId', onDelete: 'CASCADE' });
Specialite.belongsTo(Categorie, { foreignKey: 'categorieId' });

// Une spécialité a plusieurs artisans, un artisan appartient à une seule spécialité
Specialite.hasMany(Artisan, { foreignKey: 'specialiteId', onDelete: 'CASCADE' });
Artisan.belongsTo(Specialite, { foreignKey: 'specialiteId' });

module.exports = { sequelize, Categorie, Specialite, Artisan };
