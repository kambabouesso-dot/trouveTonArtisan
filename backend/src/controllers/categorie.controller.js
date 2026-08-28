const { Categorie, Specialite } = require('../models');

// Utilisé par le header pour construire le menu de navigation
exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Categorie.findAll({
      attributes: ['id', 'nom'],
      include: [{ model: Specialite, attributes: ['id', 'nom'] }],
      order: [['nom', 'ASC']],
    });
    res.json(categories);
  } catch (err) {
    next(err);
  }
};
