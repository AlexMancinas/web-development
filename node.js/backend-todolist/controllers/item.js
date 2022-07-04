'use strict'
const validator = require('validator');
const { validate } = require('../models/item');
const Item = require('../models/item')

const controller = {
    save: (req, res) => {
        //Recoger los parametros por post
        let params = req.body;

        //Validar dator 
        try {
            var validate_title = !validator.isEmpty(params.title)
        } catch (err) {

            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

        if (validate_title) {
            //Crear articulo a guardar 
            var item = new Item();

            //Asignar Valores 
            item.title = params.title;


            //Guardar el articulo
            item.save((err, itemStored) => {
                if (err || !itemStored) {

                    return res.status(404).send({
                        status: 'error',
                        message: "El item no se guardo"
                    })
                }
                return res.status(200).send({
                    status: 'succes',
                    item: itemStored
                })

            })

            //Devolver una respuesta 



        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            })
        }


    },

    getItems: (req, res) => {


        //Find
        Item.find({}).exec((err, items) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'error al devolver los articulos'
                });
            }
            if (!items) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'succes',
                items
            });
        })


    },
    delete: (req, res) => {
        //Recoger el id de la url
        var itemId = req.params.id;


        //find and delete
        Item.findOneAndDelete({ _id: itemId }, (err, itemRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if (!itemRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ah borrado el articulo, posiblemente no existe'
                });
            }

            return res.status(200).send({
                status: 'succes',
                item: itemRemoved
            })
        });
    },
}


module.exports = controller;