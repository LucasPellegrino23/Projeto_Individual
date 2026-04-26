CREATE DATABASE seriesTv;

USE seriesTv;

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(100),
    nome_de_usuario VARCHAR(70) UNIQUE,
    email VARCHAR(150),
    telefone CHAR(11),
    senha VARCHAR(30)
);

CREATE TABLE serie(
	id_serie INT PRIMARY KEY AUTO_INCREMENT,
    nome_serie VARCHAR(60) UNIQUE,
    sinopse VARCHAR(300),
    genero VARCHAR(50),
    qtd_episodios INT,
    imagem LONGBLOB
);