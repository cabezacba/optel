-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-12-2022 a las 20:43:45
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `optel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Menus`
--

CREATE TABLE `Menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parentID` int(11) DEFAULT NULL,
  `state` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Menus`
--

INSERT INTO `Menus` (`id`, `name`, `parentID`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'NewName', 2, 1, '2022-12-04 19:13:59', '2022-12-05 00:44:34'),
(2, 'Menu 2', NULL, 1, '2022-12-04 19:14:04', '2022-12-04 19:55:09'),
(3, 'Menu 3', NULL, 1, '2022-12-04 19:14:08', '2022-12-04 19:14:08'),
(4, 'Menu 4', 1, 1, '2022-12-04 19:14:22', '2022-12-04 19:14:22'),
(5, 'Menu 5', 1, 1, '2022-12-04 19:14:34', '2022-12-04 19:14:34'),
(6, 'Menu 6', 2, 1, '2022-12-04 19:14:42', '2022-12-04 19:14:42'),
(7, 'Menu 7', 2, 1, '2022-12-04 19:14:48', '2022-12-04 19:14:48'),
(9, 'Menu 8', 1, 1, '2022-12-04 22:32:33', '2022-12-04 22:32:33');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Menus`
--
ALTER TABLE `Menus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Menus`
--
ALTER TABLE `Menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
