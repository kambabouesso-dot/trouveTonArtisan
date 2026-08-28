-- Script de création de la base de données "Trouve ton artisan"
-- Relations : une catégorie a plusieurs spécialités, une spécialité a plusieurs artisans

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE specialites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  categorieId INT NOT NULL,
  CONSTRAINT fk_specialite_categorie
    FOREIGN KEY (categorieId) REFERENCES categories(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  note DECIMAL(2,1) NOT NULL DEFAULT 0,
  localisation VARCHAR(150) NOT NULL,
  aPropos TEXT,
  image VARCHAR(255),
  siteWeb VARCHAR(255),
  email VARCHAR(150) NOT NULL,
  artisanDuMois BOOLEAN NOT NULL DEFAULT FALSE,
  specialiteId INT NOT NULL,
  CONSTRAINT fk_artisan_specialite
    FOREIGN KEY (specialiteId) REFERENCES specialites(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE INDEX idx_artisan_nom ON artisans(nom);
