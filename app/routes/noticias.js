module.exports = function (app) {
    app.get('/noticias', function(req, res){

        let mysql = require('mysql');

        let connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'jehh8494',
            database : 'porta_noticias'
        });
        connection.query('select * from noticia', function(erro, result){
            res.send(result);
        });

        //res.render("noticias/noticias");
    });
};