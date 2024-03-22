DROP DATABASE IF EXISTS gerenc;
CREATE DATABASE gerenc CHARSET=UTF8 COLLATE utf8_general_ci;
USE gerenc;

CREATE TABLE usuario (
    id int(11)  AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    senha varchar(255) NOT NULL
);

CREATE TABLE tarefa (
    id int(11) AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT NOT NULL,
    data_vencimento DATE,
    status ENUM('A fazer', 'Em andamento', 'Concluido') NOT NULL,
    usuario_id int(11) NOT NULL, 
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) 
);