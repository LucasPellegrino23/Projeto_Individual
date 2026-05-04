CREATE DATABASE seriesTv;

USE seriesTv;

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(100),
    nome_de_usuario VARCHAR(70) UNIQUE,
    email VARCHAR(150),
    telefone CHAR(11),
    senha VARCHAR(30),
    imagem_usuario VARCHAR(500)
);

CREATE TABLE serie(
	id_serie INT PRIMARY KEY AUTO_INCREMENT,
    nome_serie VARCHAR(60) UNIQUE,
    status_serie VARCHAR(20),
    CONSTRAINT cons_status_serie CHECK(status_serie IN('assistido', 'assistindo')),
    sinopse VARCHAR(700),
    genero VARCHAR(50),
    qtd_episodios INT,
    imagem VARCHAR(500),
    fk_usuario INT,
    CONSTRAINT cons_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE avaliacao(
	id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
    nome_serie_avaliacao VARCHAR(60),
    desc_avaliacao VARCHAR(300),
    nota_serie DECIMAL(3,1),
    fk_serie INT,
    CONSTRAINT cons_fk_serie FOREIGN KEY (fk_serie) REFERENCES serie(id_serie)
);

SELECT * FROM usuario;
SELECT * FROM serie;
SELECT * FROM avaliacao;