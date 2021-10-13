const colors = require('colors');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/', (req, res)=>{
   const datos = [
      {nombre: 'Daniel Monge', edad: 38},
      {nombre: 'Carlos Monge', edad: 72}
   ];
   
   res.render('index',{
      titulo: 'Mi primer APP',
      nombre: 'Osvaldo Monge',
      datos: datos
   });
});

let port = 3002;
app.listen(port, ()=>{
   console.log('Servidor iniciado en puerto: '.green + port);
});