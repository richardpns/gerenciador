const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rota para listar todas as tarefas
router.get('/', tarefaController.listar);

// Rota para criar uma nova tarefa
router.post('/', tarefaController.criar);

// Rota para obter uma tarefa por ID
router.get('/:id', tarefaController.obterPorId);

// Rota para atualizar uma tarefa por ID
router.put('/:id', tarefaController.atualizar);

// Rota para excluir uma tarefa por ID
router.delete('/:id', tarefaController.excluir);

module.exports = router;