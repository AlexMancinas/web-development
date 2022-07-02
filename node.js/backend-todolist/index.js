'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3800;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/general', {useNewUrlParser:true}).then(() => {
    console.log('Se conecto exitosamente');

    //crear servidor y ponerme a escuchar peticiones http
    app.listen(port, ()=>{
        console.log('Servidor corriendo en htpp://localhost/:'+port)
    })
}).catch((err) => {
    console.log('No se puso conectar'+err)
});