-- Script d'alimentation (jeu d'essai) de la base "Trouve ton artisan"
-- À adapter/compléter avec le jeu de données fourni (fichiers-à-joindre-au-devoir/data.xlsx)

USE trouve_ton_artisan;

INSERT INTO categories (nom) VALUES
  ('Bâtiment'),
  ('Services'),
  ('Fabrication'),
  ('Alimentation');

INSERT INTO specialites (nom, categorieId) VALUES
  ('Maçon', 1),
  ('Électricien', 1),
  ('Coiffeur', 2),
  ('Menuisier', 3),
  ('Boulanger', 4);

INSERT INTO artisans (nom, note, localisation, aPropos, image, siteWeb, email, artisanDuMois, specialiteId) VALUES
  ('Jean Dupont Maçonnerie', 4.5, 'Lyon (69)', 'Artisan maçon depuis 15 ans, spécialisé en rénovation.', NULL, NULL, 'contact@dupont-maconnerie.fr', TRUE, 1),
  ('Élec Services', 4.0, 'Clermont-Ferrand (63)', 'Électricien certifié, interventions rapides.', NULL, NULL, 'contact@elec-services.fr', TRUE, 2),
  ('Salon Belle Coiffure', 5.0, 'Grenoble (38)', 'Coiffeur pour hommes, femmes et enfants.', NULL, 'https://belle-coiffure.fr', 'contact@belle-coiffure.fr', TRUE, 3);
