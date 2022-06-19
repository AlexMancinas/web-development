'use strict'

//Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas


//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//CORS


// Añadir prefijos a rutas


//Ruta o metodo de prueba para el api
app.get('/probando', (req, res)=>{
     

    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Alex Mancinas',
        url: 'alexmancinasweb.com'
    });
});

// Exportar modulo (ficheto actual)
module.exports = app;
