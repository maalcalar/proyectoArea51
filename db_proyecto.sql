-- MySQL dump 10.13  Distrib 5.7.10, for Win64 (x86_64)
--
-- Host: localhost    Database: db_proyecto
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `passport`
--

DROP TABLE IF EXISTS `passport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `passport` (
  `protocol` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `identifier` varchar(255) DEFAULT NULL,
  `tokens` longtext,
  `user` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passport`
--

LOCK TABLES `passport` WRITE;
/*!40000 ALTER TABLE `passport` DISABLE KEYS */;
/*!40000 ALTER TABLE `passport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_proyectos`
--

DROP TABLE IF EXISTS `tb_proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_proyectos` (
  `id_proyecto` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `inicio` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `descripcion` varchar(5000) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_proyectos`
--

LOCK TABLES `tb_proyectos` WRITE;
/*!40000 ALTER TABLE `tb_proyectos` DISABLE KEYS */;
INSERT INTO `tb_proyectos` VALUES (1,'Proyecto01','2016-02-19','2016-02-24',0,'Primer proyecto','2016-02-19 00:06:29','2016-03-05 14:48:26'),(2,'Proyecto02','2016-02-27','2016-03-06',1,'Este es el segundo proyecto','2016-02-27 20:35:23','2016-03-05 22:43:07');
/*!40000 ALTER TABLE `tb_proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_redes`
--

DROP TABLE IF EXISTS `tb_redes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_redes` (
  `id_red` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id` varchar(500) DEFAULT NULL,
  `proveedor` varchar(255) DEFAULT NULL,
  `dispName` varchar(255) DEFAULT NULL,
  `foto` varchar(2000) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_red`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_redes`
--

LOCK TABLES `tb_redes` WRITE;
/*!40000 ALTER TABLE `tb_redes` DISABLE KEYS */;
INSERT INTO `tb_redes` VALUES (1,'10153832642059133','facebook','Miguel Angel Alcalá Rios','https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtl1/v/t1.0-1/p50x50/11816864_10153490087124133_4077059843905544587_n.jpg?oh=20485733f8c26419251f8cb4506610fe&oe=574E984B&__gda__=1464805290_4228168eebc43c99971cf1be874ca9f0',1,'2016-03-06 23:46:58','2016-03-06 23:46:58');
/*!40000 ALTER TABLE `tb_redes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuarios`
--

DROP TABLE IF EXISTS `tb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_usuarios` (
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `administrador` tinyint(1) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidoPaterno` varchar(255) DEFAULT NULL,
  `apellidoMaterno` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuarios`
--

LOCK TABLES `tb_usuarios` WRITE;
/*!40000 ALTER TABLE `tb_usuarios` DISABLE KEYS */;
INSERT INTO `tb_usuarios` VALUES (1,'malcala','46647913',1,'Miguel Angel','Alcalá','Rios','2016-02-18 23:55:30','2016-02-18 23:55:30'),(2,'malcalat','46647913',0,'Miguel Angel','Alcalá','Rios','2016-03-05 17:15:31','2016-03-05 17:15:31');
/*!40000 ALTER TABLE `tb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuariosproyectos`
--

DROP TABLE IF EXISTS `tb_usuariosproyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_usuariosproyectos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` int(11) DEFAULT NULL,
  `proyecto` int(11) DEFAULT NULL,
  `horas` float DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuariosproyectos`
--

LOCK TABLES `tb_usuariosproyectos` WRITE;
/*!40000 ALTER TABLE `tb_usuariosproyectos` DISABLE KEYS */;
INSERT INTO `tb_usuariosproyectos` VALUES (1,1,1,30,'2016-02-19 00:12:12','2016-02-27 17:27:05'),(5,1,2,10.0833,'2016-02-27 20:35:39','2016-02-27 20:37:42'),(6,2,1,20.2,'2016-03-05 17:16:40','2016-03-05 17:17:05'),(7,2,2,10.3833,'2016-03-05 17:16:44','2016-03-05 17:17:18');
/*!40000 ALTER TABLE `tb_usuariosproyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-07  0:01:04
