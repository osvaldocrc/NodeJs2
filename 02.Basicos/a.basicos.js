var path = require('path');

var a = 5;
var b = 10;

console.log('El resultado es: ', a+b);
console.log(`El resultado es ${a+b}`);

console.log(`Ruta del directorio: ${__dirname}`);
console.log(`Ruta del archivo: ${__filename}`);

console.log(path.basename(__filename));