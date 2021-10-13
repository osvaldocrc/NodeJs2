const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
   if (req.method == 'GET') {

      res.writeHead(200,{'Content-Type':'text/html'});
      fs.createReadStream('./form.html', 'utf-8').pipe(res);
   
   } else if(req.method == 'POST'){
      
      let body = '';

      //Evento cuando hay datos
      req.on('data',(chunk)=>{body+=chunk;});

      //Evento cuando se termine
      req.on('end',()=>{
         res.writeHead(200,{'Content-Type':'text/html'});
         //Extraer datos con parser
         
         res.end(`<!DOCTYPE html>
               <html lang="en">
               <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                  <title>Resultados</title>
               </head>
               <body>
                  <form action="/" method="POST">
                     <h1>Datos del Formulario recibidos</h1>
                          <p>${body}</p>                   
                  </form>
               </body>
               </html>
         `);
      });

      

   }
}).listen(3030);
console.log('Servidor iniciado');