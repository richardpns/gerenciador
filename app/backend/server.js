const express = require('express');
const app = express();

// Configuração do middleware e das rotas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
