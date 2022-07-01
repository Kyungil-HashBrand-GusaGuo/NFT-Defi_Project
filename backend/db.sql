CREATE DATABASE defiProject;

USE defiProject;

DROP TABLE gamePoint;

CREATE TABLE gamePoint(
idx INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
account VARCHAR(255) NOT NULL,
point INT NOT NULL DEFAULT 0
);

INSERT INTO gamePoint(account) VALUES('test');

SELECT * FROM gamePoint;

