const exec = require('child_process').exec

exec('script.bat', (err, stdout) => {

   if (err) {
      throw err;
   }

   console.log('Comando ejecutado');
   console.log(stdout);
});


exec('dir', (err, stdout) => {

   if (err) {
      throw err;
   }

   console.log('Comando ejecutado');
   console.log(stdout);
});