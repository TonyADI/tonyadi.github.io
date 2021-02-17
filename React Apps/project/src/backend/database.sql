CREATE DATABASE `Database`;
USE `Database`;

CREATE TABLE `User` (
	 email varchar(100) NOT NULL,
     first_name varchar(50) NOT NULL,
     last_name varchar(60) NOT NULL,
    `password` varchar(60) NOT NULL,
    PRIMARY KEY (`Email`)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
    

CREATE TABLE `Category` (
	 `name` varchar(100) NOT NULL,
     price float NOT NULL,
     PRIMARY KEY (`Name`)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
    
    
CREATE TABLE product (
	 id int NOT NULL auto_increment,
     category_name varchar(100) NOT NULL,
     user_email varchar(100) NOT NULL,
     buy_now decimal NOT NULL,
     initial_price decimal NOT NULL,
     duration decimal NOT NULL,
     PRIMARY KEY (`Id`),
     FOREIGN KEY (user_email) REFERENCES user (email) ON DELETE CASCADE,
     FOREIGN KEY (category_name) REFERENCES category (name) ON DELETE CASCADE
     ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
    
INSERT INTO product
VALUES (1, 'iPhone 11', 1300, 900, 20);

INSERT INTO product (category_name, buy_now, initial_price, duration)
VALUES ('iPhone 11', 1400, 900, 20);
    
INSERT INTO `User`
VALUES ('test@tester.com', 'John', 'Doe', 'Passyyy');

INSERT INTO `Category`
VALUES ('iPhone 11', 1020.00);

INSERT INTO `Category`
VALUES ('iPhone 12', 1040.00);


