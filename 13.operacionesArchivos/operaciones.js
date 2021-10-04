const fs = require('fs');
require('colors');

//Renombrar síncrono
//fs.renameSync('prueba.txt', 'nuevoNombre.txt');

//Renombrar asincrono
/*fs.rename('nuevoNombre.txt', '.src/prueba.txt', (err) => {
   if (err) throw (err);
   console.log('Archivo renombrado'.green);
});*/

//Mover archivo
//La carpeta debe existir
// fs.rename('prueba.txt', './src/prueba.txt', (err) => {
//    if (err) throw (err);
//    console.log('Archivo movido'.green);
// });


//Eliminar archivo
fs.unlinkSync('prueba.txt');
console.log('Archivo prueba.txt eliminado'.green);