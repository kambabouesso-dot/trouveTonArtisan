const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3001;

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données établie.');
    app.listen(PORT, () => console.log(`API démarrée sur le port ${PORT}`));
  })
  .catch((err) => {
    console.error('Impossible de se connecter à la base de données :', err.message);
    process.exit(1);
  });
