const fs = require('fs');
const readline = require('readline');

let i = readline.createInterface(process.stdin, process.stdout);

i.question('Cual es tu nombre? ', (nombre) => {
   //console.log('Escribió: ' + nombre);
   //fs.writeFileSync(`${nombre}.txt`, `Escribio el nombre: ${nombre} \n`);

   let stream = fs.createWriteStream(`${nombre}.txt`);
   stream.write(`Escribio el nombre: ${nombre} \n`);

   process.stdout.write('Expresate, escribe algo: ');

   i.on('line', (dicho) => {
      if (dicho.trim() == 'salir') {
         stream.close();
         i.close();
      } else {
         //fs.appendFileSync(`${nombre}.txt`, dicho.trim() + '\n');
         stream.write(dicho.trim() + '\n');
      }
   });
});
