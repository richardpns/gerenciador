const db = require('../config/dbConfig');

class Usuario {
    static registrarUsuario(usuario, callback) {
        const { nome, email, senha } = usuario;
        const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
        db.query(sql, [nome, email, senha], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    static autenticarUsuario(email, senha, callback) {
        const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
        db.query(sql, [email, senha], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            if (result.length === 0) {
                return callback(null, false); // Usuário não encontrado
            }
            callback(null, result[0]); // Retorna o usuário autenticado
        });
    }
}

module.exports = Usuario;
