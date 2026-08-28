# Trouve ton artisan

Plateforme permettant aux particuliers de la région Auvergne-Rhône-Alpes de trouver un
artisan par catégorie/spécialité et de le contacter via un formulaire.

## Structure du projet

```
frontend/   Application React (Vite + Bootstrap + Sass)
backend/    API REST (Express + Sequelize + MySQL)
database/   Scripts SQL de création (create.sql) et d'alimentation (seed.sql)
docs/       Dossier de rendu (contexte, MCD/MLD, sécurité...)
```

## Prérequis

- Node.js >= 18
- MySQL (ou MariaDB)
- npm

## Installation

### 1. Base de données

```bash
mysql -u root -p < database/create.sql
mysql -u root -p < database/seed.sql
```

### 2. Backend (API)

```bash
cd backend
npm install
cp .env.example .env   # puis renseigner les variables (BDD, clé API, SMTP...)
npm run dev
```

L'API démarre par défaut sur `http://localhost:3001`.

### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env   # puis renseigner VITE_API_URL et VITE_API_KEY (même valeur que backend/.env)
npm run dev
```

Le site est accessible par défaut sur `http://localhost:5173`.

## Sécurité de l'API

L'accès à l'API est réservé à l'application front : chaque requête doit contenir l'en-tête
`x-api-key` avec la valeur définie dans `API_KEY` (backend/.env). Le CORS est également
restreint à l'origine du frontend (`FRONTEND_ORIGIN`).

## Scripts disponibles

| Dossier   | Commande        | Description                    |
|-----------|-----------------|---------------------------------|
| backend   | `npm run dev`   | Démarre l'API avec rechargement à chaud |
| backend   | `npm start`     | Démarre l'API en production     |
| frontend  | `npm run dev`   | Démarre le serveur de développement Vite |
| frontend  | `npm run build` | Génère le build de production   |
