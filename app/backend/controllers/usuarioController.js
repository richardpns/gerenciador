const Usuario = require('../models/usuarioModel');

exports.registrar = (req, res) => {
    const { nome, email, senha } = req.body;
    const novoUsuario = { nome, email, senha };
    
    Usuario.registrarUsuario(novoUsuario, (err, usuarioId) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao registrar usuário.' });
        }
        res.status(201).json({ message: 'Usuário registrado com sucesso.', userId: usuarioId });
    });
};

exports.login = (req, res) => {
    const { email, senha } = req.body;
    
    Usuario.autenticarUsuario(email, senha, (err, usuario) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao autenticar usuário.' });
        }
        if (!usuario) {
            return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
        }
        res.status(200).json({ message: 'Usuário autenticado com sucesso.', user: usuario });
    });
};
