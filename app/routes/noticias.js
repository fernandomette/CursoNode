let dbConnection = require('../../config/db.Connection');

module.exports = function (app) {

    let connection = dbConnection();

    app.get('/noticias', function(req, res){

        connection.query('select * from noticia', function(erro, result){
            res.render("noticias/noticias", {noticias: result});
        });

    });
};