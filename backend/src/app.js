require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const apiKeyAuth = require('./middlewares/apiKeyAuth');
const { apiLimiter } = require('./middlewares/rateLimiter');
const errorHandler = require('./middlewares/errorHandler');

const categorieRoutes = require('./routes/categorie.routes');
const artisanRoutes = require('./routes/artisan.routes');
const contactRoutes = require('./routes/contact.routes');

const app = express();

// En-têtes de sécurité HTTP standards (protection XSS, sniffing, clickjacking...)
app.use(helmet());

// Seule l'origine du frontend est autorisée à appeler l'API
app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));

app.use(express.json({ limit: '10kb' }));
app.use(morgan('combined'));
app.use(apiLimiter);

// Toutes les routes de données exigent la clé API partagée avec le frontend
app.use('/api', apiKeyAuth);
app.use('/api/categories', categorieRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api', contactRoutes);

app.use((req, res) => res.status(404).json({ message: 'Ressource introuvable.' }));
app.use(errorHandler);

module.exports = app;
