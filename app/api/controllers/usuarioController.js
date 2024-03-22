const Usuario = require('../models/usuarioModel');

const usuarioController = {};

usuarioController.registrar = (req, res) => {
    const novoUsuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };

    Usuario.registrarUsuario(novoUsuario, (err, resultado) => {
        if (err) {
            console.error('Erro ao registrar usuário:', err);
            res.status(500).json({ error: 'Erro ao registrar usuário.' });
            return;
        }
        res.status(200).json({ message: 'Usuário registrado com sucesso.', userId: resultado });
    });
};

usuarioController.login = (req, res) => {
    const { email, senha } = req.body;
    
    Usuario.autenticarUsuario(email, senha, (err, usuario) => {
        if (err) {
            console.error('Erro ao autenticar usuário:', err);
            return res.status(500).json({ error: 'Erro ao autenticar usuário.' });
        }
        if (!usuario) {
            console.log('Usuário não encontrado.');
            return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
        }
        console.log('Usuário autenticado com sucesso:', usuario);
        res.status(200).json({ message: 'Usuário autenticado com sucesso.', user: usuario });
    });
};

module.exports = usuarioController;
