// Limite l'accès de l'API à la seule application front (clé partagée via variable d'environnement)
module.exports = function apiKeyAuth(req, res, next) {
  const providedKey = req.header('x-api-key');

  if (!providedKey || providedKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Accès non autorisé.' });
  }

  return next();
};
