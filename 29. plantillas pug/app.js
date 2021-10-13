const colors = require('colors');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
   res.render('index.pug', {titulo: 'Mi primera app', nombre: 'Osvaldinio'});
});

app.listen(3002, () => {
   console.log('Servidor iniciado'.yellow);
});
