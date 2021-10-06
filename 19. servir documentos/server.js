const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
   console.log(`Método: ${req.method} solicita ${req.url}`);

   if (req.url == '/') {
      console.log('Paso1');
      fs.readFile('./public/index.html', 'utf-8', (err, html) => {
         if (err) throw err;
         res.writeHeader(200, { 'Content-type': 'text/html' });
         res.end(html);
      });
   } else if (req.url.match(/.css$/)) {
      console.log('Paso2');
      const reqPath = path.join(__dirname, 'public', req.url);
      const fileStream = fs.createReadStream(reqPath, 'utf-8');

      res.writeHead(200, { 'content-type': 'text/css' });
      fileStream.pipe(res);
   } else if (req.url.match(/.jpg$/)) {
      console.log('Paso3');
      const reqPath = path.join(__dirname, 'public', req.url);
      const fileStream = fs.createReadStream(reqPath);

      res.writeHead(200, { 'content-type': 'img/jpg' });
      fileStream.pipe(res);
   } else {
      res.writeHeader(404, { 'content-type': 'text/plain' });
      res.end('404 ERROR');
   }

}).listen(3030);