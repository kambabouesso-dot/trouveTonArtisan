const { Op } = require('sequelize');
const { Artisan, Specialite, Categorie } = require('../models');

const artisanAttributes = ['id', 'nom', 'note', 'localisation', 'image', 'siteWeb', 'aPropos'];

// Liste des artisans, filtrable par catégorie, spécialité ou recherche sur le nom
exports.getArtisans = async (req, res, next) => {
  try {
    const { categorieId, specialiteId, recherche } = req.query;
    const where = {};
    if (recherche) {
      where.nom = { [Op.like]: `%${recherche}%` };
    }
    if (specialiteId) {
      where.specialiteId = specialiteId;
    }

    const specialiteWhere = categorieId ? { categorieId } : undefined;

    const artisans = await Artisan.findAll({
      attributes: artisanAttributes,
      where,
      include: [{
        model: Specialite,
        attributes: ['id', 'nom'],
        where: specialiteWhere,
        include: [{ model: Categorie, attributes: ['id', 'nom'] }],
      }],
      order: [['nom', 'ASC']],
    });
    res.json(artisans);
  } catch (err) {
    next(err);
  }
};

// Les 3 artisans mis en avant sur la page d'accueil
exports.getArtisansDuMois = async (req, res, next) => {
  try {
    const artisans = await Artisan.findAll({
      attributes: artisanAttributes,
      where: { artisanDuMois: true },
      include: [{ model: Specialite, attributes: ['id', 'nom'] }],
      limit: 3,
    });
    res.json(artisans);
  } catch (err) {
    next(err);
  }
};

// Fiche complète d'un artisan
exports.getArtisanById = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      attributes: [...artisanAttributes, 'email'],
      include: [{
        model: Specialite,
        attributes: ['id', 'nom'],
        include: [{ model: Categorie, attributes: ['id', 'nom'] }],
      }],
    });

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan introuvable.' });
    }

    res.json(artisan);
  } catch (err) {
    next(err);
  }
};
