/**
Instalar pacote express
npm install express --save

Instalar pacote ejs
npm install ejs --save
  
npm install mysql --save

npm install consign --save

Instalar nodemon
npm install -g nodemon
Compilar utilizando nodemon index.js .... 

*/

let app = require('./config/server');

// let formlaster = require('./app/routes/formulario_inclusao_noticias')(app);

// let routehome = require('./app/routes/home')(app);

// let moda = require('./app/routes/moda')(app);

// let noticias = require('./app/routes/noticias')(app);

// let tecnologia = require('./app/routes/tecnologia')(app);

app.listen(3000, function(){
    console.log("Rodando express");
})