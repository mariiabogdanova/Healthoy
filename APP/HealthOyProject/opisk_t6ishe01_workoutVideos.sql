-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: opisk_t6ishe01
-- ------------------------------------------------------
-- Server version	5.5.59-0+deb8u1

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
-- Table structure for table `workoutVideos`
--

DROP TABLE IF EXISTS `workoutVideos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workoutVideos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `video_title` varchar(50) NOT NULL,
  `video_desc` text,
  `video_url` text,
  `video_category` int(5) NOT NULL,
  `video_tag` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workoutVideos`
--

LOCK TABLES `workoutVideos` WRITE;
/*!40000 ALTER TABLE `workoutVideos` DISABLE KEYS */;
INSERT INTO `workoutVideos` VALUES (1,'Full body workout in 5min','Exercise your full body in 5 minutes using your own body weight','https://www.youtube.com/watch?v=YepI40m2aEI',1,'fullbody, bodyweight, home exercise, fatburning'),(2,'Fitness Blender’s Puppy Workout','Very short and simple full body workout that includes a puppy!','https://www.youtube.com/watch?v=QtYRj6OBAw4',1,'fullbody, short, simple, puppy, dog'),(3,'Easy Warm Up Cardio Workout','Simple cardio workout warm up','https://www.youtube.com/watch?v=R0mMyV5OtcM',1,'cardio, short, simple, warm up'),(4,'Full dumbell workout in 5 minutes','Exercise your whole body in 5 minutes with the help of a dumbell','https://www.youtube.com/watch?v=Euqli_uhd2E',1,'dumbell, fullbody, toning, cardio'),(5,'5-minute standing flat-belly workout','Standing Belly Workout that would take only 5 minutes!','https://www.youtube.com/watch?v=SRq7XtDW0wg',1,'abs, simple, easy'),(6,'At Home 10 Minute Butt & Thigh Workout - FB Raw','Butt and thigh workout that will take only 10 minutes and includes a dog!\n','https://www.youtube.com/watch?v=z0f_68vLRh4',2,'thights, butt, dog, puppy'),(7,'10-Minute No-Equipment Home Workout, Full Body Exe','Full body workout in 10 minutes to energize your day\n','https://www.youtube.com/watch?v=I6t0quh8Ick',2,'fullbody, easy, bodyweight, toning, cardio'),(8,'Victoria`s Secret Model Workout: 10-Minute Fat-Bla','10 minutes Fat-Blast workout','https://www.youtube.com/watch?v=PWEdJRRndkQ',2,'fullbody, fatburning'),(9,'10 Minute Cardio for Beginners - Low Impact Workou','Simple cardio workout for the beginners','https://www.youtube.com/watch?v=DbcSkDwGiIM',2,'fullbody, easy, simple, beginners, cardio'),(10,'30-Minute Full Body Calorie Burner','Intense calorie burner workout for crazies','https://www.youtube.com/watch?v=695PN9xaEhs',3,'fullbody, hard, calorie burner, average, bodyweight'),(11,'The Best 15-Minute Beginner Workout — No Equipment','Beginners workout for easy start','https://www.youtube.com/watch?v=GS_z6FG_jqE',3,'fullbody, easy, simple, beginners, bodyweight'),(12,'15-Minute Beginners Low-Impact Cardio Workout','A good starting point for beginners!','https://www.youtube.com/watch?v=MxLL9Scvmzo',3,'fullbody, easy, simple, beginners, cardio'),(13,'15-Minute Beginners At-Home Cardio Workout','Easy workout video for a home exercising','https://www.youtube.com/watch?v=VHyGqsPOUHs',3,'fullbody, easy, simple, beginners, cardio');
/*!40000 ALTER TABLE `workoutVideos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-26 10:02:42
