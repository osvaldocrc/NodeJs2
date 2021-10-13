const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

// Con conexiones simples, creadas
// const { insert, read, update, remove} = require('./operations');
const connection = mysql.createConnection({
   host: process.env.dbhost,
   user: process.env.dbuser,
   password: process.env.dbpassword,
   database: process.env.database
});

app.get('/insert', (req, res) => {
   insert(connection, { name: 'Bananito', email: 'bana@nito.com' }, result => {
      res.json(result);
   });
});

app.get('/read', (req, res) => {
   read(connection, result => {
      res.json(result);
   });
});

app.get('/update', (req, res) => {
   update(connection, { id: '2' }, result => {
      res.json(result);
   });
});

app.get('/delete', (req, res) => {
   remove(connection, { id: 7 }, result => {
      res.json(result);
   });
});

//
//Con pool de conexiones
//
const { insertPool, readPool, updatePool, removePool } = require('./operations-pool');
const pool = mysql.createPool({
   host: process.env.dbhost,
   user: process.env.dbuser,
   password: process.env.dbpassword,
   database: process.env.database
});

app.get('/insert-pool', (req, res) => {
   insertPool(pool, { name: 'Bananito', email: 'bana@nito.com' }, result => {
      res.json(result);
   });
});

app.get('/read-pool', (req, res) => {
   readPool(pool, result => {
      res.json(result);
   });
});

app.get('/update-pool', (req, res) => {
   updatePool(pool, { id: '2' }, result => {
      res.json(result);
   });
});

app.get('/delete-pool', (req, res) => {
   removePool(pool, { id: 8 }, result => {
      res.json(result);
   });
});

//
connection.connect((err) => {
   if (err) throw err;
   console.log('Connected to database');
});

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.listen(3000, () => {
   console.log('Servidor en puerto 3000');
});