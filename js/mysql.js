var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'newpassword',
    database : 'sqltext'
});

connection.connect();

connection.query('SELECT name from stu where num = 1', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
});