-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bfslomngqiv4lrdhuov3-mysql.services.clever-cloud.com:3306
-- Generation Time: Apr 21, 2022 at 02:57 AM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bfslomngqiv4lrdhuov3`
--
CREATE DATABASE IF NOT EXISTS `bfslomngqiv4lrdhuov3` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bfslomngqiv4lrdhuov3`;

-- --------------------------------------------------------

--
-- Table structure for table `asignacion`
--

CREATE TABLE `asignacion` (
  `id_empleado_member` int(11) NOT NULL,
  `id_empleado_assistant` int(11) NOT NULL,
  `fecha_asignacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `asignacion`
--

INSERT INTO `asignacion` (`id_empleado_member`, `id_empleado_assistant`) VALUES
(22, 1),
(23, 1),
(24, 1),
(26, 1),
(1, 2),
(3, 2),
(10, 2),
(17, 2),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(11, 10),
(11, 10),
(12, 10),
(13, 10),
(14, 10),
(15, 10),
(16, 10),
(16, 10),
(16, 10),
(17, 16),
(18, 17),
(19, 17),
(20, 17),
(21, 17),
(18, 18),
(17, 20),
(18, 26);

-- --------------------------------------------------------

--
-- Table structure for table `banco_preguntas`
--

CREATE TABLE `banco_preguntas` (
  `id_pregunta` int(11) NOT NULL,
  `pregunta` varchar(255) DEFAULT NULL,
  `index_pregunta` int(11) DEFAULT NULL,
  `nivel_pregunta` int(11) DEFAULT NULL,
  `dimension_pregunta` varchar(45) DEFAULT NULL,
  `tipo_pregunta` varchar(45) DEFAULT NULL,
  `id_chapter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banco_preguntas`
--

INSERT INTO `banco_preguntas` (`id_pregunta`, `pregunta`, `index_pregunta`, `nivel_pregunta`, `dimension_pregunta`, `tipo_pregunta`, `id_chapter`) VALUES
(7, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 7, 3, 'people', 'calificacion', 1),
(8, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 8, 3, 'business', 'numerica', 1),
(9, '¿Como te llevaste personalmente con el evaluado en proyectos/iniciativas que coincidieron?', 9, 2, 'people', 'abierta', 1),
(13, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 13, 4, 'people', 'calificacion', 1),
(16, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 16, 4, 'craft', 'calificacion', 1),
(18, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 18, 2, 'craft', 'abierta', 1),
(19, '¿Como calificas las habilidades en base de datos del evaluado?', 19, 2, 'craft', 'calificacion', 1),
(24, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 24, 4, 'business', 'calificacion', 1),
(26, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 26, 4, 'people', 'numerica', 1),
(29, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 29, 4, 'people', 'numerica', 1),
(36, '¿En general, cómo es la retroalimentación que da en las revisiones de código?', 41, 1, 'craft', 'abierta', 1),
(37, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', 42, 1, 'craft', 'numerica', 1),
(39, '¿Qué le recomendarias al evaluado para mejorar?', 44, 1, 'craft', 'abierta', 1),
(40, 'Del a 1 al 5. ¿Cómo evaluarias la dimension people? Siendo 1 que requiere mejorar y 5 que excede las expectativas', 39, 1, 'people', 'calificacion', 1),
(41, 'Del a 1 al 5. ¿Cómo el trato a los demás compañeros de trabajo? Siendo 1 que requiere mejorar y 5 que excede las expectativas', 40, 1, 'people', 'abierta', 1),
(42, '¿Crees que la salud del evaluado está en riesgo? ¿Se desvela trabajando? ¿Tiene malos hábitos alimenticios?', 41, 1, 'people', 'abierta', 1),
(44, '¿Qué le recomendarias al evaluado para mejorar?', 44, 1, 'people', 'abierta', 1),
(45, 'Del a 1 al 5. ¿Cómo evaluarias la dimension bussines? Siendo 1 que requiere mejorar y 5 que excede las expectativas', 39, 1, 'business', 'calificacion', 1),
(46, 'Del a 1 al 5. ¿Qué tanto se comporta de acuerdo a las politicas de la empresa? Siendo 1 que requiere mejorar y 5 que excede las expectativas', 40, 1, 'business', 'abierta', 1),
(47, 'Desde tu perspectiva,¿crees que hace un trabajo integral a la visión y misión de la empresa? Describe sí o n y por qué', 41, 1, 'business', 'abierta', 1),
(49, '¿Qué le recomendarias al evaluado para mejorar?', 44, 1, 'business', 'abierta', 1),
(50, 'Del 1 al 5 donde 5 es excelente y 1 deficiente. ¿Qué tan bien documenta el evaluado?', 45, 1, 'business', 'numerica', 1),
(51, 'prueba 1 de models', NULL, 1, 'undefined', 'abierta', 1),
(52, 'prueba 2 de models', NULL, 1, 'undefined', 'abierta', 1),
(53, 'prueba 3 de models', NULL, 1, 'undefined', 'abierta', 1),
(54, 'prueba 4 de models', NULL, 2, 'undefined', 'abierta', 1),
(55, 'prueba 4 de models', NULL, 2, 'undefined', 'abierta', 1),
(56, 'prueba 4 de models', NULL, 2, 'undefined', 'abierta', 1),
(57, 'prueba 5 de models', NULL, 1, 'undefined', 'abierta', 1),
(58, 'prueba 5 de models', NULL, 1, 'undefined', 'abierta', 1),
(59, 'prueba 6 de models', NULL, 1, 'undefined', 'abierta', 1),
(60, 'prueba 6 de models', NULL, 1, 'undefined', 'abierta', 1),
(62, 'prueba  8 de models', NULL, 1, 'undefined', 'abierta', 1),
(64, '¿Kscjdsvkbsd?', NULL, 1, 'undefined', 'abierta', 1),
(65, '¿ADSGERH?', NULL, 1, 'undefined', 'abierta', 1),
(79, '¿Como calificarias la forma de expresar conceptos el evaluado? (tecnicos a un cliente)', 10, 2, 'people', 'calificacion', 1),
(80, 'Describe una experencia de negociacion que tuviste con el evaluado.', NULL, 2, 'business', 'abierta', 1),
(81, 'Si tuvieras que calificar a tu compañero en esta area ¿Cual le darias?', NULL, 2, 'business', 'calificacion', 1),
(82, 'Describe cómo el evaluado atiende las recomendaciones que le hace sus compañeros. (Menciona 2 ejemplos)', NULL, 3, 'craft', 'abierta', 1),
(83, '¿En cuantos proyectos colaboraste con el evaluado?', NULL, 3, 'craft', 'numerica', 1),
(84, 'A que nivel crees que deberia estar en esta categoria', NULL, 3, 'craft', 'calificacion', 1),
(85, 'Del 1 al 5, ¿Qué tan bueno es para diseñar arquitecturas de microservicios?', 45, 1, 'craft', 'numerica', 1),
(86, 'Como lo calificarias del 1 al 5 (con decimal)', 46, 1, 'business', 'calificacion', 1),
(87, 'Como calificar al evaluado', 46, 1, 'craft', 'calificacion', 1);

-- --------------------------------------------------------

--
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `id_chapter` int(11) NOT NULL,
  `nombre_chapter` varchar(45) DEFAULT NULL,
  `descripcion_chapter` varchar(255) DEFAULT NULL,
  `cantidad_empleados` int(11) DEFAULT NULL,
  `matriz` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`id_chapter`, `nombre_chapter`, `descripcion_chapter`, `cantidad_empleados`, `matriz`) VALUES
(1, 'Software Development', 'Se encargan de dar soporte tecnológico a las plataformas activas de la empresa. Así mismo innovan utilizando nuevas tecnologías.', 26, 'https://i.pinimg.com/736x/14/e5/ec/14e5ec42a1e207d054cf1502ad86ea66--curriculum-design-teaching-tools.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `empleado`
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
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `correo_electronico` varchar(255) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `equipo` varchar(45) DEFAULT NULL,
  `id_chapter` int(11) NOT NULL,
  `imagen_perfil` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `nombre`, `apellido_paterno`, `apellido_materno`, `nivel_general`, `nivel_craft`, `nivel_business`, `nivel_people`, `activo`, `correo_electronico`, `password`, `equipo`, `id_chapter`, `imagen_perfil`) VALUES
(1, 'Alan', 'Brito', 'Perez', '3.1', '3.1', '3.1', '2.2', 1, 'alanBrito@zeb.mx', '$2b$05$mWMh/d0S5OL3DDArUlA9neUyAwER7cMHodIQlqCz5UMQcDEl7Frd2', 'ZeCore Client', 1, 'http://localhost:8080/img/avatar.jpg'),
(2, 'Arisbeth', 'Aguirre', 'Muñoz', '2.2', '2.2', '2.2', '4.2', 1, 'nicoro@zeb.mx', '$2b$05$PV5bEoDp/LcHEc1321VG4ur50cc40GqeousLD4uCCYyNPSj3h4gYm', 'ZeCore Payments', 1, 'https://ca.slack-edge.com/T08BWSY0P-U032ZT65TFD-g0dcc9c67fc7-512'),
(3, 'Jaime', 'López', 'Bolaños', '3.1', '3.3', '2.3', '2.1', 1, 'gabhuibol@zeb.mx', '$2b$05$.XVbldqqRj4b34BlvcjWB.qhenoeBLWVRKVPrh62jGF2Un5uEVkN.', 'ZeCore Shipping', 1, 'https://ca.slack-edge.com/T08BWSY0P-U032ZTLM77D-69158b45a0f2-512'),
(4, 'Jordana', 'Betancourt', 'Santana', '3.3', '4.2', '4.3', '2.3', 1, 'almpatsan@zeb.mx', '$2b$05$kRoJPk8kpKHkKkPxyLzJGO5VkjgTreeDarTddIkv99WDKT5jvPwdm', 'ZeCore Client', 1, 'https://ca.slack-edge.com/T08BWSY0P-U033PKGCJEL-e0e77a6fe9b2-512'),
(5, 'Diego', 'Resendiz', 'Amogus', '3.1', '2.2', '1.3', '3.3', 1, 'origatamon@zeb.mx', '$2b$05$gW5feyNInMf6BSLMNM.nm.oN8miQ7xjUtBlt5JYEjjpy5R7R5bpFi', 'ZeCore Client', 1, 'https://ca.slack-edge.com/T08BWSY0P-U02E8LKCRC2-c99a48de617c-512'),
(6, 'Ana Karen', 'López', 'Capybara', '1.3', '1.3', '1.2', '2.2', 1, 'feliosscap@zeb.mx', '$2b$05$zLNHu0oy88LQyjATspMFJOjob5qkk6spkmS1cOu5f7Cp/hadKECAS', 'Client+SM', 1, 'https://ca.slack-edge.com/T08BWSY0P-U03326KHJNQ-454da28d98a5-512'),
(7, 'Jorge', 'Castro', 'Sánchez', '2.3', '2.3', '2.3', '4.1', 1, 'carrisa@zeb.mx', '$2b$05$pESxaJXcLrE69aO.2h2yN.7fDiwUx9j2VA/9dkWYok6PZbH0nRacm', 'Production Engineering', 1, 'https://ca.slack-edge.com/T08BWSY0P-U03326LAV8C-849ec178f1c3-512'),
(8, 'Sarah', 'Martinez', 'Valdés', '4.1', '4.1', '4.3', '4.1', 1, 'diegaval@zeb.mx', '$2b$05$faV9J/K2z8sWFH3z7tPL8.bTh.8n9qQU9WsuWkeHKyFcYs1e9.hjO', 'ZeCore Shipping', 1, 'https://ca.slack-edge.com/T08BWSY0P-U032ZSCUGKD-345e780c15d1-512'),
(9, 'Denisse', 'Domínguez', 'del Moral', '2.2', '2.3', '1.2', '1.3', 1, 'valnunmor@zeb.mx', '$2b$05$b442RvN1aRmOlLvNwd4Kleiaf2ygbuv1YLdsdnoQ9xzwA83pLgedi', 'ZeCore Client', 1, 'https://ca.slack-edge.com/T08BWSY0P-U032X00EMMK-93d1cbf1114f-512'),
(10, 'Sebastían', 'Pedrero', 'Rodríguez', '2.2', '3.3', '2.1', '1.2', 1, 'sunny.bartell@hotmail.com', '$2b$05$XqSUu6t2QR90onLah.SRvORJZs15ujI0JZv.Sa3gnEis.qZZQE/dq', 'ZeCore Client', 1, 'https://ca.slack-edge.com/T08BWSY0P-U032X15N5DK-77bebed0078d-512'),
(11, 'Natalia', 'Rodríguez', 'Martínez', '4.1', '4.1', '4.1', '3.1', 1, 'tanner.bernier@gmail.com', '$2b$05$CWTv3RNccNY8FFsEOEsPrO7507A8v.bVNTp2RtaPTj01cIzwT90ie', 'ZeCore Client', 1, 'http://localhost:8080/img/user_default.png'),
(12, 'Edgar', 'Santana', 'Matute', '3.2', '3.3', '4.2', '2.2', 1, 'keyshawn.kreiger@gmail.com', '$2b$05$coDUJ3fDeoWvP0Il2vl./.waErtqjPx1TF8t6oa31eYRzJMQ/nNCm', 'ZeCore CRM', 1, 'http://localhost:8080/img/user_default.png'),
(13, 'Cristhian', 'Abarca', 'Alberca', '1.2', '1.2', '1.3', '2.3', 1, 'nernser@orn.info', '$2b$05$2IEP6wXxnOPKD5besCnUSO5vqgYe2amxhwJpNz5thnTR4UuiJyw4.', 'ZeCore WMS', 1, 'http://localhost:8080/img/user_default.png'),
(14, 'Ivan', 'Celis', 'Cea', '1.2', '1.2', '1.3', '3.2', 1, 'collins.elfrieda@gmail.com', '$2b$05$BtxzWUSrkZ1L.feUYdlGUOgG.ZHLija22DJQiWgD.KVZ/YLoEjK1W', 'ZeCore WMS', 1, 'http://localhost:8080/img/user_default.png'),
(15, 'Kevin', 'Rojas', 'Ladino', '1.1', '1.1', '2.2', '1.1', 1, 'zola65@sanford.info', '$2b$05$zadGei1xH77V17ihlLj9lOkeLjmeaA6uUhPOQQU9kVt7x.RAVbir.', 'ZeCore CRM', 1, 'http://localhost:8080/img/user_default.png'),
(16, 'Cristian', 'Rico', 'Espinosa', '1.3', '1.3', '2.3', '1.1', 1, 'aparisian@gmail.com', '$2b$05$fpGP2DrrefP.6hDPNV7dW.fzLK9qMtE2MhnakiN3bm9FK0vWAej/m', 'Production Engineering', 1, 'https://ca.slack-edge.com/T08BWSY0P-U033PKURJHE-22cc216346d2-512'),
(17, 'Julio', 'Celis', 'Romero', '3.2', '3.2', '4.1', '3.3', 1, 'gframi@gmail.com', '$2b$05$98aUdb07AMIFLNHtxop3yOd3XCOYlIEADeMpKE35jKpjiDO8Vtu3y', 'ZeCore Payments', 1, 'http://localhost:8080/img/user_default.png'),
(18, 'Aldo', 'Rivera', 'Morales', '4.3', '4.3', '4.3', '4.3', 1, 'oswald14@crona.biz', '$2b$05$fIKekhZO2.IuUoEay5EskuSWt9CjOeqMw6xPb6po/ahaHvyolHWc.', 'ZeCore Shipping', 1, 'http://localhost:8080/img/user_default.png'),
(19, 'Erick', 'Samaniego', 'Becerra', '3.2', '5.1', '4.2', '2.2', 1, 'bogan.aurore@nader.com', '$2b$05$Whg34vx5O37AbEDV1Nt3lOYIjvxbmVZWRy1/9HeMGfBKScuxO/T0S', 'ZeCore Payments', 1, 'http://localhost:8080/img/user_default.png'),
(20, 'Matias1', 'Becerra1', 'Alanís1', '2.2', '5.3', '1.2', '5.3', 0, 'pgoodwin@mills.com', '$2b$05$2yDvVwiIeNIHq7adrsg3veYGEeK6Nr.sbQ1u6pwn8Bn0tSGmLusr2', 'Zebrands', 1, 'https://static.wikia.nocookie.net/kirby/images/1/1e/KBR_Bandana_Waddle_Dee.png/revision/latest/scale-to-width-down/250?cb=20200827020651&path-prefix=en'),
(21, 'Abraham', 'Febres', 'del Moral', '2.2', '2.2', '5.1', '4.3', 1, 'turner.mueller@gmail.com', '$2b$05$TBUYx620aGs5xhaAX7i3cOrZYaEX.kKK1Xbqwwybn517ABaVB5GJC', 'ZeCore CRM', 1, 'http://localhost:8080/img/user_default.png'),
(22, 'Adrian', 'Matute', 'Beltrán', '3.3', '3.2', '4.2', '3.1', 1, 'daren46@cremin.com', '$2b$05$4lbjgUKAOlOuxqqD0d6gjepW3x1PUbZy4K1/aqnF7PqquvGrfo5Y.', 'Production Engineering', 1, 'https://ca.slack-edge.com/T08BWSY0P-U032K8FQES3-8b95e6a4c5ba-512'),
(23, 'Fermin', 'Méndez', 'García', '3.1', '2.3', '2.2', '4.2', 1, 'van44@gmail.com', '$2b$05$M9IuSeuZskJSUSMwc3Z93OPWR.rhncJra4A02SmYtP4sk4dQ8giry', 'Production Engineering', 1, 'https://ca.slack-edge.com/T08BWSY0P-U03328BAJRJ-c00c2cd580c4-512'),
(24, 'Ricardo', 'Núñez', 'Alanís', '1.1', '1.1', '1.1', '1.1', 1, 'grady.kenna@reilly.info', '$2b$05$f7.s2aPAPZYUuG3Q9MuWl.qHv1vBRAyyxLWR7SchxwGuycDwPgWQC', 'Production Engineering', 1, 'https://ca.slack-edge.com/T08BWSY0P-U033PK3MUMN-cb792f361f9f-512'),
(25, 'Olivia', 'Morales', 'Quezada', '2.2', '2.1', '3.3', '1.2', 1, 'kovacek.brock@dickens.biz', '$2b$05$MjFeKdtJ9btVmrtEw/h4dekA8JT8RrkG7KlPBDdtXb2ndfoyOJCKG', 'Production Engineering', 1, 'https://ca.slack-edge.com/T08BWSY0P-U033274FN9J-d2c2e0b6c4e0-512'),
(26, 'Angel', 'Rico', 'Mendieta', '4.1', '4.3', '3.1', '1.2', 1, 'angelCriko@zeb.mx', '$2b$05$qI9S8/k8VOukadeMZIJAqOhY1pWgrldELGhP64Cpf0aufiiJDwLE2', 'Production Engineering', 1, 'https://www.ricos.software/images/perfil.jfif'),
(40, 'Padawan', 'Sky', 'Walker', '1.1', '1.1', '1.1', '1.1', 1, 'padasky@zeb.mx', '$2b$05$zAS2TSVMQNb5ppGMq/XBi.rh6ylkUoSjUO2J61k.f7av22Y4XsXbi', 'ZeCoreClient', 1, 'url.example'),
(41, 'Padagwam', 'Don', 'Pepe', '1.1', '1.1', '1.1', '1.1', 1, 'pepedon@zeb.mx', '$2b$05$PW7QT7VLjOuJplgHk4upY.rJSNpjXxctX0OOyQ558SoZyaCHBY0Ii', 'ZecoreClient', 1, 'url.example'),
(43, 'Padagwam', 'Don', 'Pepe', '1.1', '1.1', '1.1', '1.1', 1, 'pepe.com', '$2b$05$MdIplDk7Lw2ycxpwVS6cz.ACGAgym6WiEihrDE3P2Ml9BxjKAZngC', 'ZecoreClient', 1, 'url.example'),
(44, 'Padagwam', 'Don', 'Pepe', '1.1', '1.1', '1.1', '1.1', 1, 'pepe@xd.com', '$2b$05$Al.MQ5lqRk5ZNNEu4Ip7MOerrb9YK6M18tnU8xW/41yftq0wRU4He', 'ZecoreClient', 1, 'url.example'),
(45, 'Padagwam', 'Don', 'Pepe', '1.1', '1.1', '1.1', '1.1', 1, 'pepe@xdsgd.com', '$2b$05$Av/aHJHAdgBz8bCCrQc7RODKaxOQ2dj/P7c6xbFFL.ijI4O1omIj.', 'ZecoreClient', 1, 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg'),
(46, 'Padagwam', 'Don', 'Pepe', '1.1', '1.1', '1.1', '1.1', 1, 'pepe@xgd.com', '$2b$05$suki9b2LeMD4kbZ1X/mz3uGrdJVn8ymE/MR1ACpZcHKinBPEPa2Iq', 'ZecoreClient', 1, 'url.example'),
(47, 'Yoselin', 'Martinez', 'Martinez', '1.0', '1.0', '1.0', '1.0', 1, 'yosql@zeb.mx', '$2b$05$KT/0HKFqfo.hUdRAMplu.evHr8RY9sg6z1GcSM69HMXuXGcnhCsXe', 'dinamita', 1, 'https://pps.whatsapp.net/v/t61.24694-24/248636445_350232377062403_1264689935649594623_n.jpg?ccb=11-4&oh=01_AVwlnoM22Ns5R4MYFVskjICWccHg8QanOuyUMRM96eQf7g&oe=62708CF9');

-- --------------------------------------------------------

--
-- Table structure for table `empleado_rol`
--

CREATE TABLE `empleado_rol` (
  `id_empleado` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `fecha_rol` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empleado_rol`
--

INSERT INTO `empleado_rol` (`id_empleado`, `id_rol`) VALUES
(26, 1),
(9, 2),
(10, 2),
(11, 2),
(16, 2),
(18, 2),
(20, 2),
(22, 2),
(24, 2),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(11, 3),
(12, 3),
(13, 3),
(14, 3),
(15, 3),
(16, 3),
(17, 3),
(18, 3),
(19, 3),
(21, 3),
(23, 3),
(25, 3),
(40, 3),
(41, 3),
(43, 3),
(44, 3),
(45, 3),
(46, 3),
(47, 3);

-- --------------------------------------------------------

--
-- Table structure for table `evaluacion`
--

CREATE TABLE `evaluacion` (
  `id_empleado_evaluador` int(11) NOT NULL,
  `id_empleado_evaluado` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  `fecha_realizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `evaluacion`
--

INSERT INTO `evaluacion` (`id_empleado_evaluador`, `id_empleado_evaluado`, `id_periodo`, `estatus`) VALUES
(1, 1, 1, 'Contestado'),
(1, 2, 1, 'No Contestado'),
(1, 6, 1, 'Contestado'),
(1, 7, 1, 'Contestado'),
(1, 9, 1, 'Contestado'),
(1, 47, 1, 'No Contestado'),
(2, 1, 1, 'Contestado'),
(2, 1, 4, 'Contestado'),
(2, 3, 2, 'Contestado'),
(2, 3, 5, 'Contestado'),
(2, 5, 6, 'Contestado'),
(2, 5, 13, 'Contestado'),
(2, 6, 3, 'Contestado'),
(2, 7, 7, 'Contestado'),
(2, 7, 11, 'Contestado'),
(2, 7, 12, 'Contestado'),
(2, 9, 1, 'No Contestado'),
(2, 9, 8, 'Contestado'),
(2, 13, 1, 'Contestado'),
(2, 14, 13, 'Contestado'),
(2, 15, 12, 'Contestado'),
(2, 16, 11, 'Contestado'),
(2, 17, 10, 'Contestado'),
(2, 18, 5, 'Contestado'),
(2, 18, 9, 'Contestado'),
(2, 19, 1, 'Contestado'),
(2, 19, 8, 'Contestado'),
(2, 20, 2, 'Contestado'),
(2, 20, 7, 'Contestado'),
(2, 21, 3, 'Contestado'),
(2, 21, 6, 'Contestado'),
(2, 22, 5, 'Contestado'),
(2, 23, 4, 'Contestado'),
(2, 24, 3, 'Contestado'),
(2, 25, 2, 'Contestado'),
(2, 26, 1, 'Contestado'),
(3, 1, 1, 'Contestado'),
(3, 9, 1, 'Contestado'),
(4, 1, 1, 'No Contestado'),
(4, 1, 7, 'Contestado'),
(4, 1, 10, 'Contestado'),
(4, 3, 8, 'Contestado'),
(4, 6, 6, 'Contestado'),
(4, 6, 9, 'Contestado'),
(4, 8, 6, 'Contestado'),
(4, 8, 12, 'Contestado'),
(4, 8, 13, 'Contestado'),
(4, 9, 1, 'No Contestado'),
(4, 9, 5, 'Contestado'),
(4, 10, 4, 'Contestado'),
(4, 11, 9, 'Contestado'),
(4, 12, 7, 'Contestado'),
(4, 13, 8, 'Contestado'),
(4, 13, 10, 'Contestado'),
(4, 14, 9, 'Contestado'),
(4, 15, 10, 'Contestado'),
(4, 15, 11, 'Contestado'),
(4, 16, 11, 'Contestado'),
(5, 1, 1, 'No Contestado'),
(5, 9, 1, 'No Contestado'),
(6, 1, 1, 'No Contestado'),
(6, 8, 12, 'No Contestado'),
(6, 8, 13, 'No Contestado'),
(7, 1, 1, 'No Contestado'),
(7, 8, 12, 'Contestado'),
(7, 8, 13, 'Contestado'),
(10, 1, 1, 'No Contestado'),
(11, 1, 1, 'Contestado'),
(11, 8, 12, 'No Contestado'),
(11, 8, 13, 'No Contestado'),
(12, 8, 12, 'No Contestado'),
(12, 8, 13, 'Contestado'),
(15, 8, 12, 'No Contestado'),
(15, 8, 13, 'No Contestado'),
(18, 8, 12, 'No Contestado'),
(18, 8, 13, 'Contestado');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
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
  `id_empleado_assistant` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id_feedback`, `calificacion_craft`, `calificacion_personal`, `calificacion_business`, `calificacion_promedio`, `comentario_craft`, `comentario_personal`, `comentario_business`, `comentario_general`, `id_empleado_member`, `id_empleado_assistant`, `id_periodo`) VALUES
(2, '1.2', '1.1', '3.3', '2.1', 'comentario craft predetermidano 2', 'comentario personal predeterminado 2', 'comentario business predeterminado 2', 'comentario general predeterminado 2', 2, 1, 2),
(3, '2.2', '3.2', '3.1', '2.3', 'comentario craft predetermidano 3', 'comentario personal predeterminado 3', 'comentario business predeterminado 3', 'comentario general predeterminado 3', 3, 1, 3),
(4, '2.1', '3.3', '3.2', '2.2', 'comentario craft predetermidano 4', 'comentario personal predeterminado 4', 'comentario business predeterminado 4', 'comentario general predeterminado 4', 4, 1, 4),
(5, '5.1', '3.1', '3.1', '4.2', 'comentario craft predetermidano 5', 'comentario personal predeterminado 5', 'comentario business predeterminado 5', 'comentario general predeterminado 5', 5, 1, 5),
(6, '1.1', '3.2', '4.1', '1.3', 'comentario craft predetermidano 6', 'comentario personal predeterminado 6', 'comentario business predeterminado 6', 'comentario general predeterminado 6', 6, 3, 6),
(7, '3.2', '3.1', '3.2', '3.2', 'comentario craft predetermidano 7', 'comentario personal predeterminado 7', 'comentario business predeterminado 7', 'comentario general predeterminado 7', 7, 3, 7),
(8, '3.3', '4.1', '2.1', '3.3', 'comentario craft predetermidano 8', 'comentario personal predeterminado 8', 'comentario business predeterminado 8', 'comentario general predeterminado 8', 8, 3, 8),
(9, '3.1', '3.1', '5.1', '3.2', 'comentario craft predetermidano 9', 'comentario personal predeterminado 9', 'comentario business predeterminado 9', 'comentario general predeterminado 9', 9, 3, 9),
(10, '3.2', '4.1', '1.1', '3.2', 'comentario craft predetermidano 10', 'comentario personal predeterminado 10', 'comentario business predeterminado 10', 'comentario general predeterminado 10', 10, 3, 10),
(11, '3.1', '3.3', '3.2', '3.1', 'comentario craft predetermidano 11', 'comentario personal predeterminado 11', 'comentario business predeterminado 11', 'comentario general predeterminado 11', 11, 3, 1),
(12, '4.1', '4.1', '3.3', '4.1', 'comentario craft predetermidano 12', 'comentario personal predeterminado 12', 'comentario business predeterminado 12', 'comentario general predeterminado 12', 12, 10, 2),
(13, '5.1', '3.2', '3.2', '4.3', 'comentario craft predetermidano 13', 'comentario personal predeterminado 13', 'comentario business predeterminado 13', 'comentario general predeterminado 13', 13, 10, 3),
(14, '1.1', '2.1', '3.3', '1.3', 'comentario craft predetermidano 14', 'comentario personal predeterminado 14', 'comentario business predeterminado 14', 'comentario general predeterminado 14', 14, 10, 4),
(15, '3.2', '5.1', '3.1', '3.3', 'comentario craft predetermidano 15', 'comentario personal predeterminado 15', 'comentario business predeterminado 15', 'comentario general predeterminado 15', 15, 10, 5),
(16, '3.3', '1.1', '3.2', '3.1', 'comentario craft predetermidano 16', 'comentario personal predeterminado 16', 'comentario business predeterminado 16', 'comentario general predeterminado 16', 16, 10, 6),
(17, '3.1', '3.2', '3.1', '3.1', 'comentario craft predetermidano 17', 'comentario personal predeterminado 17', 'comentario business predeterminado 17', 'comentario general predeterminado 17', 17, 10, 7),
(18, '3.2', '3.3', '4.1', '3.2', 'comentario craft predetermidano 18', 'comentario personal predeterminado 18', 'comentario business predeterminado 18', 'comentario general predeterminado 18', 18, 17, 8),
(19, '3.1', '4.2', '3.1', '3.2', 'comentario craft predetermidano 19', 'comentario personal predeterminado 19', 'comentario business predeterminado 19', 'comentario general predeterminado 19', 19, 17, 9),
(20, '4.1', '1.2', '1.1', '2.3', 'comentario craft predetermidano 20', 'comentario personal predeterminado 20', 'comentario business predeterminado 20', 'comentario general predeterminado 20', 20, 2, 10),
(21, '3.3', '2.2', '5.1', '4.1', 'comentario craft predetermidano 21', 'comentario personal predeterminado 21', 'comentario business predeterminado 21', 'comentario general predeterminado 21', 21, 2, 1),
(22, '4.1', '4.1', '1.1', '3.1', 'comentario craft predetermidano 22', 'comentario personal predeterminado 22', 'comentario business predeterminado 22', 'comentario general predeterminado 22', 22, 2, 2),
(23, '3.2', '3.3', '3.2', '3.2', 'comentario craft predetermidano 23', 'comentario personal predeterminado 23', 'comentario business predeterminado 23', 'comentario general predeterminado 23', 23, 2, 3),
(24, '3.2', '4.1', '3.3', '3.3', 'comentario craft predetermidano 24', 'comentario personal predeterminado 24', 'comentario business predeterminado 24', 'comentario general predeterminado 24', 24, 2, 4),
(25, '3.1', '3.2', '4.2', '3.2', 'comentario craft predetermidano 25', 'comentario personal predeterminado 25', 'comentario business predeterminado 25', 'comentario general predeterminado 25', 25, 2, 5),
(26, '3.3', '3.2', '1.2', '2.3', 'comentario craft predetermidano 26', 'comentario personal predeterminado 26', 'comentario business predeterminado 26', 'comentario general predeterminado 26', 26, 16, 6),
(27, '2.0', '2.0', '2.0', '2.0', 'c', 'p', 'b', 'g', 2, 1, 20),
(28, '6.0', '6.0', '6.0', '6.0', 'cr', 'pe', 'bu', 'ge', 2, 6, 20),
(29, '6.0', '6.0', '6.0', '6.0', 'cr', 'pe', 'bu', 'ge', 4, 6, 20),
(30, '8.0', '8.0', '8.0', '6.0', 'cra', 'per', 'bus', 'gen', 2, 8, 20),
(31, '8.0', '8.0', '8.0', '6.0', 'cra', 'per', 'bus', 'gen', 8, 2, 20),
(32, '0.0', '0.0', '0.0', '0.0', 'ewr', 'reg', 'ewr', 'wrer', 22, 1, 4),
(33, '1.3', '1.4', '1.2', '1.2', 'Los avances presentes en los proyectos que realizaste demuestran que tus conocimientos de Java han aumentado. ¡Sigue así!', 'Dentro del trabajo hemos notado que has comenzado a desenvolverte más. Recuerda que la comunicación es importante para realizar los proyectos que te sean asignados.', 'Tus habilidades en esta dimensión van creciendo. Recuerda que debes de trabajar más para equilibrar tus habilidades.', 'Desde que iniciaste a trabajar en este equipo, hemos podido observar que tu crecimiento es constante y por eso estamos ansiosos de seguir compartiendo contigo el camino rumbo a tu crecimiento.', 10, 1, 1),
(34, '1.4', '1.4', '1.4', '1.4', 'Los avances demuestran que tus habilidades han crecido mucho en este rubro. La implementación de tus funciones han mejorado, pero, recuerda que es importante mejorar la limpieza de tu código.', 'A pesar de mantenerte con esta misma calificación, recuerda que el hecho de haber mejorado los resultados de las otras dos dimensiones demuestran tus compromisos por equilibrar tus capacidades.', 'Notamos que has contribuido más en este rubro, sabemos que no siempre es fácil y por eso agradecemos tu dedicación, especialmente en el contacto estrecho que tuviste con los clientes.', 'Al equilibrar tus habilidades has demostrado que es hora de que tu nivel crezca, recuerda que esto no es sino una muestra de la confianza y compromiso que tenemos de trabajar contigo.', 10, 1, 2),
(35, '1.4', '1.4', '1.4', '1.4', 'Siguiendo con las recomendaciones pasadas, recuerda que la limpieza de tu código es importante, si tienes dudas, recuerda apoyarte en tus compañeros de equipo.', 'Recuerda que la comunicación es importante para seguir mejorando las relaciones que tienes con tu equipo.', 'Como señalan tus compañeros, la estrecha comunicación que mantienes con los clientes es buena, solamente recuerda que es importante ocupar algunas de esas oportunidades para aclarar el estado de desarrollo de los proyectos.', 'Mantenerse en el mismo nivel no es malo, significa que tu esfuerzo sigue siendo constante; si en algún momento deseas avanzar en este camino con nosotros, recuerda que estaremos aquí para apoyarte en lo que necesites.', 10, 1, 3),
(36, '2.0', '2.3', '2.3', '2.2', 'Vemos que la limpieza en tu código ha mejorado; recuerda utilizar nombres de variables que sean más cercanas a lo que representan.', 'Tus habilidades de comunicación han mejorado, tus compañeros han comenzado a notar una mayor iniciativa a la hora de dirigir tus proyectos.', 'La comunicación con los clientes ha sido clara y concisa.', 'Tus frutos han dado resultados, recuerda que, a pesar de que el camino sea laborioso, tanto tus compañeros de equipo como yo estaremos dispuestos a a poyarte en lo que necesites.', 10, 1, 4),
(37, '2.3', '3.0', '3.0', '2.4', 'Tus habilidades han mejorado, sabemos que las herramientas que has comenzado a utilizar pueden resultar algo confusas, pero nos alegra ver el compromiso que tienes para aprender a utilizarlas.', 'Comenzamos a ver que se te da muy bien participar activamente con tu equipo asumiendo un rol de líder, agradecemos mucho el apoyo que le brindas a todos tus compañeros.', 'Sabemos que muchas veces entender lo que un cliente pide es difícil y es por eso que reconocemos que tus habilidades para elaborar funcionalidades y puntos de mejora.', 'Cada vez estás más cerca de llegar a un nuevo escalón en esta empresa, agradecemos mucho de tu compromiso y de los servicios que nos brindas, sin tí, la empresa no sería lo que es ahora.', 10, 1, 5),
(38, '1.3', '1.4', '1.2', '1.2', 'Los avances presentes en los proyectos que realizaste demuestran que tus conocimientos de Java han aumentado. ¡Sigue así!', 'Dentro del trabajo hemos notado que has comenzado a desenvolverte más. Recuerda que la comunicación es importante para realizar los proyectos que te sean asignados.', 'Tus habilidades en esta dimensión van creciendo. Recuerda que debes de trabajar más para equilibrar tus habilidades.', 'Desde que iniciaste a trabajar en este equipo, hemos podido observar que tu crecimiento es constante y por eso estamos ansiosos de seguir compartiendo contigo el camino rumbo a tu crecimiento.', 10, 1, 1),
(39, '1.4', '1.4', '1.4', '1.4', 'Los avances demuestran que tus habilidades han crecido mucho en este rubro. La implementación de tus funciones han mejorado, pero, recuerda que es importante mejorar la limpieza de tu código.', 'A pesar de mantenerte con esta misma calificación, recuerda que el hecho de haber mejorado los resultados de las otras dos dimensiones demuestran tus compromisos por equilibrar tus capacidades.', 'Notamos que has contribuido más en este rubro, sabemos que no siempre es fácil y por eso agradecemos tu dedicación, especialmente en el contacto estrecho que tuviste con los clientes.', 'Al equilibrar tus habilidades has demostrado que es hora de que tu nivel crezca, recuerda que esto no es sino una muestra de la confianza y compromiso que tenemos de trabajar contigo.', 10, 1, 2),
(40, '1.4', '1.4', '1.4', '1.4', 'Siguiendo con las recomendaciones pasadas, recuerda que la limpieza de tu código es importante, si tienes dudas, recuerda apoyarte en tus compañeros de equipo.', 'Recuerda que la comunicación es importante para seguir mejorando las relaciones que tienes con tu equipo.', 'Como señalan tus compañeros, la estrecha comunicación que mantienes con los clientes es buena, solamente recuerda que es importante ocupar algunas de esas oportunidades para aclarar el estado de desarrollo de los proyectos.', 'Mantenerse en el mismo nivel no es malo, significa que tu esfuerzo sigue siendo constante; si en algún momento deseas avanzar en este camino con nosotros, recuerda que estaremos aquí para apoyarte en lo que necesites.', 10, 1, 3),
(41, '2.0', '2.3', '2.3', '2.2', 'Vemos que la limpieza en tu código ha mejorado; recuerda utilizar nombres de variables que sean más cercanas a lo que representan.', 'Tus habilidades de comunicación han mejorado, tus compañeros han comenzado a notar una mayor iniciativa a la hora de dirigir tus proyectos.', 'La comunicación con los clientes ha sido clara y concisa.', 'Tus frutos han dado resultados, recuerda que, a pesar de que el camino sea laborioso, tanto tus compañeros de equipo como yo estaremos dispuestos a a poyarte en lo que necesites.', 10, 1, 4),
(42, '2.3', '3.0', '3.0', '2.4', 'Tus habilidades han mejorado, sabemos que las herramientas que has comenzado a utilizar pueden resultar algo confusas, pero nos alegra ver el compromiso que tienes para aprender a utilizarlas.', 'Comenzamos a ver que se te da muy bien participar activamente con tu equipo asumiendo un rol de líder, agradecemos mucho el apoyo que le brindas a todos tus compañeros.', 'Sabemos que muchas veces entender lo que un cliente pide es difícil y es por eso que reconocemos que tus habilidades para elaborar funcionalidades y puntos de mejora.', 'Cada vez estás más cerca de llegar a un nuevo escalón en esta empresa, agradecemos mucho de tu compromiso y de los servicios que nos brindas, sin tí, la empresa no sería lo que es ahora.', 10, 1, 5),
(43, '1.3', '1.4', '1.2', '1.2', 'Los avances presentes en los proyectos que realizaste demuestran que tus conocimientos de Java han aumentado. ¡Sigue así!', 'Dentro del trabajo hemos notado que has comenzado a desenvolverte más. Recuerda que la comunicación es importante para realizar los proyectos que te sean asignados.', 'Tus habilidades en esta dimensión van creciendo. Recuerda que debes de trabajar más para equilibrar tus habilidades.', 'Desde que iniciaste a trabajar en este equipo, hemos podido observar que tu crecimiento es constante y por eso estamos ansiosos de seguir compartiendo contigo el camino rumbo a tu crecimiento.', 10, 1, 1),
(44, '1.4', '1.4', '1.4', '1.4', 'Los avances demuestran que tus habilidades han crecido mucho en este rubro. La implementación de tus funciones han mejorado, pero, recuerda que es importante mejorar la limpieza de tu código.', 'A pesar de mantenerte con esta misma calificación, recuerda que el hecho de haber mejorado los resultados de las otras dos dimensiones demuestran tus compromisos por equilibrar tus capacidades.', 'Notamos que has contribuido más en este rubro, sabemos que no siempre es fácil y por eso agradecemos tu dedicación, especialmente en el contacto estrecho que tuviste con los clientes.', 'Al equilibrar tus habilidades has demostrado que es hora de que tu nivel crezca, recuerda que esto no es sino una muestra de la confianza y compromiso que tenemos de trabajar contigo.', 10, 1, 2),
(45, '1.4', '1.4', '1.4', '1.4', 'Siguiendo con las recomendaciones pasadas, recuerda que la limpieza de tu código es importante, si tienes dudas, recuerda apoyarte en tus compañeros de equipo.', 'Recuerda que la comunicación es importante para seguir mejorando las relaciones que tienes con tu equipo.', 'Como señalan tus compañeros, la estrecha comunicación que mantienes con los clientes es buena, solamente recuerda que es importante ocupar algunas de esas oportunidades para aclarar el estado de desarrollo de los proyectos.', 'Mantenerse en el mismo nivel no es malo, significa que tu esfuerzo sigue siendo constante; si en algún momento deseas avanzar en este camino con nosotros, recuerda que estaremos aquí para apoyarte en lo que necesites.', 10, 1, 3),
(46, '2.0', '2.3', '2.3', '2.2', 'Vemos que la limpieza en tu código ha mejorado; recuerda utilizar nombres de variables que sean más cercanas a lo que representan.', 'Tus habilidades de comunicación han mejorado, tus compañeros han comenzado a notar una mayor iniciativa a la hora de dirigir tus proyectos.', 'La comunicación con los clientes ha sido clara y concisa.', 'Tus frutos han dado resultados, recuerda que, a pesar de que el camino sea laborioso, tanto tus compañeros de equipo como yo estaremos dispuestos a a poyarte en lo que necesites.', 10, 1, 4),
(47, '2.3', '3.0', '3.0', '2.4', 'Tus habilidades han mejorado, sabemos que las herramientas que has comenzado a utilizar pueden resultar algo confusas, pero nos alegra ver el compromiso que tienes para aprender a utilizarlas.', 'Comenzamos a ver que se te da muy bien participar activamente con tu equipo asumiendo un rol de líder, agradecemos mucho el apoyo que le brindas a todos tus compañeros.', 'Sabemos que muchas veces entender lo que un cliente pide es difícil y es por eso que reconocemos que tus habilidades para elaborar funcionalidades y puntos de mejora.', 'Cada vez estás más cerca de llegar a un nuevo escalón en esta empresa, agradecemos mucho de tu compromiso y de los servicios que nos brindas, sin tí, la empresa no sería lo que es ahora.', 10, 1, 5),
(48, '1.3', '1.4', '1.2', '1.2', 'Los avances presentes en los proyectos que realizaste demuestran que tus conocimientos de Java han aumentado. ¡Sigue así!', 'Dentro del trabajo hemos notado que has comenzado a desenvolverte más. Recuerda que la comunicación es importante para realizar los proyectos que te sean asignados.', 'Tus habilidades en esta dimensión van creciendo. Recuerda que debes de trabajar más para equilibrar tus habilidades.', 'Desde que iniciaste a trabajar en este equipo, hemos podido observar que tu crecimiento es constante y por eso estamos ansiosos de seguir compartiendo contigo el camino rumbo a tu crecimiento.', 10, 1, 1),
(49, '1.4', '1.4', '1.4', '1.4', 'Los avances demuestran que tus habilidades han crecido mucho en este rubro. La implementación de tus funciones han mejorado, pero, recuerda que es importante mejorar la limpieza de tu código.', 'A pesar de mantenerte con esta misma calificación, recuerda que el hecho de haber mejorado los resultados de las otras dos dimensiones demuestran tus compromisos por equilibrar tus capacidades.', 'Notamos que has contribuido más en este rubro, sabemos que no siempre es fácil y por eso agradecemos tu dedicación, especialmente en el contacto estrecho que tuviste con los clientes.', 'Al equilibrar tus habilidades has demostrado que es hora de que tu nivel crezca, recuerda que esto no es sino una muestra de la confianza y compromiso que tenemos de trabajar contigo.', 10, 1, 2),
(50, '1.4', '1.4', '1.4', '1.4', 'Siguiendo con las recomendaciones pasadas, recuerda que la limpieza de tu código es importante, si tienes dudas, recuerda apoyarte en tus compañeros de equipo.', 'Recuerda que la comunicación es importante para seguir mejorando las relaciones que tienes con tu equipo.', 'Como señalan tus compañeros, la estrecha comunicación que mantienes con los clientes es buena, solamente recuerda que es importante ocupar algunas de esas oportunidades para aclarar el estado de desarrollo de los proyectos.', 'Mantenerse en el mismo nivel no es malo, significa que tu esfuerzo sigue siendo constante; si en algún momento deseas avanzar en este camino con nosotros, recuerda que estaremos aquí para apoyarte en lo que necesites.', 10, 1, 3),
(51, '2.0', '2.3', '2.3', '2.2', 'Vemos que la limpieza en tu código ha mejorado; recuerda utilizar nombres de variables que sean más cercanas a lo que representan.', 'Tus habilidades de comunicación han mejorado, tus compañeros han comenzado a notar una mayor iniciativa a la hora de dirigir tus proyectos.', 'La comunicación con los clientes ha sido clara y concisa.', 'Tus frutos han dado resultados, recuerda que, a pesar de que el camino sea laborioso, tanto tus compañeros de equipo como yo estaremos dispuestos a a poyarte en lo que necesites.', 10, 1, 4),
(52, '2.3', '3.0', '3.0', '2.4', 'Tus habilidades han mejorado, sabemos que las herramientas que has comenzado a utilizar pueden resultar algo confusas, pero nos alegra ver el compromiso que tienes para aprender a utilizarlas.', 'Comenzamos a ver que se te da muy bien participar activamente con tu equipo asumiendo un rol de líder, agradecemos mucho el apoyo que le brindas a todos tus compañeros.', 'Sabemos que muchas veces entender lo que un cliente pide es difícil y es por eso que reconocemos que tus habilidades para elaborar funcionalidades y puntos de mejora.', 'Cada vez estás más cerca de llegar a un nuevo escalón en esta empresa, agradecemos mucho de tu compromiso y de los servicios que nos brindas, sin tí, la empresa no sería lo que es ahora.', 10, 1, 5),
(53, '1.3', '1.4', '1.2', '1.2', 'Los avances presentes en los proyectos que realizaste demuestran que tus conocimientos de Java han aumentado. ¡Sigue así!', 'Dentro del trabajo hemos notado que has comenzado a desenvolverte más. Recuerda que la comunicación es importante para realizar los proyectos que te sean asignados.', 'Tus habilidades en esta dimensión van creciendo. Recuerda que debes de trabajar más para equilibrar tus habilidades.', 'Desde que iniciaste a trabajar en este equipo, hemos podido observar que tu crecimiento es constante y por eso estamos ansiosos de seguir compartiendo contigo el camino rumbo a tu crecimiento.', 1, 2, 1),
(54, '1.4', '1.4', '1.4', '1.4', 'Los avances demuestran que tus habilidades han crecido mucho en este rubro. La implementación de tus funciones han mejorado, pero, recuerda que es importante mejorar la limpieza de tu código.', 'A pesar de mantenerte con esta misma calificación, recuerda que el hecho de haber mejorado los resultados de las otras dos dimensiones demuestran tus compromisos por equilibrar tus capacidades.', 'Notamos que has contribuido más en este rubro, sabemos que no siempre es fácil y por eso agradecemos tu dedicación, especialmente en el contacto estrecho que tuviste con los clientes.', 'Al equilibrar tus habilidades has demostrado que es hora de que tu nivel crezca, recuerda que esto no es sino una muestra de la confianza y compromiso que tenemos de trabajar contigo.', 1, 2, 2),
(55, '1.4', '1.4', '1.4', '1.4', 'Siguiendo con las recomendaciones pasadas, recuerda que la limpieza de tu código es importante, si tienes dudas, recuerda apoyarte en tus compañeros de equipo.', 'Recuerda que la comunicación es importante para seguir mejorando las relaciones que tienes con tu equipo.', 'Como señalan tus compañeros, la estrecha comunicación que mantienes con los clientes es buena, solamente recuerda que es importante ocupar algunas de esas oportunidades para aclarar el estado de desarrollo de los proyectos.', 'Mantenerse en el mismo nivel no es malo, significa que tu esfuerzo sigue siendo constante; si en algún momento deseas avanzar en este camino con nosotros, recuerda que estaremos aquí para apoyarte en lo que necesites.', 1, 2, 3),
(56, '2.0', '2.3', '2.3', '2.2', 'Vemos que la limpieza en tu código ha mejorado; recuerda utilizar nombres de variables que sean más cercanas a lo que representan.', 'Tus habilidades de comunicación han mejorado, tus compañeros han comenzado a notar una mayor iniciativa a la hora de dirigir tus proyectos.', 'La comunicación con los clientes ha sido clara y concisa.', 'Tus frutos han dado resultados, recuerda que, a pesar de que el camino sea laborioso, tanto tus compañeros de equipo como yo estaremos dispuestos a a poyarte en lo que necesites.', 1, 2, 4),
(57, '2.3', '3.0', '3.0', '2.4', 'Tus habilidades han mejorado, sabemos que las herramientas que has comenzado a utilizar pueden resultar algo confusas, pero nos alegra ver el compromiso que tienes para aprender a utilizarlas.', 'Comenzamos a ver que se te da muy bien participar activamente con tu equipo asumiendo un rol de líder, agradecemos mucho el apoyo que le brindas a todos tus compañeros.', 'Sabemos que muchas veces entender lo que un cliente pide es difícil y es por eso que reconocemos que tus habilidades para elaborar funcionalidades y puntos de mejora.', 'Cada vez estás más cerca de llegar a un nuevo escalón en esta empresa, agradecemos mucho de tu compromiso y de los servicios que nos brindas, sin tí, la empresa no sería lo que es ahora.', 1, 2, 5),
(59, '3.1', '3.2', '3.3', '3.2', 'Predeterminado craft', 'Predeterminado personal', 'Predeterminado business', 'Predeterminado general', 2, 1, 21),
(60, '3.1', '3.2', '3.3', '3.2', 'Predeterminado craft', 'Predeterminado personal', 'Predeterminado business', 'Predeterminado general', 2, 1, 21),
(61, '3.1', '3.2', '3.3', '3.2', 'Predeterminado craft', 'Predeterminado personal', 'Predeterminado business', 'Predeterminado general', 11, 1, 21),
(62, '3.1', '3.2', '3.3', '3.2', 'Predeterminado craft', 'Predeterminado personal', 'Predeterminado business', 'Predeterminado general', 2, 3, 21),
(63, '2.2', '1.3', '2.3', '2.2', 'comentario craft registrado2', 'comentario people registrado2', 'comentario business registrado2', 'registrado2', 2, 1, 4),
(64, '1.0', '1.0', '2.3', '1.0', '', '', '', 'registrado2', 2, 1, 4),
(65, '5.0', '5.0', '5.0', '5.0', 'lorem ipsum sit dolor amet', 'Tu equipo se expresa muy bien de ti, les gusta trabajar contigo', 'lorem ipsum sit dolor amet', 'Te está yendo muy bien', 22, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `funcion`
--

CREATE TABLE `funcion` (
  `id_funcion` int(11) NOT NULL,
  `nombre_funcion` varchar(45) DEFAULT NULL,
  `descripcion_funcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `funcion`
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
-- Table structure for table `periodo`
--

CREATE TABLE `periodo` (
  `id_periodo` int(11) NOT NULL,
  `nombre_periodo` varchar(45) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estatus_periodo` varchar(55) NOT NULL,
  `id_chapter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `periodo`
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
(13, 'Primer mes 2022', '2001-01-22', '2009-01-22', 'Proximo', 1),
(14, 'Otoño 2022', '2022-09-22', '2022-12-21', 'Proximo', 1),
(15, 'Julio 2022', '2022-07-01', '2022-07-28', 'Proximo', 1),
(16, 'Junio 2022', '2022-06-01', '2022-06-28', 'Proximo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `respuesta`
--

CREATE TABLE `respuesta` (
  `id_respuesta` int(11) NOT NULL,
  `pregunta` varchar(255) DEFAULT NULL,
  `descripcion_respuesta` varchar(255) NOT NULL,
  `tipo_respuesta` varchar(45) DEFAULT NULL,
  `id_empleado_evaluador` int(11) NOT NULL,
  `id_empleado_evaluado` int(11) NOT NULL,
  `id_periodo` int(11) NOT NULL,
  `dimension_respuesta` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `respuesta`
--

INSERT INTO `respuesta` (`id_respuesta`, `pregunta`, `descripcion_respuesta`, `tipo_respuesta`, `id_empleado_evaluador`, `id_empleado_evaluado`, `id_periodo`, `dimension_respuesta`) VALUES
(1, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas', 'abierta', 2, 4, 13, 'craft'),
(2, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 2, 4, 13, 'craft'),
(3, 'Del a 1 al 5. ¿Cómo evaluarias la dimension bussines? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '2', 'calificacion', 1, 6, 1, 'business'),
(4, 'Del a 1 al 5. ¿Qué tanto se comporta de acuerdo a las politicas de la empresa? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'abierta', 1, 6, 1, 'business'),
(5, 'Desde tu perspectiva,¿crees que hace un trabajo integral a la visión y misión de la empresa? Describe sí o n y por qué', '5', 'abierta', 1, 6, 1, 'business'),
(6, '¿Qué le recomendarias al evaluado para mejorar?', '5', 'abierta', 1, 6, 1, 'business'),
(7, 'Del 1 al 5 donde 5 es excelente y 1 deficiente. ¿Qué tan bien documenta el evaluado?', '5', 'numerica', 1, 6, 1, 'business'),
(8, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', '5', 'abierta', 1, 6, 1, 'craft'),
(9, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 1, 6, 1, 'craft'),
(10, 'Describe cómo el evaluado atiende las recomendaciones que le hace sus compañeros. Menciona 2 ejemplos.', '5', 'abierta', 1, 6, 1, 'craft'),
(11, '¿Qué le recomendarias al evaluado para mejorar?', '5', 'abierta', 1, 6, 1, 'craft'),
(12, 'Describe el trato que tuvo contigo desde la perspectiva de respeto a tu integridad', '5', 'abierta', 1, 6, 1, 'craft'),
(13, '¿Cuál es la importancia de su trabajo en la empresa?', '5', 'abierta', 1, 6, 1, 'craft'),
(14, 'prueba update', '5', 'numerica', 1, 6, 1, 'craft'),
(15, 'Cambio exitoso', '5', 'abierta', 1, 6, 1, 'craft'),
(16, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '4', 'calificacion', 1, 6, 1, 'people'),
(17, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 2, 4, 12, 'craft'),
(18, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 2, 4, 12, 'craft'),
(27, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 1, 4, 11, 'craft'),
(28, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 1, 4, 11, 'craft'),
(29, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 2, 4, 11, 'craft'),
(30, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 2, 4, 11, 'craft'),
(37, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 2, 1, 4, 'craft'),
(38, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 2, 1, 4, 'craft'),
(45, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 2, 1, 1, 'craft'),
(46, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 2, 1, 1, 'craft'),
(47, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 1, 9, 1, 'craft'),
(48, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 1, 9, 1, 'craft'),
(49, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 1, 9, 1, 'craft'),
(50, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 1, 9, 1, 'craft'),
(51, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 1, 9, 1, 'craft'),
(52, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 1, 9, 1, 'craft'),
(53, '¿Cúal crees que es la mejor habilidad del miembro evaluado?', 'Le echa ganas 2', 'abierta', 1, 9, 1, 'craft'),
(54, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '5', 'numerica', 1, 9, 1, 'craft'),
(55, 'Del a 1 al 5. ¿Cómo evaluarias la dimension bussines? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '35', 'calificacion', 1, 9, 1, 'business'),
(56, 'Del a 1 al 5. ¿Qué tanto se comporta de acuerdo a las politicas de la empresa? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '35', 'abierta', 1, 9, 1, 'business'),
(57, 'Desde tu perspectiva,¿crees que hace un trabajo integral a la visión y misión de la empresa? Describe sí o n y por qué', '35', 'abierta', 1, 9, 1, 'business'),
(58, '¿Qué le recomendarias al evaluado para mejorar?', '35', 'abierta', 1, 9, 1, 'business'),
(59, 'Del 1 al 5 donde 5 es excelente y 1 deficiente. ¿Qué tan bien documenta el evaluado?', '3', 'numerica', 1, 9, 1, 'business'),
(60, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '\n35', 'abierta', 1, 9, 1, 'craft'),
(61, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '35', 'calificacion', 1, 9, 1, 'craft'),
(62, 'Del a 1 al 5. ¿Cómo evaluarias la dimension people? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '35', 'calificacion', 1, 9, 1, 'people'),
(63, 'Del a 1 al 5. ¿Cómo el trato a los demás compañeros de trabajo? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '35', 'abierta', 1, 9, 1, 'people'),
(64, '¿Crees que la salud del evaluado está en riesgo? ¿Se desvela trabajando? ¿Tiene malos hábitos alimenticios?', '35', 'abierta', 1, 9, 1, 'people'),
(65, '¿Qué le recomendarias al evaluado para mejorar?', '35', 'abierta', 1, 9, 1, 'people'),
(66, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'numerica', 1, 1, 1, 'business'),
(67, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'numerica', 1, 1, 1, 'craft'),
(68, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'numerica', 1, 1, 1, 'craft'),
(69, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'abierta', 1, 1, 1, 'craft'),
(70, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'numerica', 1, 1, 1, 'craft'),
(71, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'numerica', 1, 1, 1, 'craft'),
(72, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1', 'calificacion', 1, 1, 1, 'people'),
(73, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 1, 1, 1, 'business'),
(74, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 1, 1, 1, 'craft'),
(75, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 1, 1, 1, 'craft'),
(76, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'abierta', 1, 1, 1, 'craft'),
(77, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 1, 1, 1, 'craft'),
(78, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 1, 1, 1, 'craft'),
(79, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'calificacion', 1, 1, 1, 'people'),
(80, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 3, 1, 1, 'business'),
(81, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 3, 1, 1, 'craft'),
(82, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 3, 1, 1, 'craft'),
(83, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'abierta', 3, 1, 1, 'craft'),
(84, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 3, 1, 1, 'craft'),
(85, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'numerica', 3, 1, 1, 'craft'),
(86, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '', 'calificacion', 3, 1, 1, 'people'),
(87, 'Del a 1 al 5. ¿Cómo evaluarias la dimension bussines? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '2', 'calificacion', 3, 9, 1, 'business'),
(88, 'Del a 1 al 5. ¿Qué tanto se comporta de acuerdo a las politicas de la empresa? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '3', 'abierta', 3, 9, 1, 'business'),
(89, 'Desde tu perspectiva,¿crees que hace un trabajo integral a la visión y misión de la empresa? Describe sí o n y por qué', 'si', 'abierta', 3, 9, 1, 'business'),
(90, '¿Qué le recomendarias al evaluado para mejorar?', '´mejorar', 'abierta', 3, 9, 1, 'business'),
(91, 'Del 1 al 5 donde 5 es excelente y 1 deficiente. ¿Qué tan bien documenta el evaluado?', '2', 'numerica', 3, 9, 1, 'business'),
(92, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 'xd', 'abierta', 3, 9, 1, 'craft'),
(93, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '2', 'calificacion', 3, 9, 1, 'craft'),
(94, 'Del a 1 al 5. ¿Cómo evaluarias la dimension people? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '3', 'calificacion', 3, 9, 1, 'people'),
(95, 'Del a 1 al 5. ¿Cómo el trato a los demás compañeros de trabajo? Siendo 1 que requiere mejorar y 5 que excede las expectativas', 'ola', 'abierta', 3, 9, 1, 'people'),
(96, '¿Crees que la salud del evaluado está en riesgo? ¿Se desvela trabajando? ¿Tiene malos hábitos alimenticios?', 'como estas', 'abierta', 3, 9, 1, 'people'),
(97, '¿Qué le recomendarias al evaluado para mejorar?', 'yo bien', 'abierta', 3, 9, 1, 'people'),
(98, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '4', 'numerica', 11, 1, 1, 'business'),
(99, 'Describe cómo el evaluado atiende las recomendaciones que le hace sus compañeros. (Menciona 2 ejemplos)', 'Siempre toma la retroalimentación para mejorar', 'abierta', 11, 1, 1, 'craft'),
(100, '¿En cuantos proyectos colaboraste con el evaluado?', '5', 'numerica', 11, 1, 1, 'craft'),
(101, 'A que nivel crees que deberia estar en esta categoria', '5', 'calificacion', 11, 1, 1, 'craft'),
(102, '¿Como te llevaste personalmente con el evaluado en proyectos/iniciativas que coincidieron?', 'Alan Brito trabajó muy bien', 'abierta', 11, 1, 1, 'people'),
(103, '¿Como calificarias la forma de expresar conceptos el evaluado? (tecnicos a un cliente)', '4', 'calificacion', 11, 1, 1, 'people'),
(104, '¿En general, cómo es la retroalimentación que da en las revisiones de código?', '1', 'abierta', 1, 6, 1, 'craft'),
(105, 'Del a 1 al 5. ¿Cómo describiras su conocimiento ténico?(Dominio de JS,SQL y NODE. Siendo 1 que requiere mejorar y 5 que excede las expectativas', '4', 'numerica', 1, 6, 1, 'craft'),
(106, '¿Qué le recomendarias al evaluado para mejorar?', '1', 'abierta', 1, 6, 1, 'craft'),
(107, 'Del 1 al 5, ¿Qué tan bueno es para diseñar arquitecturas de microservicios?', '4', 'numerica', 1, 6, 1, 'craft'),
(108, 'Como calificar al evaluado', '1', 'calificacion', 1, 6, 1, 'craft'),
(109, '¿Como te llevaste personalmente con el evaluado en proyectos/iniciativas que coincidieron?', '       1', 'abierta', 1, 6, 1, 'people'),
(110, '¿Como calificarias la forma de expresar conceptos el evaluado? (tecnicos a un cliente)', '1', 'calificacion', 1, 6, 1, 'people'),
(111, 'Del a 1 al 5. ¿Cómo evaluarias la dimension bussines? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '1', 'calificacion', 1, 6, 1, 'business'),
(112, 'Del a 1 al 5. ¿Qué tanto se comporta de acuerdo a las politicas de la empresa? Siendo 1 que requiere mejorar y 5 que excede las expectativas', '1', 'abierta', 1, 6, 1, 'business'),
(113, 'Desde tu perspectiva,¿crees que hace un trabajo integral a la visión y misión de la empresa? Describe sí o n y por qué', '1', 'abierta', 1, 6, 1, 'business'),
(114, '¿Qué le recomendarias al evaluado para mejorar?', '1', 'abierta', 1, 6, 1, 'business'),
(115, 'Del 1 al 5 donde 5 es excelente y 1 deficiente. ¿Qué tan bien documenta el evaluado?', '3', 'numerica', 1, 6, 1, 'business'),
(116, 'Como lo calificarias del 1 al 5 (con decimal)', '1', 'calificacion', 1, 6, 1, 'business'),
(117, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', 'sg gsdgfd', 'abierta', 1, 7, 1, 'craft'),
(118, '¿Como calificas las habilidades en base de datos del evaluado?', '0.8', 'calificacion', 1, 7, 1, 'craft'),
(119, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '1.3', 'calificacion', 1, 7, 1, 'people'),
(120, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '4', 'numerica', 1, 7, 1, 'people'),
(121, '¿En qué proyectos/iniciativas pudiste interactuar con el evaluado?', '3', 'numerica', 1, 7, 1, 'people'),
(122, 'Describe una experencia de negociacion que tuviste con el evaluado.', ' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'abierta', 1, 7, 1, 'business'),
(123, 'Si tuvieras que calificar a tu compañero en esta area ¿Cual le darias?', '3.4', 'calificacion', 1, 7, 1, 'business'),
(124, 'Califiacion craft', '5', 'calificacion', 4, 8, 13, 'craft'),
(125, 'Califiacion people', '4', 'calificacion', 4, 8, 13, 'people'),
(126, 'Califiacion business', '2', 'calificacion', 4, 8, 13, 'business'),
(127, 'Califiacion craft', '2', 'calificacion', 7, 8, 13, 'craft'),
(128, 'Califiacion people', '3', 'calificacion', 7, 8, 13, 'people'),
(129, 'Califiacion business', '5', 'calificacion', 7, 8, 13, 'business'),
(130, 'Califiacion craft', '1', 'calificacion', 12, 8, 13, 'craft'),
(131, 'Califiacion people', '2', 'calificacion', 12, 8, 13, 'people'),
(132, 'Califiacion business', '3', 'calificacion', 12, 8, 13, 'business'),
(133, 'Califiacion craft', '5', 'calificacion', 18, 8, 13, 'craft'),
(134, 'Califiacion people', '4', 'calificacion', 18, 8, 13, 'people'),
(135, 'Califiacion business', '2', 'calificacion', 18, 8, 13, 'business'),
(136, 'Califiacion craft', '5', 'calificacion', 4, 8, 13, 'craft'),
(137, 'Califiacion people', '4', 'calificacion', 4, 8, 13, 'people'),
(138, 'Califiacion business', '2', 'calificacion', 4, 8, 13, 'business'),
(139, 'Califiacion craft', '5', 'calificacion', 2, 8, 13, 'craft'),
(140, 'Califiacion people', '4', 'calificacion', 2, 8, 13, 'people'),
(141, 'Califiacion business', '2', 'calificacion', 2, 8, 13, 'business'),
(142, 'Califiacion craft', '5', 'calificacion', 2, 8, 11, 'craft'),
(143, 'Califiacion people', '4', 'calificacion', 2, 8, 11, 'people'),
(144, 'Califiacion business', '2', 'calificacion', 2, 8, 11, 'business'),
(145, 'Califiacion craft', '5', 'calificacion', 2, 8, 11, 'craft'),
(146, 'Califiacion people', '4', 'calificacion', 2, 8, 11, 'people'),
(147, 'Califiacion business', '2', 'calificacion', 2, 8, 11, 'business'),
(148, 'Califiacion craft', '5', 'calificacion', 3, 8, 11, 'craft'),
(149, 'Califiacion people', '4', 'calificacion', 3, 8, 11, 'people'),
(150, 'Califiacion business', '2', 'calificacion', 3, 8, 11, 'business'),
(151, 'Califiacion craft', '5', 'calificacion', 3, 8, 11, 'craft'),
(152, 'Califiacion people', '4', 'calificacion', 3, 8, 11, 'people'),
(153, 'Califiacion business', '2', 'calificacion', 3, 8, 11, 'business'),
(154, 'Califiacion craft', '5', 'calificacion', 3, 8, 11, 'craft'),
(155, 'Califiacion people', '4', 'calificacion', 3, 8, 11, 'people'),
(156, 'Califiacion business', '2', 'calificacion', 3, 8, 11, 'business'),
(157, 'Califiacion craft', '5', 'calificacion', 4, 8, 11, 'craft'),
(158, 'Califiacion people', '4', 'calificacion', 4, 8, 11, 'people'),
(159, 'Califiacion business', '2', 'calificacion', 4, 8, 11, 'business'),
(160, 'Califiacion craft', '5', 'calificacion', 4, 8, 12, 'craft'),
(161, 'Califiacion people', '4', 'calificacion', 4, 8, 12, 'people'),
(162, 'Califiacion business', '2', 'calificacion', 4, 8, 12, 'business'),
(163, 'Califiacion craft', '5', 'calificacion', 4, 8, 12, 'craft'),
(164, 'Califiacion people', '4', 'calificacion', 4, 8, 12, 'people'),
(165, 'Califiacion business', '2', 'calificacion', 4, 8, 12, 'business'),
(166, 'Califiacion craft', '5', 'calificacion', 5, 8, 12, 'craft'),
(167, 'Califiacion people', '4', 'calificacion', 5, 8, 12, 'people'),
(168, 'Califiacion business', '2', 'calificacion', 5, 8, 12, 'business'),
(169, 'Califiacion craft', '5', 'calificacion', 5, 8, 12, 'craft'),
(170, 'Califiacion people', '4', 'calificacion', 5, 8, 12, 'people'),
(171, 'Califiacion business', '2', 'calificacion', 5, 8, 12, 'business'),
(172, 'Califiacion craft', '5', 'calificacion', 5, 8, 12, 'craft'),
(173, 'Califiacion people', '4', 'calificacion', 5, 8, 12, 'people'),
(174, 'Califiacion business', '2', 'calificacion', 5, 8, 12, 'business'),
(175, 'Califiacion craft', '5', 'calificacion', 5, 8, 12, 'craft'),
(176, 'Califiacion people', '4', 'calificacion', 5, 8, 12, 'people'),
(177, 'Califiacion business', '2', 'calificacion', 5, 8, 12, 'business'),
(178, 'Califiacion craft', '5', 'calificacion', 4, 8, 13, 'craft'),
(179, 'Califiacion people', '4', 'calificacion', 4, 8, 13, 'people'),
(180, 'Califiacion business', '2', 'calificacion', 4, 8, 13, 'business'),
(181, 'Califiacion craft', '5', 'calificacion', 4, 8, 5, 'craft'),
(182, 'Califiacion people', '4', 'calificacion', 4, 8, 5, 'people'),
(183, 'Califiacion business', '2', 'calificacion', 4, 8, 5, 'business'),
(184, 'Califiacion craft', '5', 'calificacion', 4, 8, 13, 'craft'),
(185, 'Califiacion people', '4', 'calificacion', 4, 8, 13, 'people'),
(186, 'Califiacion business', '2', 'calificacion', 4, 8, 13, 'business'),
(187, 'Califiacion craft', '5', 'calificacion', 5, 8, 13, 'craft'),
(188, 'Califiacion people', '4', 'calificacion', 5, 8, 13, 'people'),
(189, 'Califiacion business', '2', 'calificacion', 5, 8, 13, 'business'),
(190, 'Califiacion craft', '5', 'calificacion', 7, 8, 13, 'craft'),
(191, 'Califiacion people', '4', 'calificacion', 7, 8, 13, 'people'),
(192, 'Califiacion business', '2', 'calificacion', 7, 8, 13, 'business'),
(193, 'Califiacion craft', '5', 'calificacion', 7, 8, 13, 'craft'),
(194, 'Califiacion people', '4', 'calificacion', 7, 8, 13, 'people'),
(195, 'Califiacion business', '2', 'calificacion', 7, 8, 13, 'business'),
(196, 'Califiacion craft', '5', 'calificacion', 7, 8, 13, 'craft'),
(197, 'Califiacion people', '4', 'calificacion', 7, 8, 13, 'people'),
(198, 'Califiacion business', '2', 'calificacion', 7, 8, 13, 'business'),
(199, 'Califiacion craft', '5', 'calificacion', 7, 8, 13, 'craft'),
(200, 'Califiacion people', '4', 'calificacion', 7, 8, 13, 'people'),
(201, 'Califiacion business', '2', 'calificacion', 7, 8, 13, 'business'),
(202, 'Califiacion craft', '5', 'calificacion', 7, 8, 13, 'craft'),
(203, 'Califiacion people', '4', 'calificacion', 7, 8, 13, 'people'),
(204, 'Califiacion business', '2', 'calificacion', 7, 8, 13, 'business'),
(205, 'Califiacion craft', '5', 'calificacion', 7, 8, 12, 'craft'),
(206, 'Califiacion people', '4', 'calificacion', 7, 8, 12, 'people'),
(207, 'Califiacion business', '2', 'calificacion', 7, 8, 12, 'business'),
(208, 'Califiacion craft', '5', 'calificacion', 7, 8, 12, 'craft'),
(209, 'Califiacion people', '4', 'calificacion', 7, 8, 12, 'people'),
(210, 'Califiacion business', '2', 'calificacion', 7, 8, 12, 'business'),
(211, 'Califiacion craft', '5', 'calificacion', 7, 8, 12, 'craft'),
(212, 'Califiacion people', '4', 'calificacion', 7, 8, 12, 'people'),
(213, 'Califiacion business', '2', 'calificacion', 7, 8, 12, 'business'),
(214, 'Califiacion craft', '5', 'calificacion', 7, 8, 12, 'craft'),
(215, 'Califiacion people', '4', 'calificacion', 7, 8, 12, 'people'),
(216, 'Califiacion business', '2', 'calificacion', 7, 8, 12, 'business'),
(217, 'Califiacion craft', '5', 'calificacion', 7, 8, 12, 'craft'),
(218, 'Califiacion people', '4', 'calificacion', 7, 8, 12, 'people'),
(219, 'Califiacion business', '2', 'calificacion', 7, 8, 12, 'business'),
(220, 'Califiacion craft', '5', 'calificacion', 4, 8, 12, 'craft'),
(221, 'Califiacion people', '4', 'calificacion', 4, 8, 12, 'people'),
(222, 'Califiacion business', '2', 'calificacion', 4, 8, 12, 'business'),
(223, 'Califiacion craft', '5', 'calificacion', 4, 8, 12, 'craft'),
(224, 'Califiacion people', '4', 'calificacion', 4, 8, 12, 'people'),
(225, 'Califiacion business', '2', 'calificacion', 4, 8, 12, 'business'),
(226, 'Califiacion craft', '5', 'calificacion', 4, 8, 12, 'craft'),
(227, 'Califiacion people', '4', 'calificacion', 4, 8, 12, 'people'),
(228, 'Califiacion business', '2', 'calificacion', 4, 8, 12, 'business'),
(229, 'Califiacion craft', '5', 'calificacion', 4, 8, 12, 'craft'),
(230, 'Califiacion people', '4', 'calificacion', 4, 8, 12, 'people'),
(231, 'Califiacion business', '2', 'calificacion', 4, 8, 12, 'business');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(45) DEFAULT NULL,
  `descripcion_rol` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`, `descripcion_rol`) VALUES
(1, 'Chapter Lead', 'Jefe de departamento.'),
(2, 'Chapter Lead Assistant', 'Asistente del jefe, se encarga de evaluar a los Chapter Members que le sean asignados.'),
(3, 'Chapter Member', 'Empleado del Chapter.');

-- --------------------------------------------------------

--
-- Table structure for table `rol_funciones`
--

CREATE TABLE `rol_funciones` (
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rol_funciones`
--

INSERT INTO `rol_funciones` (`id_rol`, `id_funcion`) VALUES
(1, 1),
(2, 1),
(3, 1),
(1, 2),
(2, 2),
(1, 3),
(3, 3),
(2, 4),
(3, 4),
(1, 5),
(3, 5),
(2, 6),
(3, 6),
(1, 7),
(3, 7),
(1, 8),
(3, 8),
(1, 9),
(1, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(3, 21),
(3, 22),
(3, 23),
(3, 24),
(3, 25),
(3, 26),
(3, 27),
(3, 28),
(3, 29),
(3, 30),
(1, 31),
(2, 31),
(3, 31);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asignacion`
--
ALTER TABLE `asignacion`
  ADD PRIMARY KEY (`id_empleado_member`,`id_empleado_assistant`,`fecha_asignacion`),
  ADD KEY `id_empleado_assistant_idx` (`id_empleado_assistant`);

--
-- Indexes for table `banco_preguntas`
--
ALTER TABLE `banco_preguntas`
  ADD PRIMARY KEY (`id_pregunta`);

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id_chapter`);

--
-- Indexes for table `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `id_chapter_idx` (`id_chapter`);

--
-- Indexes for table `empleado_rol`
--
ALTER TABLE `empleado_rol`
  ADD PRIMARY KEY (`id_empleado`,`id_rol`,`fecha_rol`),
  ADD KEY `id_rol_idx` (`id_rol`);

--
-- Indexes for table `evaluacion`
--
ALTER TABLE `evaluacion`
  ADD PRIMARY KEY (`id_empleado_evaluador`,`id_empleado_evaluado`,`id_periodo`),
  ADD KEY `id_empleado_evaluado_idx` (`id_empleado_evaluado`),
  ADD KEY `id_periodo_idx` (`id_periodo`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id_feedback`),
  ADD KEY `id_empleado_assistant_idx` (`id_empleado_assistant`),
  ADD KEY `id_empleado_member_idx` (`id_empleado_member`),
  ADD KEY `fk_feedback_periodo1_idx` (`id_periodo`);

--
-- Indexes for table `funcion`
--
ALTER TABLE `funcion`
  ADD PRIMARY KEY (`id_funcion`);

--
-- Indexes for table `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id_periodo`),
  ADD KEY `id_chapter_idx` (`id_chapter`);

--
-- Indexes for table `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`id_respuesta`),
  ADD KEY `id_empleado_evaluado_idx` (`id_empleado_evaluado`),
  ADD KEY `id_empleado_evaluador_idx` (`id_empleado_evaluador`),
  ADD KEY `id_periodo` (`id_periodo`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indexes for table `rol_funciones`
--
ALTER TABLE `rol_funciones`
  ADD PRIMARY KEY (`id_rol`,`id_funcion`),
  ADD KEY `id_funcion_idx` (`id_funcion`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banco_preguntas`
--
ALTER TABLE `banco_preguntas`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `chapter`
--
ALTER TABLE `chapter`
  MODIFY `id_chapter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id_feedback` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `funcion`
--
ALTER TABLE `funcion`
  MODIFY `id_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id_periodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `id_periodo` FOREIGN KEY (`id_periodo`) REFERENCES `periodo` (`id_periodo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
