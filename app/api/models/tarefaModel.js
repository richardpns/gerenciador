const db = require('../config/dbConfig');

const Tarefa = {};

// Criar uma nova tarefa
Tarefa.criar = async (novaTarefa) => {
    try {
        const sql = 'INSERT INTO tarefa (descricao, data_vencimento, status, usuario_id) VALUES (?, ?, ?, ?)';
        const result = await db.query(sql, [novaTarefa.descricao, novaTarefa.data_vencimento, novaTarefa.status, novaTarefa.usuario_id]);
        return { id: result.insertId, ...novaTarefa };
    } catch (error) {
        throw error;
    }
};

// Listar todas as tarefas
Tarefa.listar = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM tarefa';
        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

// Obter uma tarefa por ID
Tarefa.obterPorId = async (id) => {
    try {
        const sql = 'SELECT * FROM tarefa WHERE id = ?';
        const tarefa = await db.query(sql, [id]);
        if (tarefa.length === 0) {
            throw new Error('Tarefa não encontrada.');
        }
        return tarefa[0];
    } catch (error) {
        throw error;
    }
};

// Atualizar uma tarefa
Tarefa.atualizar = async (id, tarefaAtualizada) => {
    try {
        const sql = 'UPDATE tarefa SET descricao = ?, data_vencimento = ?, status = ? WHERE id = ?';
        await db.query(sql, [tarefaAtualizada.descricao, tarefaAtualizada.data_vencimento, tarefaAtualizada.status, id]);
        return { id, ...tarefaAtualizada };
    } catch (error) {
        throw error;
    }
};

// Excluir uma tarefa
Tarefa.excluir = async (id) => {
    try {
        const sql = 'DELETE FROM tarefa WHERE id = ?';
        await db.query(sql, [id]);
    } catch (error) {
        throw error;
    }
};

module.exports = Tarefa;