var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var persona = {
    nombre: '',
    comentarios: []
};

/*
rl.question('Cual es tu nombre: ', (answer) =>{
    console.log('Hola ', answer);
    process.exit();
});*/

rl.question('Cual es tu nombre: ', (answer) => {
    persona.nombre = answer;

    rl.setPrompt('Dime un comentario? ');
    rl.prompt();
});

var util = require('util');


//envento
rl.on('line', (input) => {
    if (input === 'salir') {
        var mensaje = util.format('Te llamas %s y me dijiste: %j', persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }

    persona.comentarios.push(input.trim())

    rl.setPrompt('Dime un comentario? ');
    rl.prompt();
});

/*
rl.on('line', (input) => {
    console.log('Escribiste una linea');
});*/

