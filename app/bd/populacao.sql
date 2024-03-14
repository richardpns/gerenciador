INSERT INTO usuario (nome, email, senha) VALUES
    ('João', 'joao@example.com', 'senha123'),
    ('Maria', 'maria@example.com', 'senha456'),
    ('Pedro', 'pedro@example.com', 'senha789');

INSERT INTO tarefa (descricao, data_vencimento, status, idUser) VALUES
    ('Estudar para o exame', '2024-03-20', 'A fazer', 1),
    ('Preparar relatório de vendas', '2024-03-25', 'Em andamento', 2),
    ('Concluir projeto de desenvolvimento', '2024-03-15', 'Concluído', 3);

SELECT * FROM tarefa;
SELECT * FROM usuario;