var express = require("express")
var app = express()
var PORT = 3000
var connection = require('./db');

app.get( '/', function (req, res) {
    let sql = "SELECT * FROM books"
    connection.query(sql, function(error, results){
        if (error) throw error;
        res.send(results);
    })
   
})

app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`)
    connection.connect(function(error){
        if (error) throw error;
        console.log('Success, you are connected!')
    })
});