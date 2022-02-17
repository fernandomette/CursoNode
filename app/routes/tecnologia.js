module.exports = function (app) {
    app.get('/tecnologia', function (req, res) {
        //res.render("secao/tecnologia");
        let mysql = require('mysql');

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'jehh8494',
            database: 'porta_noticias',
            insecureAuth: true
        });
        connection.query('select * from noticia', function(erro, result){
            res.send(result);
        });

    });
};