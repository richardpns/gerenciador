const express = require('express');
const app = express();
const db = require('./config/dbConfig'); // Importando a configuração do banco de dados
const cors = require("cors");
const routes = require("./routes/usuarioRoutes");

// Configuração do middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas de Usuários
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api/usuarios', usuarioRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de gerenciamento de tarefas.');
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
