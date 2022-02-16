//Compilar utilizando NODEMON INDEX.JS .... 

let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
})

app.get('/formulario_inclusao_noticias', function(req, res){
    res.render("admin/form_add_noticia");
})

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
})

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
})

app.get('/Moda', function(req, res){
    res.render("secao/moda");
})


app.listen(3000, function(){
    console.log('rodando em express')
})