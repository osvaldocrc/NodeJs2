const eventEmmiter = require('events').EventEmitter;
const util = require('util');


var Persona = function (nombre) {
   this.nombre = nombre;
}

util.inherits(Persona, eventEmmiter);

let persona = new Persona('Os');

persona.on('hablar', (mensaje) =>{
   console.log(`${persona.nombre}: ${mensaje}`);
});

persona.emit('hablar','Hoy es un gran día');


//--Pruebas de usuario
//Funcion para almacenar información
var addData = function (nombre, apellido){
   this.nombre = nombre;
   this.apellido = apellido;
}

//Se genera un emisor de eventos
util.inherits(addData, eventEmmiter);

//Se almacena la información obtenida
let info = new addData('Osvaldo', 'Monge');

info.on('almacenar', (objeto) => {
   console.log(`Almacenando: ${objeto.nombre} | ${objeto.apellido}`);
   console.log('Información almacenada');
});

info.emit('almacenar', info);





//console.log(`Me llamo ${persona.nombre}`);


/*const events = require('events');
const emmiter = new events.EventEmitter();

emmiter.on('eventoCustom', (mensaje,  status) => {
   console.log(`${status} -> ${mensaje}`);
})

emmiter.emit('eventoCustom', 'Mensaje guardado con exito', 200);*/