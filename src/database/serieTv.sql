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
    sinopse VARCHAR(1000),
    genero VARCHAR(50),
    CONSTRAINT cons_genero CHECK(genero IN ('Terror', 'Ação', 'Comédia', 'Serial Killer', 'Dorama', 'Ficção', 'Ficção Científica', 'Suspense')),
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
    CONSTRAINT cons_fk_serie FOREIGN KEY (fk_serie) REFERENCES serie(id_serie),
    fk_usuario_2 INT,
    CONSTRAINT cons_fk_usuario_2 FOREIGN KEY (fk_usuario_2) REFERENCES usuario(id_usuario)
);

SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Ação';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Terror';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Comédia';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Serial Killer';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Dorama';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Ficção';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Ficção Científica';
SELECT imagem, nome_serie_avaliacao, desc_avaliacao, nota_serie FROM avaliacao JOIN serie ON id_serie = fk_serie WHERE genero = 'Suspense';

SELECT * FROM usuario;
SELECT * FROM serie;
SELECT * FROM avaliacao;	

drop table avaliacao;
DROP TABLE serie;
truncate serie;