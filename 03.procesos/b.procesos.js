//ejecutar proceso de la siguiente manera: node .\procesos.js --nombre "Osvaldo" --edad "38"

function param(p){
    var index = process.argv.indexOf(p);
    //console.log(index);
    return process.argv[index + 1];
}

var nombre = param('--nombre');
var edad = param('--edad');

console.log(`Tu nombre es ${nombre} y tienes ${edad} años`);

//console.log(param('--nombre'));
//console.log(process.argv);
