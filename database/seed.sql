-- Script d'alimentation (jeu d'essai) de la base "Trouve ton artisan"
-- Données issues du jeu d'essai fourni (fichiers-à-joindre-au-devoir/data.xlsx)

USE trouve_ton_artisan;

INSERT INTO categories (nom) VALUES
  ('Alimentation'),
  ('Bâtiment'),
  ('Fabrication'),
  ('Services');

-- Une spécialité est rattachée à une seule catégorie (categorieId : 1=Alimentation, 2=Bâtiment, 3=Fabrication, 4=Services)
INSERT INTO specialites (nom, categorieId) VALUES
  ('Boucher', 1),
  ('Boulanger', 1),
  ('Chocolatier', 1),
  ('Traiteur', 1),
  ('Chauffagiste', 2),
  ('Electricien', 2),
  ('Menuisier', 2),
  ('Plombier', 2),
  ('Bijoutier', 3),
  ('Couturier', 3),
  ('Ferronier', 3),
  ('Coiffeur', 4),
  ('Fleuriste', 4),
  ('Toiletteur', 4),
  ('Webdesign', 4);

-- Un artisan apparaît dans une seule spécialité (specialiteId référencé ci-dessous)
INSERT INTO artisans (nom, note, localisation, aPropos, image, siteWeb, email, artisanDuMois, specialiteId) VALUES
  ('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'boucherie.dumond@gmail.com', FALSE, 1),
  ('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'aupainchaud@hotmail.com', TRUE, 2),
  ('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://chocolaterie-labbe.fr', 'chocolaterie-labbe@gmail.com', TRUE, 3),
  ('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://truchon-traiteur.fr', 'contact@truchon-traiteur.fr', FALSE, 4),
  ('Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'o-salmons@live.com', TRUE, 5),
  ('Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://mont-blanc-electricite.com', 'contact@mont-blanc-electricite.com', FALSE, 6),
  ('Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://boutot-menuiserie.com', 'boutot-menuiserie@gmail.com', FALSE, 7),
  ('Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://plomberie-bellemare.com', 'v.bellemare@gmail.com', FALSE, 8),
  ('Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'claude.quinn@gmail.com', FALSE, 9),
  ('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://lecuyer-couture.com', 'a.amitee@hotmail.com', FALSE, 10),
  ('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'e-carigan@hotmail.com', FALSE, 11),
  ('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'r.charbonneau@gmail.com', FALSE, 12),
  ('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://coiffure-leala-chambery.fr', 'l.dennos@hotmail.fr', FALSE, 12),
  ('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://sup-hair.fr', 'sup-hair@gmail.com', FALSE, 12),
  ('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://le-monde-des-fleurs-annonay.fr', 'contact@le-monde-des-fleurs-annonay.fr', FALSE, 13),
  ('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL, 'v-laredoute@gmail.com', FALSE, 14),
  ('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 'https://cm-graphisme.com', 'contact@cm-graphisme.com', FALSE, 15);
