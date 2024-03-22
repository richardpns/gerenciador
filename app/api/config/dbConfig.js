// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'gerenc'
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err);
//     } else {
//         console.log('Conexão bem-sucedida com o banco de dados.');
//     }
// });

// module.exports = connection;


const mysql = require('mysql');

const dbConfig = {
    host: 'localhost', // ou o endereço IP do seu servidor de banco de dados
    user: 'root', // substitua pelo nome de usuário do seu banco de dados
    database: 'gerenc', // substitua pelo nome do seu banco de dados
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados.');
});

module.exports = connection;