const db = require('../config/dbConfig');

const Usuario = {};

Usuario.registrarUsuario = (novoUsuario, callback) => {
    const { nome, email, senha } = novoUsuario;
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao registrar usuário no banco de dados:', err);
            callback(err, null);
            return;
        }
        console.log('Novo usuário registrado com sucesso. ID:', result.insertId);
        callback(null, result.insertId);
    });
};

Usuario.autenticarUsuario = (email, senha, callback) => {
    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao autenticar usuário no banco de dados:', err);
            callback(err, null);
            return;
        }
        if (result.length === 0) {
            console.log('Usuário não encontrado.');
            callback(null, false); // Usuário não encontrado
            return;
        }
        console.log('Usuário autenticado com sucesso.');
        callback(null, result[0]); // Retorna o usuário autenticado
    });
};

module.exports = Usuario;
