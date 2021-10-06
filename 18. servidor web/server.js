const http = require('http');

http.createServer((req, res) => {
   console.log('httpVersion: ' + req.httpVersion);
   res.writeHead(200, { 'content-type': 'text/html' });
   res.end(`<!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Documento HTML</title>
   </head>
   <body>
      <h1>Hola Mundo</h1>
      <p>Bienvenido a mi servidor</p>
   </body>
   </html>`);
}).listen(3030);


console.log('Server iniciado...');