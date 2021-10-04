var fs = require('fs');

//var files = fs.readdirSync('./');
fs.readdir('./', (err, files) => {
   if (err) throw err;

   console.log('Directorios');
   console.warn(files);
});

console.log('Final de linea 1');

//var archivo = fs.readFileSync('./script.bat', 'UTF-8');
let nomArchivo = './script.bat';
let archivo = fs.readFile(nomArchivo, 'utf-8', (err, data) =>{
   if (err) throw err;
   
   console.log('Contenido del archivo ->');
   console.log(data);
});

console.log('Final de linea 2');
//console.log(archivo);

