const express = require('express');
const app = express();
const db = require('./config/dbConfig'); // Importando a configuração do banco de dados
const cors = require("cors");

// Configuração do middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Habilitando o CORS
app.use(cors());

// Rotas de Usuários
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api/usuarios', usuarioRoutes);

// Rotas de Tarefas
const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/api/tarefas', tarefaRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de gerenciamento de tarefas.');
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
