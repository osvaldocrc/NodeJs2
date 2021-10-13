const _ = require('underscore');

const lista = [
   { 'id': 1, 'nombre': 'osvaldo', 'edad': 38 },
   { 'id': 2, 'nombre': 'Manuel', 'edad': 27 },
   { 'id': 3, 'nombre': 'Yoli', 'edad': 22 }
];

const resultado = _.findWhere(lista, { id: 1 });
console.log(resultado);
console.log(resultado.nombre);

