var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'booklist_database',
    user: 'root',
    password: ''
});

module.exports = connection;