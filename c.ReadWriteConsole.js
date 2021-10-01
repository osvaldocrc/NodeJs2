process.stdout.write("Procesos\n----\n");

//Obtener datos del usuario
//process.stdout.write("Dime tu nombre: ");

var preguntas = ['Nombre?: ', 'Años?: ', 'Lenguaje: '];
var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]);
}

//On-> Escucha información
process.stdin.on('data', (data) => {
    /*var nombre = data.toString();
    process.stdout.write(`Hola ${nombre}`);
    process.exit();*/

    respuestas.push(data.toString().trim);

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{        
        process.exit();
    }
});

pregunta(0);

//
