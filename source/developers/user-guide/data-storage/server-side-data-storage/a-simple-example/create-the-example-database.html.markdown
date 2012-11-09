---
title: "Create the Example Database"
active_menu_item: developers
class_name: developers
full_width: true
---


The Example Database is very simple indeed. It consists of a single table 'customers' with the following fields

 - id (auto incrementing)

 - companyName (unique index)

 - country

If you are feeling lazy, here is the SQL script to generate it in MySQL.

## NOTE : This was generated from Xeround and so it uses the ENGINE=Xeround option. You may need to modify this if you are importing this into you own MySQL instance. Likely values are ENGINE=MYISAM or ENGINE=INNODB or just leave it out.

    -- phpMyAdmin SQL Dump
    -- version 3.4.3.2
    -- http://www.phpmyadmin.net
    -- Host: instance11898.db.xeround.com:8092
    -- Generation Time: Apr 22, 2012 at 03:23 PM
    -- Server version: 5.1.42
    -- PHP Version: 5.3.1
    SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
    SET time_zone = "+00:00";
    /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
    /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
    /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
    /*!40101 SET NAMES utf8 */;
    -- Database: `acdemo`
    -- --------------------------------------------------------
    -- Table structure for table `customers`
    CREATE TABLE IF NOT EXISTS `customers` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `companyName` varchar(30) COLLATE utf8_bin NOT NULL,
    `country` varchar(30) COLLATE utf8_bin DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `companyName` (`companyName`)
    ) ENGINE=Xeround DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=28 ;
    -- Dumping data for table `customers`
    INSERT INTO `customers` (`id`, `companyName`, `country`) VALUES
    (20, 'Intel', 'USA'),
    (16, 'IBM', 'USA'),
    (17, 'Mulesoft', 'USA'),
    (23, 'Microsoft', 'USA'),
    (24, 'AC', 'UK');
    /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
    /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
    /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
   

