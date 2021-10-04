//manejo de url
var path = require('path');

console.log(path.basename(__filename));
console.log(path.join(__dirname, 'www','home','pasos'));

//Especificas
var util = require('util');
util.log('Hola');

var nombre = 'Osvaldo';
var edad = 38;
var texto = util.format('Hola %s tienes %d años', nombre, edad);
util.log(texto);

var v8 = require('v8');
console.log(v8.getHeapStatistics());