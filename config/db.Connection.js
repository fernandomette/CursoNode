
let mysql = require('mysql');

module.exports = function () {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'jehh8494',
        database : 'porta_noticias'
    });
}
