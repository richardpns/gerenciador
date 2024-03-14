const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gerenc'
});

connection.connect();

module.exports = connection;
