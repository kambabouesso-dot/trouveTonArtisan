// Gestionnaire d'erreurs centralisé : évite de divulguer des détails techniques au client
module.exports = function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ message: 'Une erreur est survenue.' });
};
