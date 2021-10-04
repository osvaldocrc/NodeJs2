
const persona = require('./libs/persona');

let osvaldo = new persona('Osvaldo');

osvaldo.on('hablar', (mensaje) => {
   console.log(`${osvaldo.nombre}: ${mensaje}`);
});

osvaldo.emit('hablar', 'estas mas cerca de aprender mas de Node JS');

