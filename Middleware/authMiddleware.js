// Exemple d'un middleware d'authentification (authMiddleware.js)
const authMiddleware = (req, res, next) => {
  // Vérifier l'authentification ici
  // Si l'utilisateur est authentifié, continuez
  // Sinon, redirigez ou renvoyez une erreur
  next();
};

module.exports = authMiddleware;
