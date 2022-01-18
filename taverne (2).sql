-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 18 jan. 2022 à 22:04
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `taverne`
--
CREATE DATABASE IF NOT EXISTS `taverne` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `taverne`;

-- --------------------------------------------------------

--
-- Structure de la table `achat`
--

DROP TABLE IF EXISTS `achat`;
CREATE TABLE IF NOT EXISTS `achat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_achat` date DEFAULT NULL,
  `id_boisson` int(11) DEFAULT NULL,
  `id_client` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrgygua15xhmu3qdjn28ymva4g` (`id_boisson`),
  KEY `FKhit11h0ok1k9meer0c1qucp4d` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `achat`
--

INSERT INTO `achat` (`id`, `date_achat`, `id_boisson`, `id_client`) VALUES
(1, '2021-12-08', 2, 10),
(2, '2021-12-08', 1, 10),
(4, '2022-01-17', 2, 10),
(5, '2022-01-17', 2, 10);

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cout` double NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `type_produit` varchar(255) DEFAULT NULL,
  `volume` double NOT NULL,
  `id_fournisseur` int(11) DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsj3w2fli459s4lsl77th2vqrn` (`id_fournisseur`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `cout`, `nom`, `type_produit`, `volume`, `id_fournisseur`, `version`) VALUES
(1, 12, 'Biere', 'Bush', 25, 6, 0),
(2, 12, 'Coca', 'Coca', 25, 7, 0),
(3, 150, 'Vodka', 'Vodka', 15, 8, 0),
(4, 5, 'Test Coca', 'Coca', 50, 8, 0),
(6, 120, 'Chouffe', 'Chouffe', 20, 8, 1),
(8, 120, 'Rhum', 'Rhum', 30, 8, 0),
(9, 110, 'Chouffe metro', 'Chouffe', 20, 6, 2),
(10, 50, 'Le BreizhCola', 'Coca', 30, 6, 0);

-- --------------------------------------------------------

--
-- Structure de la table `articles_de_stock`
--

DROP TABLE IF EXISTS `articles_de_stock`;
CREATE TABLE IF NOT EXISTS `articles_de_stock` (
  `Stock_id_stock` int(11) NOT NULL,
  `articles_id` int(11) NOT NULL,
  KEY `FK9q3j81epqroq940cite2xgcti` (`articles_id`),
  KEY `FKimwukrmg9f4teuuohlabm5re8` (`Stock_id_stock`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles_de_stock`
--

INSERT INTO `articles_de_stock` (`Stock_id_stock`, `articles_id`) VALUES
(1, 2),
(1, 2),
(2, 1),
(3, 3),
(4, 8),
(5, 6),
(6, 8);

-- --------------------------------------------------------

--
-- Structure de la table `bar`
--

DROP TABLE IF EXISTS `bar`;
CREATE TABLE IF NOT EXISTS `bar` (
  `id_bar` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `url_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_bar`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `bar`
--

INSERT INTO `bar` (`id_bar`, `nom`, `url_image`) VALUES
(1, 'Le Bar', 'assets\\images\\Bar1.png'),
(2, 'Le Meilleur Bar', 'assets\\images\\Bar2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `boisson`
--

DROP TABLE IF EXISTS `boisson`;
CREATE TABLE IF NOT EXISTS `boisson` (
  `Type_Boisson` varchar(31) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prixHT` double NOT NULL,
  `prixHThh` double NOT NULL,
  `tva` double NOT NULL,
  `id_bar` int(11) DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfwhp2p8xd70r13clr783ujtl3` (`id_bar`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `boisson`
--

INSERT INTO `boisson` (`Type_Boisson`, `id`, `nom`, `prixHT`, `prixHThh`, `tva`, `id_bar`, `version`) VALUES
('Alcool', 1, 'Demi de Biere', 5, 5, 1.2, 1, 0),
('Soft', 2, 'Bouteille de coca', 4, 4, 1.1, 1, 0),
('Alcool', 3, 'Vodka-coca', 6, 4, 1.2, 1, 0),
('Alcool', 5, 'Rhum-coca', 8, 5, 0, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `carte_client`
--

DROP TABLE IF EXISTS `carte_client`;
CREATE TABLE IF NOT EXISTS `carte_client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nbPoints` int(11) NOT NULL,
  `nb_points` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `carte_client`
--

INSERT INTO `carte_client` (`id`, `nbPoints`, `nb_points`) VALUES
(1, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

DROP TABLE IF EXISTS `compte`;
CREATE TABLE IF NOT EXISTS `compte` (
  `Type_Compte` varchar(31) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `artiste` varchar(255) DEFAULT NULL,
  `entreprise` varchar(255) DEFAULT NULL,
  `id_carte` int(11) DEFAULT NULL,
  `id_bar` int(11) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `version` int(11) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKvsg1ufkvuf5e7rucp6slfmbt` (`id_carte`),
  KEY `FKe7bu4xkyti845gkm6ihktodwf` (`id_bar`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `compte`
--

INSERT INTO `compte` (`Type_Compte`, `id`, `login`, `mail`, `nom`, `password`, `prenom`, `artiste`, `entreprise`, `id_carte`, `id_bar`, `enabled`, `version`, `date_naissance`) VALUES
('Intervenant', 1, 'Master', 'fabien@olicard.com', 'OLICARD', '$2a$10$16jISFF7jpD9V7wUq3YZ.O9aoDUOKEDTX8THAKCR0XHgj6KxYZYb2', 'Fabien', 'Fabien_OLICARD', 'mentalism&Co', NULL, NULL, b'1', 1, '1981-12-08'),
('Intervenant', 2, 'Abid', 'jordanabid@gmail.com', 'ABID', '$2a$10$BmEQ0QVETjvN9R4ezyC5rebVOIffqyt9Nx8242O1mPJ9fneJd4Nee', 'Jordan', 'Hypnotiseur/Mentaliste/Magicien', 'Auto-entrepreneur', NULL, NULL, b'1', 1, '1981-12-08'),
('Intervenant', 3, 'Wazaa', 'Atchoum', 'Salut', '$2a$10$NCHXOKOPZqqcJlVH4lS1iOCBQitWF1m2EuqlOYGnKvytlkeqc97Ha', 'Hello', 'Bingo', 'Ciao', NULL, NULL, b'1', 1, '1981-12-08'),
('Admin', 4, 'root', 'admin@mail.com', 'admin', '$2a$10$WohXUMn.sLPjK3l/48KfqOIVd5CrBf.Ub1xGYYxG976sng6nzqYUK', 'admin', NULL, NULL, NULL, NULL, b'1', 1, '1981-12-08'),
('Employe', 5, 'titi', 'employe@employe.com', 'employe', '$2a$10$SUCnhdcWbMUu5tpntAPC2OhiMQCCCei1bxaJXDRAYp7RVYDh2ux7S', 'employe', NULL, NULL, NULL, 1, b'1', 1, '1981-12-08'),
('Fournisseur', 6, 'Metro', 'metrcash&carry@metro.com', 'PELTIER', '$2a$10$FStFng0CwhwqCdMM0bhxh.lqA2QBsGInYyFb559Kpvh1RQgUiVVru', 'Pascal', NULL, 'MetroCash&CarryFrance', NULL, NULL, b'1', 1, '1981-12-08'),
('Fournisseur', 7, 'Leclerc', 'Leclerc@leclerc.com', 'MAUGER', '$2a$10$Xf07tJJigQKWnfhUgIz.JeG0lTOl4JUgxEVF2V.pO4/adbC9of2Sy', 'Christophe', NULL, 'Leclerc', NULL, NULL, b'1', 1, '1981-12-08'),
('Fournisseur', 8, 'Beer', 'C10_fournisseur@C10.com', 'DE-MARCELUS', '$2a$10$JU1h3HtnyjmbJXQk/5rHt.Ay4dIU74W0zV7.GsdHhFyyeYzp0uxkO', 'Guillaume', NULL, 'C10', NULL, NULL, b'1', 1, '1981-12-08'),
('Fournisseur', 9, 'Heineken', 'Beer@Heineken.com', 'GILET', '$2a$10$ohZdsGJ2TOmCCUBaIOWgV.DPN0flAwoxjcXdsixhvR3.QG2LBK.Ja', 'Pascal', NULL, 'Heineken', NULL, NULL, b'1', 1, '1981-12-08'),
('Client', 10, 'toto', 'bobdylan@mail.com', 'Bob', '$2a$10$yc8k2OlZBVPX5.luJvL85ejBEEkLF/AZRpUOdkkSupKZBA81fc.E2', 'Dylan', NULL, NULL, 1, NULL, b'1', 1, '1981-12-08');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `debut` time DEFAULT NULL,
  `fin` time DEFAULT NULL,
  `jour` date DEFAULT NULL,
  `remarque` varchar(255) DEFAULT NULL,
  `id_bar` int(11) DEFAULT NULL,
  `id_emp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKs9fb3bcn282889ydm6erap9x4` (`id_bar`),
  KEY `FKmgpsxvudruy2iqtkyc6l0vh77` (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `debut`, `fin`, `jour`, `remarque`, `id_bar`, `id_emp`) VALUES
(1, '10:52:04', '10:52:04', '2021-12-08', 'remarque', 1, 5);

-- --------------------------------------------------------

--
-- Structure de la table `intervention`
--

DROP TABLE IF EXISTS `intervention`;
CREATE TABLE IF NOT EXISTS `intervention` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coutIntervenant` int(11) DEFAULT NULL,
  `hDebut` datetime DEFAULT NULL,
  `hFin` datetime DEFAULT NULL,
  `prixClient` int(11) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `typeIntervention` varchar(255) DEFAULT NULL,
  `id_bar` int(11) NOT NULL,
  `id_intervenant` int(11) NOT NULL,
  `cout_intervenant` int(11) DEFAULT NULL,
  `h_debut` datetime DEFAULT NULL,
  `h_fin` datetime DEFAULT NULL,
  `prix_client` int(11) DEFAULT NULL,
  `type_intervention` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf6q4rap8bvu7lspiexrj7uxn7` (`id_bar`),
  KEY `FK5munyy6b146ta0mdv16b535c5` (`id_intervenant`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `intervention`
--

INSERT INTO `intervention` (`id`, `coutIntervenant`, `hDebut`, `hFin`, `prixClient`, `statut`, `typeIntervention`, `id_bar`, `id_intervenant`, `cout_intervenant`, `h_debut`, `h_fin`, `prix_client`, `type_intervention`, `date`) VALUES
(1, 250, '2021-12-08 09:52:05', '2021-12-08 09:52:05', 105, 'EnAttente', 'barmaid', 1, 3, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `seuil_limite` int(11) DEFAULT NULL,
  `volume_tot` double NOT NULL,
  `id_bar` int(11) DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id_stock`),
  KEY `FK8pah0km0jmvhm9lgkw1hw0550` (`id_bar`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id_stock`, `seuil_limite`, `volume_tot`, `id_bar`, `version`) VALUES
(1, NULL, 224.01, 1, 17),
(2, NULL, 99.75, 1, 3),
(3, NULL, 90, 1, 5),
(4, NULL, 60, 1, 1),
(5, NULL, 80, 1, 3),
(6, NULL, 30, 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `utilisation`
--

DROP TABLE IF EXISTS `utilisation`;
CREATE TABLE IF NOT EXISTS `utilisation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Volume` double NOT NULL,
  `id_boisson` int(11) DEFAULT NULL,
  `id_ingredient_stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7ua82lyrtygm7mgwefmfknm6y` (`id_boisson`),
  KEY `FKfth5nte38cf82kpw9vsuda49v` (`id_ingredient_stock`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisation`
--

INSERT INTO `utilisation` (`id`, `Volume`, `id_boisson`, `id_ingredient_stock`) VALUES
(1, 0.25, 1, 2),
(2, 0.33, 2, 1),
(3, 0.05, 3, 3),
(4, 0.33, 3, 1),
(7, 0.1, 5, 4),
(8, 0.25, 5, 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `achat`
--
ALTER TABLE `achat`
  ADD CONSTRAINT `FKhit11h0ok1k9meer0c1qucp4d` FOREIGN KEY (`id_client`) REFERENCES `compte` (`id`),
  ADD CONSTRAINT `FKrgygua15xhmu3qdjn28ymva4g` FOREIGN KEY (`id_boisson`) REFERENCES `boisson` (`id`);

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FKsj3w2fli459s4lsl77th2vqrn` FOREIGN KEY (`id_fournisseur`) REFERENCES `compte` (`id`);

--
-- Contraintes pour la table `articles_de_stock`
--
ALTER TABLE `articles_de_stock`
  ADD CONSTRAINT `FK9q3j81epqroq940cite2xgcti` FOREIGN KEY (`articles_id`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `FKimwukrmg9f4teuuohlabm5re8` FOREIGN KEY (`Stock_id_stock`) REFERENCES `stock` (`id_stock`);

--
-- Contraintes pour la table `boisson`
--
ALTER TABLE `boisson`
  ADD CONSTRAINT `FKfwhp2p8xd70r13clr783ujtl3` FOREIGN KEY (`id_bar`) REFERENCES `bar` (`id_bar`);

--
-- Contraintes pour la table `compte`
--
ALTER TABLE `compte`
  ADD CONSTRAINT `FKe7bu4xkyti845gkm6ihktodwf` FOREIGN KEY (`id_bar`) REFERENCES `bar` (`id_bar`),
  ADD CONSTRAINT `FKvsg1ufkvuf5e7rucp6slfmbt` FOREIGN KEY (`id_carte`) REFERENCES `carte_client` (`id`);

--
-- Contraintes pour la table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `FKmgpsxvudruy2iqtkyc6l0vh77` FOREIGN KEY (`id_emp`) REFERENCES `compte` (`id`),
  ADD CONSTRAINT `FKs9fb3bcn282889ydm6erap9x4` FOREIGN KEY (`id_bar`) REFERENCES `bar` (`id_bar`);

--
-- Contraintes pour la table `intervention`
--
ALTER TABLE `intervention`
  ADD CONSTRAINT `FK5munyy6b146ta0mdv16b535c5` FOREIGN KEY (`id_intervenant`) REFERENCES `compte` (`id`),
  ADD CONSTRAINT `FKf6q4rap8bvu7lspiexrj7uxn7` FOREIGN KEY (`id_bar`) REFERENCES `bar` (`id_bar`);

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `FK8pah0km0jmvhm9lgkw1hw0550` FOREIGN KEY (`id_bar`) REFERENCES `bar` (`id_bar`);

--
-- Contraintes pour la table `utilisation`
--
ALTER TABLE `utilisation`
  ADD CONSTRAINT `FK7ua82lyrtygm7mgwefmfknm6y` FOREIGN KEY (`id_boisson`) REFERENCES `boisson` (`id`),
  ADD CONSTRAINT `FKfth5nte38cf82kpw9vsuda49v` FOREIGN KEY (`id_ingredient_stock`) REFERENCES `stock` (`id_stock`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
