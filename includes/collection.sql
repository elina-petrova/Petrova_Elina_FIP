-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 06 2020 г., 21:23
-- Версия сервера: 5.7.31
-- Версия PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `dr_vuecomps`
--

-- --------------------------------------------------------

--
-- Структура таблицы `collection`
--

DROP TABLE IF EXISTS `collection`;
CREATE TABLE IF NOT EXISTS `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `tagline` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `thumb` varchar(20) NOT NULL,
  `type` varchar(10) NOT NULL,
  `year` int(4) NOT NULL,
  `technologies` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `collection`
--

INSERT INTO `collection` (`id`, `title`, `tagline`, `description`, `thumb`, `type`, `year`, `technologies`) VALUES
(1, 'Music Mixer', 'Modern piano with some beats', 'This is an interactive music mixer application that simulates a real-playing piano. Beats are added so that a user can play with different sounds and create modern and fresh sound designs. ', 'musicmixer.jpg', 'dev', 2020, 'HTML5 / CSS / JavaScript.'),
(2, 'Icon Marketplace', 'Cozy icon set', 'This is a simple webpage with CSS animations that shows the icons that I drew in Adobe Illustrator. The main theme is how to live happily. ', 'iconMarket.jpg', 'dev', 2020, 'HTML5 / CSS / JavaScript'),
(3, 'MiniApp', 'Latest Mini cars models', 'This project is an interactive gallery that shows new Mini car models. ', 'miniApp.jpg', 'dev', 2020, ' Sass / AJAX / Vue.js / PHP'),
(4, 'Kavorka', 'Handmade cosmetic brand', 'I created a brand identity, logo, and unique brand styling for Kavorka - a handmade makeup brand located in Latvia.', 'kavorka.jpg', 'design', 2020, ' Illustrator /  InDesign / Photoshop'),
(5, 'Olympic DataVis', 'Data Visualization', 'This infographic shows the number of medals each country won from 1896 - 2014.', 'olympic.jpg', 'design', 2020, 'Illustrator / Tableu'),
(6, '192 Bees', 'Branding Project', 'Deliverables: logo and wrapper for honey-making business and its products.', '192bees.jpg', 'design', 2020, 'Illustrator / Photoshop');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
