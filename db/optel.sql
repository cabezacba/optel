-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-12-2022 a las 17:10:49
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
(1, 'NewName Menu1', 2, 1, '2022-12-04 19:13:59', '2022-12-04 20:06:45'),
(2, 'Menu 2', NULL, 1, '2022-12-04 19:14:04', '2022-12-04 19:55:09'),
(3, 'Menu 3', NULL, 1, '2022-12-04 19:14:08', '2022-12-04 19:14:08'),
(4, 'Menu 4', 1, 1, '2022-12-04 19:14:22', '2022-12-04 19:14:22'),
(5, 'Menu 5', 4, 1, '2022-12-04 19:14:34', '2022-12-04 19:14:34'),
(6, 'Menu 6', 5, 1, '2022-12-04 19:14:42', '2022-12-04 19:14:42'),
(7, 'Menu 7', 6, 1, '2022-12-04 19:14:48', '2022-12-04 19:14:48'),
(8, 'Menu 8', 6, 0, '2022-12-04 19:54:56', '2022-12-04 19:56:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `MenusToUsers`
--

CREATE TABLE `MenusToUsers` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  `MenuId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `MenusToUsers`
--

INSERT INTO `MenusToUsers` (`createdAt`, `updatedAt`, `UserId`, `MenuId`) VALUES
('2022-12-04 16:15:09', '2022-12-04 16:15:09', 1, 1),
('2022-12-04 16:16:14', '2022-12-04 16:16:14', 1, 2),
('2022-12-04 16:16:14', '2022-12-04 16:16:14', 1, 4),
('2022-12-04 16:16:41', '2022-12-04 16:16:41', 2, 2),
('2022-12-04 16:16:41', '2022-12-04 16:16:41', 3, 3),
('2022-12-04 16:17:01', '2022-12-04 16:17:01', 6, 6),
('2022-12-04 16:17:01', '2022-12-04 16:17:01', 6, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `state` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `username`, `name`, `lastname`, `password`, `email`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'javi', 'Horacio', 'Martinez', 'asf123fd', 'javierd@gmail.com', 1, '2022-12-04 19:08:13', '2022-12-04 19:52:40'),
(2, 'jose', 'Jose', 'Perez', 'asf123fd', 'joser@email.com', 1, '2022-12-04 19:08:40', '2022-12-04 19:08:40'),
(3, 'pedro', 'Pedro', 'Lopez', 'asf123fd', 'pedro@email.com', 1, '2022-12-04 19:09:03', '2022-12-04 19:09:03'),
(4, 'lionel', 'Lionel', 'Messi', 'asf123fd', 'lionel@email.com', 1, '2022-12-04 19:09:56', '2022-12-04 19:09:56'),
(5, 'beny', 'Benito', 'Cuba', 'asf123fd', 'beny@email.com', 1, '2022-12-04 19:10:23', '2022-12-04 19:10:23'),
(6, 'pablo', 'Pablo', 'Moreno', 'asf123fd', 'pablo@email.com', 1, '2022-12-04 19:10:48', '2022-12-04 19:10:48'),
(7, 'miguel', 'Cabrera', 'Last', 'asf123fd', 'miguel@email.com', 1, '2022-12-04 19:42:18', '2022-12-04 19:42:18');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Menus`
--
ALTER TABLE `Menus`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `MenusToUsers`
--
ALTER TABLE `MenusToUsers`
  ADD PRIMARY KEY (`UserId`,`MenuId`),
  ADD KEY `MenuId` (`MenuId`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Menus`
--
ALTER TABLE `Menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `MenusToUsers`
--
ALTER TABLE `MenusToUsers`
  ADD CONSTRAINT `MenusToUsers_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `MenusToUsers_ibfk_2` FOREIGN KEY (`MenuId`) REFERENCES `Menus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
