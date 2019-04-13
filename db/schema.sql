
-- DROP DATABASE IF EXISTS burger_db;
-- CREATE DATABASE burger_db;
-- USE burger_db;

-- CREATE TABLE burger (
--     id INT AUTO_INCREMENT,
--     burger_name VARCHAR(300),
--     devoured BOOLEAN DEFAULT false,
--     date TIMESTAMP DEFAULT now(),
--     PRIMARY KEY (id)    
-- )
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);