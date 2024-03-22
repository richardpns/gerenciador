const Tarefa = require('../models/tarefaModel');

const tarefaController = {};

// Criar nova tarefa
tarefaController.criar = async (req, res) => {
    try {
        const novaTarefa = await Tarefa.criar(req.body);
        res.status(201).json(novaTarefa);
    } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        res.status(500).json({ error: 'Erro ao criar tarefa.' });
    }
};

// Listar todas as tarefas
tarefaController.listar = async (req, res) => {
    try {
        const tarefas = await Tarefa.listar();

        // Remover referências circulares e converter para objetos JavaScript simples
        const tarefasJSON = tarefas.map(tarefa => ({
            id: tarefa.id,
            descricao: tarefa.descricao,
            data_vencimento: tarefa.data_vencimento,
            status: tarefa.status,
            idUser: tarefa.idUser // Se necessário, ajuste o nome do campo do usuário
        }));

        res.status(200).json(tarefasJSON);
    } catch (error) {
        console.error('Erro ao listar tarefas:', error);
        res.status(500).json({ error: 'Erro ao listar tarefas.' });
    }
};

// Obter uma tarefa por ID
tarefaController.obterPorId = async (req, res) => {
    try {
        const tarefa = await Tarefa.obterPorId(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada.' });
        }
        res.status(200).json(tarefa);
    } catch (error) {
        console.error('Erro ao obter tarefa por ID:', error);
        res.status(500).json({ error: 'Erro ao obter tarefa por ID.' });
    }
};

// Atualizar uma tarefa
tarefaController.atualizar = async (req, res) => {
    try {
        const tarefaAtualizada = await Tarefa.atualizar(req.params.id, req.body);
        res.status(200).json(tarefaAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
    }
};

// Excluir uma tarefa
tarefaController.excluir = async (req, res) => {
    try {
        await Tarefa.excluir(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
        res.status(500).json({ error: 'Erro ao excluir tarefa.' });
    }
};

module.exports = tarefaController;
