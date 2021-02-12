CREATE DATABASE `Database`;
USE `Database`;

CREATE TABLE `User` (
	`Email` varchar(100) NOT NULL,
    `FirstName` varchar(50) NOT NULL,
    `LastName` varchar(60) NOT NULL,
    `Password` varchar(60) NOT NULL,
    PRIMARY KEY (`Email`)
    ) ENGINE=InnoDB AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;
    
INSERT INTO `User`
VALUES ('test@tester.com', 'John', 'Doe', 'Passyyy');

SELECT * FROM User;
SELECT * FROM User WHERE `EMAIL` = 'test@tester.com';