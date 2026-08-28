const express = require('express');
const { param, query, validationResult } = require('express-validator');
const router = express.Router();
const {
  getArtisans,
  getArtisansDuMois,
  getArtisanById,
} = require('../controllers/artisan.controller');

// Bloque la requète si les paramètres fournis par le client sont invalides
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.get(
  '/',
  [
    query('categorieId').optional().isInt(),
    query('specialiteId').optional().isInt(),
    query('recherche').optional().trim().isLength({ max: 100 }),
  ],
  validate,
  getArtisans
);

router.get('/du-mois', getArtisansDuMois);

router.get('/:id', [param('id').isInt()], validate, getArtisanById);

module.exports = router;
