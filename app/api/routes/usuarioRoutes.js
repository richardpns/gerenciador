const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para registro de usuários
router.post('/registrar', usuarioController.registrar);

// Rota para autenticação de usuários (login)
router.post('/login', usuarioController.login);

module.exports = router;

    