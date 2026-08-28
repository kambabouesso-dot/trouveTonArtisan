-- Crée un utilisateur dédié à l'API, en lecture seule.
-- L'API ne fait qu'interroger la base (les écritures seront faites par une application ultérieure).
CREATE USER IF NOT EXISTS 'ttarisan_api'@'localhost' IDENTIFIED BY 'dIvkzXhUOKpGqAacCR8WZDen';
GRANT SELECT ON trouve_ton_artisan.* TO 'ttarisan_api'@'localhost';
FLUSH PRIVILEGES;
