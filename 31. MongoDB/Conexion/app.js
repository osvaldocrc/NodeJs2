require('colors');
//---
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://dev:dev@localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
   console.log('Conexion a la BD exitosa...'.green);
});

connection.on('error', (err) => {
   console.log('Error en la conexión a la BD: '.red + err);
});

//Modelo
const Todo = mongoose.model('Todo', { text: String, completed: Boolean });

//Add
app.post('/add', (req, res) => {
   const todo = new Todo({ text: req.body.text, completed: false });

   todo.save()
      .then(doc => {
         console.log('Dato insetado correctamente...', doc);
         //res.redirect('/');
         res.json({ response: 'success', data: doc });
      })
      .catch(err => {
         console.log('Error al insertar: ', err.message);
         res.status(400).json({ response: 'failed' });
      });
});

//List
app.get('/getall', (req, res) => {
   Todo.find({}, 'text completed')
      .then(doc => {
         res.json({ response: 'success', data: doc });
      })
      .catch(err => {
         console.log('Error al consulta documentos - :' + err.message);
         res.status(400).json({ response: 'failed' });
      });
});

//Update
app.get('/complete/:id/:status', (req, res) => {
   const id = req.params.id;
   const status = req.params.status == 'true'; // Convertir a booleano
   Todo.findByIdAndUpdate({ _id: id }, { $set: { completed: status } })
      .then(doc => {
         res.json({ response: 'success', doc: doc })
      })
      .catch(err => {
         console.log('Error al actualizar el dato'.red + err.message);
         res.status(400).json({ response: 'failed' });
      });

});

//delete
app.get('/delete/:id', (req, res) => {
   const id = req.params.id;

   Todo.findByIdAndDelete({ _id: id })
      .then(doc => {
         //res.json({response: 'success'})
         res.redirect('/');
      })
      .catch(err => {
         console.log('Error eliminando el dato'.red + err.message);
         res.status(400).json({ response: 'Failed' });
      })
});

app.listen(3000, () => {
   console.log('Servidor Iniciado en 3000'.yellow);
});

