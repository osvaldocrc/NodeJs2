const fs = require('fs');
const colors = require('colors');


//mkdir
//fs.mkdirSync('img');

if (fs.existsSync('css')) {
   console.log('La carpeta ya existe'.yellow);
}else{
   fs.mkdir('css', (err) => {
      if (err) throw(err);
      console.log('Carpeta creada...'.green);
   });
}



console.log('Final de linea'.yellow);

