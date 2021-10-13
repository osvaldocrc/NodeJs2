const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlEncodedParser = bodyParser.urlencoded({extended : false});

//URL -> http://localhost:3000/?nombre=Carlos&apellido=Monge

//Con el bodyParser
app.get('/', urlEncodedParser, (req, res) => {
   res.send(`<h1>Tus datos son: <br/> 
   Nombre: ${req.query.nombre}  <br/>
   Apellido: ${req.query.apellido} </h1>`);
   console.log('Datos: ', req.query);
});

//Sin el bodyParser
// app.get('/', (req, res) => {

//    let url = req.url;
//    console.log('URL: ', url);

//    //Parametros
//    url = url.substring(url.indexOf('?') + 1);
//    console.log('Datos: ', url);

//    //Arreglo
//    const params = url.split('&');
//    console.log('params: ', params);

//    let text = '';

//    params.forEach(param => {
//       console.log('param: ', param);

//       let object = param.split('=');
//       console.log('dato: ', object);

//       text += object[0] + ' : ' + object[1] + '<br/>';
//    });

//    res.send(`<h1>Tus datos son: <br/> ${text} </h1>`);
//    console.log(text);
// });

app.listen(3000, () => {
   console.log('Servidor Exress iniciado');
});