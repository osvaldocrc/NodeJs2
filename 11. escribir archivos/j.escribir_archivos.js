const colors = require('colors');
const fs = require('fs');
const nArchivo = 'prueba.txt';

//validar si existe un archiivo

/*if (fs.existsSync(nArchivo)) {
   console.log('El archivo existe'.green);
} else {
   console.log('El archivo no existe'.red);
}*/

/*
fs.access(nArchivo, fs.constants.F_OK, (err) => {
   if (err) {
      console.log('El archivo no existe'.red);
   }else{
      console.log('El archivo sí existe'.green);
   }
});*/

//Si no existe el rchivo lo crea
//Si existe lo sobre escribe
const contenido = 'a Este es el contenido del texto s';

//fs.writeFileSync(nArchivo, contenido);

fs.writeFile(nArchivo, contenido, (err) => {
   if(err) throw ('Error al escribir en el archivo');

   console.log('Se ha escrito en el archivo.'.green);
});

const texto = '\ntexto adicional';
fs.appendFile(nArchivo, texto, (err) => {
   if(err) throw ('Error al escribir en el archivo');
   console.log(`Se adicionó texto al archivo ${nArchivo}`.magenta);
});

console.log('Final de linea'.yellow);
