const mysql = require('mysql2');

require('dotenv').config();

let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
//console log your .env varaible to make sure you are grabbing them from .env file
//console.log(user, password);

var connection = mysql.createConnection(
    {
    host: 'localhost',
    user: user,
    password: password,
    // user: 'root',
    //password: 'Tadgage#2627',
    database: 'booklist_database',
});

module.exports = connection;