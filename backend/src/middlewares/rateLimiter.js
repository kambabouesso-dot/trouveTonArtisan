const rateLimit = require('express-rate-limit');

// Limite le nombre de requêtes par IP pour se prémunir des attaques par force brute / DoS
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

// Limite plus stricte spécifique au formulaire de contact (anti-spam)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Trop de messages envoyés, veuillez réessayer plus tard.' },
});

module.exports = { apiLimiter, contactLimiter };
