-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-03-2022 a las 02:35:50
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Interfectorem-Eros-Zebrands`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacion`
--

CREATE TABLE `asignacion` (
  `id_empleado_member` int(11) NOT NULL,
  `id_empleado_assistant` int(11) NOT NULL,
  `fecha_asignacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asignacion`
--

INSERT INTO `asignacion` (`id_empleado_member`, `id_empleado_assistant`, `fecha_asignacion`) VALUES
(22, 1, '2005-03-22'),
(23, 1, '2005-03-22'),
(24, 1, '2005-03-22'),
(25, 1, '2005-03-22'),
(26, 1, '2005-03-22'),
(1, 2, '2006-03-22'),
(3, 2, '2006-03-22'),
(10, 2, '2006-03-22'),
(17, 2, '2006-03-22'),
(4, 3, '2005-03-22'),
(5, 3, '2005-03-22'),
(6, 3, '2005-03-22'),
(7, 3, '2005-03-22'),
(8, 3, '2005-03-22'),
(9, 3, '2005-03-22'),
(11, 10, '2006-03-22'),
(12, 10, '2006-03-22'),
(13, 10, '2006-03-22'),
(14, 10, '2006-03-22'),
(15, 10, '2006-03-22'),
(16, 10, '2006-03-22'),
(17, 16, '2009-03-22'),
(18, 17, '2006-03-22'),
(19, 17, '2006-03-22'),
(20, 17, '2006-03-22'),
(21, 17, '2006-03-22'),
(17, 20, '2009-03-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco_preguntas`
--

CREATE TABLE `banco_preguntas` (
  `id_pregunta` int(11) NOT NULL,
  `pregunta` varchar(255) DEFAULT NULL,
  `index_pregunta` int(11) DEFAULT NULL,
  `nivel_pregunta` decimal(65,1) DEFAULT NULL,
  `dimension_craft` varchar(45) DEFAULT NULL,
  `dimension_personal` varchar(45) DEFAULT NULL,
  `dimension_business` varchar(45) DEFAULT NULL,
  `tipo_pregunta` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `banco_preguntas`
--

INSERT INTO `banco_preguntas` (`id_pregunta`, `pregunta`, `index_pregunta`, `nivel_pregunta`, `dimension_craft`, `dimension_personal`, `dimension_business`, `tipo_pregunta`) VALUES
(1, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 1, '1.0', 'FALSO', 'FALSO', 'FALSO', 'abierta'),
(2, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 2, '1.0', 'VERDADERO', 'VERDADERO', 'VERDADERO', 'numerica'),
(3, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 3, '5.0', 'FALSO', 'FALSO', 'FALSO', 'calificacion'),
(4, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 4, '3.0', 'FALSO', 'FALSO', 'FALSO', 'numerica'),
(5, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 5, '3.0', 'FALSO', 'FALSO', 'VERDADERO', 'numerica'),
(6, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 6, '3.0', 'FALSO', 'FALSO', 'VERDADERO', 'abierta'),
(7, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 7, '1.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion'),
(8, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 8, '2.0', 'VERDADERO', 'FALSO', 'VERDADERO', 'numerica'),
(9, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 9, '2.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion'),
(10, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 10, '5.0', 'VERDADERO', 'FALSO', 'FALSO', 'abierta'),
(11, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 11, '1.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion'),
(12, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 12, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion'),
(13, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 13, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion'),
(14, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 14, '5.0', 'VERDADERO', 'FALSO', 'FALSO', 'abierta'),
(15, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 15, '3.0', 'FALSO', 'FALSO', 'VERDADERO', 'numerica'),
(16, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 16, '4.0', 'FALSO', 'FALSO', 'VERDADERO', 'calificacion'),
(17, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 17, '3.0', 'FALSO', 'FALSO', 'VERDADERO', 'numerica'),
(18, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 18, '2.0', 'FALSO', 'FALSO', 'VERDADERO', 'abierta'),
(19, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 19, '2.0', 'FALSO', 'FALSO', 'VERDADERO', 'calificacion'),
(20, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 20, '4.0', 'FALSO', 'FALSO', 'VERDADERO', 'calificacion'),
(21, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 21, '1.0', 'FALSO', 'FALSO', 'FALSO', 'abierta'),
(22, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 22, '3.0', 'VERDADERO', 'FALSO', 'FALSO', 'abierta'),
(23, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 23, '1.0', 'VERDADERO', 'FALSO', 'FALSO', 'numerica'),
(24, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 24, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion'),
(25, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 25, '5.0', 'VERDADERO', 'FALSO', 'FALSO', 'numerica'),
(26, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 26, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'numerica'),
(27, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 27, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'abierta'),
(28, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 28, '5.0', 'VERDADERO', 'FALSO', 'FALSO', 'numerica'),
(29, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 29, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'numerica'),
(30, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>1?', 30, '4.0', 'VERDADERO', 'FALSO', 'FALSO', 'calificacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chapter`
--

CREATE TABLE `chapter` (
  `id_chapter` int(11) NOT NULL,
  `nombre_chapter` varchar(45) DEFAULT NULL,
  `descripcion_chapter` varchar(255) DEFAULT NULL,
  `cantidad_empleados` int(11) DEFAULT NULL,
  `matriz` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `chapter`
--

INSERT INTO `chapter` (`id_chapter`, `nombre_chapter`, `descripcion_chapter`, `cantidad_empleados`, `matriz`) VALUES
(1, 'Software Development', 'Se encargan de dar soporte tecnológico a las plataformas activas de la empresa. Así mismo innovan utilizando nuevas tecnologías.', 26, 'https://i.pinimg.com/736x/14/e5/ec/14e5ec42a1e207d054cf1502ad86ea66--curriculum-design-teaching-tools.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chaptermood`
--

CREATE TABLE `chaptermood` (
  `id_chaptermood` int(11) NOT NULL,
  `puntaje_mood` int(11) DEFAULT NULL,
  `status_mood` tinyint(4) DEFAULT NULL,
  `id_periodo` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `chaptermood`
--

INSERT INTO `chaptermood` (`id_chaptermood`, `puntaje_mood`, `status_mood`, `id_periodo`, `id_empleado`) VALUES
(1, 3, 1, 1, 1),
(2, 4, 1, 2, 2),
(3, NULL, 0, 3, 3),
(4, 2, 1, 4, 4),
(5, 3, 1, 5, 5),
(6, 2, 1, 6, 6),
(7, NULL, 0, 7, 7),
(8, NULL, 0, 8, 8),
(9, 4, 1, 9, 9),
(10, 2, 1, 10, 10),
(11, 4, 1, 11, 11),
(12, NULL, 0, 12, 12),
(13, 3, 1, 13, 13),
(14, 2, 1, 14, 14),
(15, 4, 1, 15, 15),
(16, NULL, 0, 16, 16),
(17, NULL, 0, 17, 17),
(18, 2, 1, 18, 18),
(19, 3, 1, 19, 19),
(20, NULL, 0, 20, 20),
(21, 5, 1, 21, 21),
(22, NULL, 0, 22, 22),
(23, NULL, 0, 23, 23),
(24, 1, 1, 24, 24),
(25, 5, 1, 25, 25),
(26, 4, 1, 26, 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido_paterno` varchar(45) DEFAULT NULL,
  `apellido_materno` varchar(45) DEFAULT NULL,
  `nivel_general` decimal(65,1) DEFAULT NULL,
  `nivel_craft` decimal(65,1) DEFAULT NULL,
  `nivel_business` decimal(65,1) DEFAULT NULL,
  `nivel_people` decimal(65,1) DEFAULT NULL,
  `correo_electronico` varchar(255) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `equipo` varchar(45) DEFAULT NULL,
  `id_chapter` int(11) NOT NULL,
  `imagen_perfil` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `nombre`, `apellido_paterno`, `apellido_materno`, `nivel_general`, `nivel_craft`, `nivel_business`, `nivel_people`, `correo_electronico`, `password`, `equipo`, `id_chapter`, `imagen_perfil`) VALUES
(1, 'Bernardo', 'Laing', 'Pérez', '3.1', '3.1', '3.1', '2.2', 'bernlain@zeb.mx', '\"V!Cx2>?J=NFD{jB\"', 'ZeCore Client', 1, 'EJ221'),
(2, 'Nicolas', 'Rodríguez', 'Muñoz', '2.2', '2.2', '2.2', '4.2', 'nicoro@zeb.mx', 'DJhV@;ezr#gKS6{}', 'ZeCore Payments', 1, 'EJ222'),
(3, 'Gabriel', 'Huitrón', 'Bolaños', '3.1', '3.3', '2.3', '2.1', 'gabhuibol@zeb.mx', 'W*V@3Qg}FZhqHs5Q', 'ZeCore Shipping', 1, 'EJ223'),
(4, 'Alma', 'Patiño', 'Santana', '3.3', '4.2', '4.3', '2.3', 'almpatsan@zeb.mx', 'N/5ay`7x%_', 'ZeCore Client', 1, 'EJ224'),
(5, 'Oriana', 'Gaterol', 'Amogus', '2.2', '2.2', '1.3', '3.3', 'origatamon@zeb.mx', 'ZhqHs5Q&', 'ZeCore Client', 1, 'EJ225'),
(6, 'Felipe', 'Ossandon', 'Capybara', '1.3', '1.3', '1.2', '2.2', 'feliosscap@zeb.mx', 'vmY#B659]}n', 'Client+SM', 1, 'EJ226'),
(7, 'Carlos', 'Ríos', 'Sánchez', '2.3', '2.3', '2.3', '4.1', 'carrisa@zeb.mx', 'u0shjHO', 'Production Engineering', 1, 'EJ227'),
(8, 'Diego', 'Avedaño', 'Valdés', '4.1', '4.1', '4.3', '4.1', 'diegaval@zeb.mx', '99JurcTSDH9B', 'ZeCore Shipping', 1, 'EJ228'),
(9, 'Valter', 'Núñez', 'del Moral', '2.2', '2.3', '1.2', '1.3', 'valnunmor@zeb.mx', 'KvxWGN2ZzBH', 'ZeCore Client', 1, 'EJ229'),
(10, 'Pedro', 'Rodríguez', 'Rodríguez', '2.2', '3.3', '2.1', '1.2', 'sunny.bartell@hotmail.com', 'ix5EtfT1E', 'ZeCore Client', 1, 'EJ010'),
(11, 'Natalia', 'Rodríguez', 'Martínez', '4.1', '4.1', '4.1', '3.1', 'tanner.bernier@gmail.com', 'HfPa0aGT', 'ZeCore Client', 1, 'EJ011'),
(12, 'Edgar', 'Santana', 'Matute', '3.2', '3.3', '4.2', '2.2', 'keyshawn.kreiger@gmail.com', 'SYtOKN3R', 'ZeCore CRM', 1, 'EJ012'),
(13, 'Cristhian', 'Abarca', 'Alberca', '1.2', '1.2', '1.3', '2.3', 'nernser@orn.info', 'PtWXyJuzS', 'ZeCore WMS', 1, 'EJ013'),
(14, 'Ivan', 'Celis', 'Cea', '1.2', '1.2', '1.3', '3.2', 'collins.elfrieda@gmail.com', 'YRMBNH1Rhq', 'ZeCore WMS', 1, 'EJ014'),
(15, 'Kevin', 'Rojas', 'Ladino', '1.1', '1.1', '2.2', '1.1', 'zola65@sanford.info', '6KE4Hk33Xcv', 'ZeCore CRM', 1, 'EJ015'),
(16, 'Cristian', 'Rico', 'Espinosa', '1.3', '1.3', '2.3', '1.1', 'aparisian@gmail.com', 'nPK82QB4', 'Production Engineering', 1, 'EJ016'),
(17, 'Julio', 'Celis', 'Romero', '3.2', '3.2', '4.1', '3.3', 'gframi@gmail.com', 'g2ZsGVns', 'ZeCore Payments', 1, 'EJ017'),
(18, 'Aldo', 'Rivera', 'Morales', '4.3', '4.3', '4.3', '4.3', 'oswald14@crona.biz', 'QqRrvFzl63e', 'ZeCore Shipping', 1, 'EJ01'),
(19, 'Erick', 'Samaniego', 'Becerra', '3.2', '5.1', '4.2', '2.2', 'bogan.aurore@nader.com', 'NE6cyxvZUXo', 'ZeCore Payments', 1, 'EJ0'),
(20, 'Matias', 'Becerra', 'Alanís', '2.2', '5.3', '1.2', '5.3', 'pgoodwin@mills.com', 'vtIx9r', 'Zeus', 1, 'EJ020'),
(21, 'Abraham', 'Febres', 'del Moral', '2.2', '2.2', '5.1', '4.3', 'turner.mueller@gmail.com', 'WCLCnBE', 'ZeCore CRM', 1, 'EJ021'),
(22, 'Adrian', 'Matute', 'Beltrán', '3.3', '3.2', '4.2', '3.1', 'daren46@cremin.com', 'YH19byb7vW', 'Production Engineering', 1, 'EJ022'),
(23, 'Fermin', 'Méndez', 'García', '3.1', '2.3', '2.2', '4.2', 'van44@gmail.com', 'DrFZbO1NI', 'Production Engineering', 1, 'EJ023'),
(24, 'Ricardo', 'Núñez', 'Alanís', '1.1', '1.1', '1.1', '1.1', 'grady.kenna@reilly.info', 'PjYuRp0y', 'Production Engineering', 1, 'EJ024'),
(25, 'Olivia', 'Morales', 'Quezada', '2.2', '2.1', '3.3', '1.2', 'kovacek.brock@dickens.biz', 'E6i8KgNq', 'Production Engineering', 1, 'EJ025'),
(26, 'Angel', 'Rico', 'Mendieta', '4.1', '4.3', '3.1', '1.2', 'julius34@wiegand.com', 'NPWkamM', 'Production Engineering', 1, 'EJ026');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado_rol`
--

CREATE TABLE `empleado_rol` (
  `id_empleado` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `fecha_rol` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleado_rol`
--

INSERT INTO `empleado_rol` (`id_empleado`, `id_rol`, `fecha_rol`) VALUES
(26, 1, '2026-01-22'),
(9, 2, '2009-01-22'),
(10, 2, '2010-01-22'),
(20, 2, '2020-01-22'),
(22, 2, '2022-01-22'),
(24, 2, '2024-01-22'),
(1, 3, '2001-01-22'),
(2, 3, '2002-01-22'),
(3, 3, '2003-01-22'),
(4, 3, '2004-01-22'),
(5, 3, '2005-01-22'),
(6, 3, '2006-01-22'),
(7, 3, '2007-01-22'),
(8, 3, '2008-01-22'),
(11, 3, '2011-01-22'),
(12, 3, '2012-01-22'),
(13, 3, '2013-01-22'),
(14, 3, '2014-01-22'),
(15, 3, '2015-01-22'),
(16, 3, '2016-01-22'),
(17, 3, '2017-01-22'),
(18, 3, '2018-01-22'),
(19, 3, '2019-01-22'),
(21, 3, '2021-01-22'),
(23, 3, '2023-01-22'),
(25, 3, '2025-01-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion`
--

CREATE TABLE `evaluacion` (
  `id_empleado_evaluador` int(11) NOT NULL,
  `id_empleado_evaluado` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL,
  `id_feedback` int(11) NOT NULL,
  `nivel_contestan` varchar(45) DEFAULT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  `fecha_realizacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `evaluacion`
--

INSERT INTO `evaluacion` (`id_empleado_evaluador`, `id_empleado_evaluado`, `id_periodo`, `id_feedback`, `nivel_contestan`, `estatus`, `fecha_realizacion`) VALUES
(2, 1, 1, 2, '3.1', 'Contestado', '2012-02-19'),
(2, 1, 4, 7, '3.1', 'Contestado', '2012-10-19'),
(2, 3, 2, 5, '3.1', 'Contestado', '2026-04-19'),
(2, 3, 5, 26, '3.1', 'Contestado', '2022-01-20'),
(2, 5, 6, 1, '2.2', 'Contestado', '2005-03-20'),
(2, 5, 13, 5, '2.2', 'Contestado', '2001-01-22'),
(2, 6, 3, 3, '1.3', 'Contestado', '2023-07-19'),
(2, 7, 7, 2, '2.3', 'Contestado', '2006-08-20'),
(2, 7, 11, 26, '2.3', 'Contestado', '2002-07-21'),
(2, 7, 12, 2, '2.3', 'Contestado', '2004-10-21'),
(2, 9, 8, 3, '3.1', 'Contestado', '2015-10-20'),
(2, 11, 4, 12, '4.1', 'No Contestado', NULL),
(2, 12, 2, 9, '3.2', 'No Contestado', NULL),
(2, 13, 1, 10, '1.2', 'Contestado', '2012-02-19'),
(2, 14, 13, 12, '1.2', 'Contestado', '2001-01-22'),
(2, 15, 12, 3, '1.1', 'Contestado', '2004-10-21'),
(2, 16, 11, 5, '1.3', 'Contestado', '2002-07-21'),
(2, 17, 10, 2, '3.2', 'Contestado', '2008-04-21'),
(2, 18, 5, 10, '4.3', 'Contestado', '2022-01-20'),
(2, 18, 9, 26, '4.3', 'Contestado', '2004-01-21'),
(2, 19, 1, 6, '3.2', 'Contestado', '2012-02-19'),
(2, 19, 8, 7, '3.2', 'Contestado', '2015-10-20'),
(2, 20, 2, 1, '2.2', 'Contestado', '2026-04-19'),
(2, 20, 7, 4, '2.2', 'Contestado', '2006-08-20'),
(2, 21, 3, 4, '2.2', 'Contestado', '2023-07-19'),
(2, 21, 6, 1, '2.2', 'Contestado', '2005-03-20'),
(2, 22, 5, 6, '3.3', 'Contestado', '2022-01-20'),
(2, 23, 4, 9, '3.1', 'Contestado', '2012-10-19'),
(2, 24, 3, 10, '1.1', 'Contestado', '2023-07-19'),
(2, 25, 2, 12, '2.2', 'Contestado', '2026-04-19'),
(2, 26, 1, 3, '4.1', 'Contestado', '2012-02-19'),
(4, 1, 7, 6, '3.1', 'Contestado', '2006-08-20'),
(4, 1, 10, 7, '3.1', 'Contestado', '2008-04-21'),
(4, 3, 8, 1, '3.1', 'Contestado', '2015-10-20'),
(4, 6, 6, 9, '1.3', 'Contestado', '2005-03-20'),
(4, 6, 9, 4, '1.3', 'Contestado', '2004-01-21'),
(4, 8, 6, 7, '4.1', 'Contestado', '2005-03-20'),
(4, 9, 5, 4, '2.2', 'Contestado', '2022-01-20'),
(4, 10, 4, 1, '2.2', 'Contestado', '2012-10-19'),
(4, 11, 3, 6, '4.1', 'No Contestado', NULL),
(4, 11, 9, 4, '1.3', 'Contestado', '2004-01-21'),
(4, 12, 7, 26, '3.2', 'Contestado', '2006-08-20'),
(4, 13, 8, 2, '1.2', 'Contestado', '2015-10-20'),
(4, 13, 10, 5, '3.1', 'Contestado', '2008-04-21'),
(4, 14, 9, 5, '1.2', 'Contestado', '2004-01-21'),
(4, 15, 10, 3, '1.1', 'Contestado', '2008-04-21'),
(4, 15, 11, 6, '2.3', 'Contestado', '2002-07-21'),
(4, 16, 11, 12, '1.3', 'Contestado', '2002-07-21'),
(4, 17, 12, 10, '3.2', 'No Contestado', NULL),
(4, 18, 13, 9, '4.3', 'No Contestado', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedback`
--

CREATE TABLE `feedback` (
  `id_feedback` int(11) NOT NULL,
  `calificacion_craft` decimal(65,1) DEFAULT NULL,
  `calificacion_personal` decimal(65,1) DEFAULT NULL,
  `calificacion_business` decimal(65,1) DEFAULT NULL,
  `calificacion_promedio` decimal(65,1) DEFAULT NULL,
  `comentario_craft` varchar(255) DEFAULT NULL,
  `comentario_personal` varchar(255) DEFAULT NULL,
  `comentario_business` varchar(255) DEFAULT NULL,
  `comentario_general` varchar(255) DEFAULT NULL,
  `id_empleado_member` int(11) NOT NULL,
  `id_empleado_assistant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `feedback`
--

INSERT INTO `feedback` (`id_feedback`, `calificacion_craft`, `calificacion_personal`, `calificacion_business`, `calificacion_promedio`, `comentario_craft`, `comentario_personal`, `comentario_business`, `comentario_general`, `id_empleado_member`, `id_empleado_assistant`) VALUES
(1, '4.2', '5.1', '3.2', '4.2', 'comentario craft predetermidano 1', 'comentario personal predeterminado 1', 'comentario business predeterminado 1', 'comentario general predeterminado 1', 1, 20),
(2, '1.2', '1.1', '3.3', '2.1', 'comentario craft predetermidano 2', 'comentario personal predeterminado 2', 'comentario business predeterminado 2', 'comentario general predeterminado 2', 2, 1),
(3, '2.2', '3.2', '3.1', '2.3', 'comentario craft predetermidano 3', 'comentario personal predeterminado 3', 'comentario business predeterminado 3', 'comentario general predeterminado 3', 3, 1),
(4, '2.1', '3.3', '3.2', '2.2', 'comentario craft predetermidano 4', 'comentario personal predeterminado 4', 'comentario business predeterminado 4', 'comentario general predeterminado 4', 4, 1),
(5, '5.1', '3.1', '3.1', '4.2', 'comentario craft predetermidano 5', 'comentario personal predeterminado 5', 'comentario business predeterminado 5', 'comentario general predeterminado 5', 5, 1),
(6, '1.1', '3.2', '4.1', '1.3', 'comentario craft predetermidano 6', 'comentario personal predeterminado 6', 'comentario business predeterminado 6', 'comentario general predeterminado 6', 6, 3),
(7, '3.2', '3.1', '3.2', '3.2', 'comentario craft predetermidano 7', 'comentario personal predeterminado 7', 'comentario business predeterminado 7', 'comentario general predeterminado 7', 7, 3),
(8, '3.3', '4.1', '2.1', '3.3', 'comentario craft predetermidano 8', 'comentario personal predeterminado 8', 'comentario business predeterminado 8', 'comentario general predeterminado 8', 8, 3),
(9, '3.1', '3.1', '5.1', '3.2', 'comentario craft predetermidano 9', 'comentario personal predeterminado 9', 'comentario business predeterminado 9', 'comentario general predeterminado 9', 9, 3),
(10, '3.2', '4.1', '1.1', '3.2', 'comentario craft predetermidano 10', 'comentario personal predeterminado 10', 'comentario business predeterminado 10', 'comentario general predeterminado 10', 10, 3),
(11, '3.1', '3.3', '3.2', '3.1', 'comentario craft predetermidano 11', 'comentario personal predeterminado 11', 'comentario business predeterminado 11', 'comentario general predeterminado 11', 11, 3),
(12, '4.1', '4.1', '3.3', '4.1', 'comentario craft predetermidano 12', 'comentario personal predeterminado 12', 'comentario business predeterminado 12', 'comentario general predeterminado 12', 12, 10),
(13, '5.1', '3.2', '3.2', '4.3', 'comentario craft predetermidano 13', 'comentario personal predeterminado 13', 'comentario business predeterminado 13', 'comentario general predeterminado 13', 13, 10),
(14, '1.1', '2.1', '3.3', '1.3', 'comentario craft predetermidano 14', 'comentario personal predeterminado 14', 'comentario business predeterminado 14', 'comentario general predeterminado 14', 14, 10),
(15, '3.2', '5.1', '3.1', '3.3', 'comentario craft predetermidano 15', 'comentario personal predeterminado 15', 'comentario business predeterminado 15', 'comentario general predeterminado 15', 15, 10),
(16, '3.3', '1.1', '3.2', '3.1', 'comentario craft predetermidano 16', 'comentario personal predeterminado 16', 'comentario business predeterminado 16', 'comentario general predeterminado 16', 16, 10),
(17, '3.1', '3.2', '3.1', '3.1', 'comentario craft predetermidano 17', 'comentario personal predeterminado 17', 'comentario business predeterminado 17', 'comentario general predeterminado 17', 17, 10),
(18, '3.2', '3.3', '4.1', '3.2', 'comentario craft predetermidano 18', 'comentario personal predeterminado 18', 'comentario business predeterminado 18', 'comentario general predeterminado 18', 18, 17),
(19, '3.1', '4.2', '3.1', '3.2', 'comentario craft predetermidano 19', 'comentario personal predeterminado 19', 'comentario business predeterminado 19', 'comentario general predeterminado 19', 19, 17),
(20, '4.1', '1.2', '1.1', '2.3', 'comentario craft predetermidano 20', 'comentario personal predeterminado 20', 'comentario business predeterminado 20', 'comentario general predeterminado 20', 20, 2),
(21, '3.3', '2.2', '5.1', '4.1', 'comentario craft predetermidano 21', 'comentario personal predeterminado 21', 'comentario business predeterminado 21', 'comentario general predeterminado 21', 21, 2),
(22, '4.1', '4.1', '1.1', '3.1', 'comentario craft predetermidano 22', 'comentario personal predeterminado 22', 'comentario business predeterminado 22', 'comentario general predeterminado 22', 22, 2),
(23, '3.2', '3.3', '3.2', '3.2', 'comentario craft predetermidano 23', 'comentario personal predeterminado 23', 'comentario business predeterminado 23', 'comentario general predeterminado 23', 23, 2),
(24, '3.2', '4.1', '3.3', '3.3', 'comentario craft predetermidano 24', 'comentario personal predeterminado 24', 'comentario business predeterminado 24', 'comentario general predeterminado 24', 24, 2),
(25, '3.1', '3.2', '4.2', '3.2', 'comentario craft predetermidano 25', 'comentario personal predeterminado 25', 'comentario business predeterminado 25', 'comentario general predeterminado 25', 25, 2),
(26, '3.3', '3.2', '1.2', '2.3', 'comentario craft predetermidano 26', 'comentario personal predeterminado 26', 'comentario business predeterminado 26', 'comentario general predeterminado 26', 26, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcion`
--

CREATE TABLE `funcion` (
  `id_funcion` int(11) NOT NULL,
  `nombre_funcion` varchar(255) DEFAULT NULL,
  `descripcion_funcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `funcion`
--

INSERT INTO `funcion` (`id_funcion`, `nombre_funcion`, `descripcion_funcion`) VALUES
(1, 'Iniciar sesión', 'El usuario inicia sesión.'),
(2, 'Consultar historial de feedback', 'Consulta del historial de feedback que ha recibido un empleado.'),
(3, 'Consultar feedback', 'Consulta del detalle de un registro de feedback.'),
(4, 'Registrar chapter mood', 'Registro del chapter mood.'),
(5, 'Consultar encuestas solicitadas', 'Consulta de encuestas solicitadas.'),
(6, 'Registrar encuesta', 'Registra encuesta activa.'),
(7, 'Consultar perfil', 'Consulta información del perfil.'),
(8, 'Solicitar a otro empleado llenar la encuesta', 'Selecciona a otro empleado para que te evalue, se le envia una encuesta.'),
(9, 'Consultar lista de evaluados de CLA', 'Consulta la lista de evaluados que tiene un chapter lead assistant.'),
(10, 'Registrar feedback', 'Registro de calificaciones finales y comentarios de un feedback.'),
(11, 'Consultar resumen de encuestas', 'Consulta de los resultados de las encuestas que evaluan a un empleado.'),
(12, 'Consultar encuesta ', 'Consulta el preguntas y respuestas de una encuesta.'),
(13, 'Consultar datos CM', 'Consulta la información de un chapter member.'),
(14, 'Cambiar rol de CM a CLA', 'Cambia el rol de un chapter member a un chapter lead assistant.'),
(15, 'Cambiar rol de CLA a CM', 'Cambia el rol de un chapterl lead assistant a un chapter member.'),
(16, 'Registrar datos CM', 'Registra a un nuevo chapter member.'),
(17, 'Modificar datos CM', 'Modifica los datos de un chapter member.'),
(18, 'Eliminar datos CM', 'Elimina los datos de un chapter member.'),
(19, 'Asignar CM a CLA', 'Define el chapter lead assistant de un chapter memeber.'),
(20, 'Eliminar CM de la lista de evaluados', 'Elimina un chapter member de la lista de su chapter assistant.'),
(21, 'Modificar frecuencia de periodo', 'Cambia la duración de los periodos de evaluación.'),
(22, 'Consultar pregunta en matriz de chapter', 'Consulta las preguntas correspondientes a un chapter y un nivel.'),
(23, 'Modificar pregunta en matriz de chapter', 'Modifica las preguntas correspondientes a un chapter y un nivel.'),
(24, 'Registrar pregunta en matriz de chapter', 'Registra pregunta correspondiente a un chapter y un nivel.'),
(25, 'Eliminar pregunta en matriz de chapter', 'Elimina pregunta correspondiente a un chapter y un nivel.'),
(26, 'Consultar informe del chapter', 'Consulta resultados del chapter mood y promedios de empleados en el feedback.'),
(27, 'Eliminar datos CLA', 'Elimina datos del chapter lead una vez se ha cambiado el rol a chapter member.'),
(28, 'Cerrar sesión', 'Cierra sesión del usuario.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo`
--

CREATE TABLE `periodo` (
  `id_periodo` int(11) NOT NULL,
  `nombre_periodo` varchar(45) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estatus_periodo` varchar(45) DEFAULT NULL,
  `id_chapter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `periodo`
--

INSERT INTO `periodo` (`id_periodo`, `nombre_periodo`, `fecha_inicio`, `fecha_fin`, `estatus_periodo`, `id_chapter`) VALUES
(1, 'Enero - Marzo 2019', '2001-01-19', '2031-03-19', 'Proximo', 1),
(2, 'Abril - Mayo 2019', '2001-04-19', '2031-05-19', 'Vigente', 1),
(3, 'Julio - Agosto 2019', '2001-07-19', '2031-08-19', 'Finalizado', 1),
(4, 'Octubre - Noviembre 2019', '2001-10-19', '2030-11-19', 'Finalizado', 1),
(5, 'Enero - Febrero 2019', '2001-01-20', '2029-02-20', 'Finalizado', 1),
(6, 'Inicio Marzo 2020', '2001-05-20', '2010-05-20', 'Finalizado', 1),
(7, 'Julio - Agosto 2020', '2001-07-20', '2030-08-20', 'Finalizado', 1),
(8, 'Mes Octubre 2020', '2001-10-20', '2031-10-20', 'Finalizado', 1),
(9, 'Primer mes 2021', '2001-01-21', '2010-01-21', 'Finalizado', 1),
(10, 'Mes Abril 2021', '2001-04-21', '2011-04-21', 'Proximo', 1),
(11, 'Mes Julio 2021', '2001-07-21', '2010-01-21', 'Proximo', 1),
(12, 'Mes Octubre 2021', '2001-10-21', '2010-10-21', 'Proximo', 1),
(13, 'Primer mes 2022', '2001-01-22', '2009-01-22', 'Proximo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `id_respuesta` int(11) NOT NULL,
  `pregunta` varchar(255) DEFAULT NULL,
  `descripcion_respuesta` varchar(255) NOT NULL,
  `tipo_respuesta` varchar(45) DEFAULT NULL,
  `index_respuesta` int(11) DEFAULT NULL,
  `id_empleado_evaluador` int(11) NOT NULL,
  `id_empleado_evaluado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `respuesta`
--

INSERT INTO `respuesta` (`id_respuesta`, `pregunta`, `descripcion_respuesta`, `tipo_respuesta`, `index_respuesta`, `id_empleado_evaluador`, `id_empleado_evaluado`) VALUES
(1, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy', 'abierta', 10, 2, 5),
(2, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer', 'numerica', 23, 4, 3),
(6, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum', 'numerica', 4, 2, 5),
(7, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus', 'abierta', 6, 2, 3),
(10, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue', 'calificacion', 22, 4, 5),
(12, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac', 'calificacion', 7, 2, 1),
(13, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus', 'numerica', 25, 4, 3),
(14, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium', 'calificacion', 14, 4, 9),
(15, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia', 'calificacion', 17, 4, 8),
(16, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac', 'abierta', 24, 4, 3),
(18, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit', 'calificacion', 26, 4, 1),
(19, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'fermentum donec ut mauris eget massa tempor convallis nulla neque', 'abierta', 2, 2, 9),
(21, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra', 'calificacion', 1, 2, 8),
(26, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci', 'numerica', 8, 2, 1),
(27, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien', 'calificacion', 18, 4, 7),
(29, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec', 'abierta', 1, 2, 1),
(30, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit', 'calificacion', 11, 2, 6),
(33, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus', 'abierta', 16, 4, 7),
(34, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum', 'calificacion', 3, 2, 5),
(35, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus', 'numerica', 28, 4, 3),
(42, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'nam dui proin leo odio porttitor id consequat in consequat ut nulla sed', 'numerica', 21, 4, 5),
(43, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris', 'numerica', 13, 2, 10),
(49, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium', 'numerica', 5, 2, 1),
(52, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'morbi non quam nec dui luctus rutrum nulla tellus in sagittis', 'abierta', 20, 4, 7),
(53, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'vel enim sit amet nunc viverra dapibus nulla suscipit ligula', 'calificacion', 12, 2, 7),
(61, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper', 'numerica', 25, 4, 1),
(64, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'a libero nam dui proin leo odio porttitor id consequat in consequat', 'abierta', 19, 4, 5),
(75, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget', 'numerica', 15, 4, 8),
(80, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit', 'numerica', 1, 2, 3),
(100, '¿En qué proyectos/iniciativas pudiste interactuar con <Nombre>?', 'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis', 'calificacion', 9, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(45) DEFAULT NULL,
  `descripcion_rol` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`, `descripcion_rol`) VALUES
(1, 'Chapter Lead', 'Jefe de departamento.'),
(2, 'Chapter Lead Assistant', 'Asistente del jefe, se encarga de evaluar a los Chapter Members que le sean asignados.'),
(3, 'Chapter Member', 'Empleado del Chapter.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_funciones`
--

CREATE TABLE `rol_funciones` (
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol_funciones`
--

INSERT INTO `rol_funciones` (`id_rol`, `id_funcion`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 3),
(7, 3),
(8, 4),
(9, 4),
(10, 5),
(11, 5),
(12, 6),
(13, 6),
(14, 7),
(15, 7),
(16, 8),
(17, 8),
(18, 9),
(19, 10),
(20, 11),
(21, 12),
(22, 13),
(23, 14),
(24, 15),
(25, 16),
(26, 17),
(27, 18),
(28, 19),
(29, 20),
(30, 21),
(31, 22),
(32, 23),
(33, 24),
(34, 25),
(35, 26),
(36, 27),
(37, 28),
(38, 29),
(39, 30),
(40, 31),
(41, 31),
(42, 31);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignacion`
--
ALTER TABLE `asignacion`
  ADD PRIMARY KEY (`id_empleado_member`,`id_empleado_assistant`,`fecha_asignacion`),
  ADD KEY `id_empleado_assistant_idx` (`id_empleado_assistant`);

--
-- Indices de la tabla `banco_preguntas`
--
ALTER TABLE `banco_preguntas`
  ADD PRIMARY KEY (`id_pregunta`);

--
-- Indices de la tabla `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id_chapter`);

--
-- Indices de la tabla `chaptermood`
--
ALTER TABLE `chaptermood`
  ADD PRIMARY KEY (`id_chaptermood`),
  ADD KEY `id_periodo_idx` (`id_periodo`),
  ADD KEY `id_empleado_idx` (`id_empleado`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `id_chapter_idx` (`id_chapter`);

--
-- Indices de la tabla `empleado_rol`
--
ALTER TABLE `empleado_rol`
  ADD PRIMARY KEY (`id_empleado`,`id_rol`,`fecha_rol`),
  ADD KEY `id_rol_idx` (`id_rol`);

--
-- Indices de la tabla `evaluacion`
--
ALTER TABLE `evaluacion`
  ADD PRIMARY KEY (`id_empleado_evaluador`,`id_empleado_evaluado`,`id_periodo`),
  ADD KEY `id_empleado_evaluado_idx` (`id_empleado_evaluado`),
  ADD KEY `id_periodo_idx` (`id_periodo`),
  ADD KEY `id_feedback_idx` (`id_feedback`);

--
-- Indices de la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id_feedback`),
  ADD KEY `id_empleado_assistant_idx` (`id_empleado_assistant`),
  ADD KEY `id_empleado_member_idx` (`id_empleado_member`);

--
-- Indices de la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD PRIMARY KEY (`id_funcion`);

--
-- Indices de la tabla `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id_periodo`),
  ADD KEY `id_chapter_idx` (`id_chapter`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`id_respuesta`),
  ADD KEY `id_empleado_evaluado_idx` (`id_empleado_evaluado`),
  ADD KEY `id_empleado_evaluador_idx` (`id_empleado_evaluador`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `rol_funciones`
--
ALTER TABLE `rol_funciones`
  ADD PRIMARY KEY (`id_rol`,`id_funcion`),
  ADD KEY `id_funcion_idx` (`id_funcion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banco_preguntas`
--
ALTER TABLE `banco_preguntas`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `chapter`
--
ALTER TABLE `chapter`
  MODIFY `id_chapter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `chaptermood`
--
ALTER TABLE `chaptermood`
  MODIFY `id_chaptermood` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id_feedback` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `funcion`
--
ALTER TABLE `funcion`
  MODIFY `id_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id_periodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignacion`
--
ALTER TABLE `asignacion`
  ADD CONSTRAINT `id_empleado_assistant` FOREIGN KEY (`id_empleado_assistant`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `id_empleado_member` FOREIGN KEY (`id_empleado_member`) REFERENCES `empleado` (`id_empleado`);

--
-- Filtros para la tabla `chaptermood`
--
ALTER TABLE `chaptermood`
  ADD CONSTRAINT `id_empleado_mood` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `id_periodo_mood` FOREIGN KEY (`id_periodo`) REFERENCES `periodo` (`id_periodo`);

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `id_chapter_empleado` FOREIGN KEY (`id_chapter`) REFERENCES `chapter` (`id_chapter`);

--
-- Filtros para la tabla `empleado_rol`
--
ALTER TABLE `empleado_rol`
  ADD CONSTRAINT `id_empleado_rol` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `id_rol_empleado` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);

--
-- Filtros para la tabla `evaluacion`
--
ALTER TABLE `evaluacion`
  ADD CONSTRAINT `id_empleado_evaluado` FOREIGN KEY (`id_empleado_evaluado`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `id_empleado_evaluador` FOREIGN KEY (`id_empleado_evaluador`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `id_feedback_contestan` FOREIGN KEY (`id_feedback`) REFERENCES `feedback` (`id_feedback`),
  ADD CONSTRAINT `id_periodo_contestan` FOREIGN KEY (`id_periodo`) REFERENCES `periodo` (`id_periodo`);

--
-- Filtros para la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `id_empleado_assistant_feedback` FOREIGN KEY (`id_empleado_assistant`) REFERENCES `asignacion` (`id_empleado_assistant`),
  ADD CONSTRAINT `id_empleado_member_feedback` FOREIGN KEY (`id_empleado_member`) REFERENCES `asignacion` (`id_empleado_member`);

--
-- Filtros para la tabla `periodo`
--
ALTER TABLE `periodo`
  ADD CONSTRAINT `id_chapter_periodo` FOREIGN KEY (`id_chapter`) REFERENCES `chapter` (`id_chapter`);

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `id_empleado_evaluado_respuesta` FOREIGN KEY (`id_empleado_evaluado`) REFERENCES `evaluacion` (`id_empleado_evaluado`),
  ADD CONSTRAINT `id_empleado_evaluador_respuesta` FOREIGN KEY (`id_empleado_evaluador`) REFERENCES `evaluacion` (`id_empleado_evaluador`);

--
-- Filtros para la tabla `rol_funciones`
--
ALTER TABLE `rol_funciones`
  ADD CONSTRAINT `id_funcion_rol` FOREIGN KEY (`id_funcion`) REFERENCES `funcion` (`id_funcion`),
  ADD CONSTRAINT `id_rol_funcion` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
