CREATE DATABASE defiProject;

USE defiProject;

DROP TABLE gamePoint;

CREATE TABLE gamePoint(
idx INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
wallet VARCHAR(255) NOT NULL,
point INT NOT NULL
);

INSERT INTO gamePoint(wallet, point) VALUES('test', 10);

SELECT * FROM gamePoint;

