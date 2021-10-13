const express = require('express');
const app = express();

let port = 3000;

app.get('/', (req, res) => { 
   res.send('Hola Mundo');
});

app.get('/home', (req, res) => { 
   res.send('Estas en la página de inicio');
});

app.listen(port, () => {
   console.log(`Servidor express iniciado en el puerto: ${port}...`);
});
