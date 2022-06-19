'use stric'

var controller = {

   datosCurso: (req, res)=>{
     

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Alex Mancinas',
            url: 'alexmancinasweb.com'
        });
    },

    test: (req, res)=>{
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos'
        })
    }

}

//End controller

module.exports = controller; 