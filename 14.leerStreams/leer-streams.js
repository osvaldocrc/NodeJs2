const fs = require('fs');
require('colors');

/*let archivo = fs.readFileSync('logs.log');
console.log(`Tamaño : ${archivo.length}`);*/

//Strams - son pedacitos de contenido
let stream = fs.createReadStream('logs.log', 'utf-8');
let data = '';

//Configurar evento (se ejecuta solo una vez al inicio)
stream.once('data', ()=>{
   console.log('Iniciando el stram...\n'.yellow);
});

//configurar evento (on)
stream.on('data', (chunk) => {
   console.log(`${chunk.length} |`.green);
   data += chunk;
});

//Configurar evento al final
stream.on('end', ()=>{
   console.log('\nFin del stram...\n'.yellow);
   console.log(data.length);
});