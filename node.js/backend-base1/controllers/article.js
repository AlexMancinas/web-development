'use stric'


var validator = require('validator');
var Article = require('../models/article')
var fs = require('fs');
var path = require('path');
const { exists } = require('../models/article');
const { constants } = require('buffer');

var controller = {

    datosCurso: (req, res) => {


        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Alex Mancinas',
            url: 'alexmancinasweb.com'
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos'
        })
    },

    save: (req, res) => {
        //Recoger parametros por post
        var params = req.body;


        //Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {
            //Crear el objeto a guardar 
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ah guardado'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
                // return res.status(200).send({
                //     message: 'success',
                //     article
                // });
            });

            //Devolver una respuesta


        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }

        //Crear el objeto a guardar 


        //Asignar valores


        //Guardar el articulo


        //Devolver una respuesta

        // return res.status(200).send({
        //     article: params
        // });
    },

    getArticles: (req, res) => {
        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }


        //Find
        query.sort('-_id').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'error al devolver los articulos'
                });
            }
            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'succes',
                articles
            });
        })


    },

    getArticle: (req, res) => {

        // Recoger el id de la url
        var articleId = req.params.id;

        // Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });
        }

        // Buscar el articulo
        Article.findById(articleId, (err, article) => {

            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                article
            });

        });
    },


    update: (req, res) => {
        //Recoger el id del articulo por la url
        var articleId = req.params.id;


        //Recoger los datos que llegan por put
        var params = req.body;

        http
        //Validar los datos 
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {
            //Find and update
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        } else {
            //Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                message: 'No xiste el articulo'
            });
        }

    },

    delete: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;


        //find and delete
        Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ah borrado el articulo, posiblemente no existe'
                });
            }

            return res.status(200).send({
                status: 'succes',
                article: articleRemoved
            })
        });
    },

    upload: (req, res) => {
        //Configurar el modulo del connect multiparty router/article.js (hecho)

        //Recoger el fichero de la peticion
        var file_name = 'Imagen no subida...'

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name
            })
        }

        //Conseguir nombre y la extension del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('/');

        //Nombre del archivo
        var file_name = file_split[2];

        //Extension del archivo
        var extension_split = file_name.split('.');
        var file_ext = extension_split[1];

        //Comprobar la extension ,solo imagenes , sino es valida borrar el fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
            //Borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'la extension de la imagen no es valida'
                });
            })

        } else {
            //Si todo es valido, sacando id de la url
            var articleId = req.params.id;
            if (articleId) {
                //Buscar el articulo, asignarle el nombre a la imagen y atualizarlo
                Article.findByIdAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {
                    if (err || !articleUpdated) {
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
            }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
            }




            //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
        }



    }, //End upload file

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/' + file;

        fs.stat(path_file, (err, stats) => {

            if (stats) {

                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    article: 'la imagen no existe'
                })
            }

        })
    },

    search: (req, res) => {
        //Sacar el string a buscar
        var searchString = req.params.search;

        //Find or 
        Article.find({
            "$or": [
                { "title": { "$regex": searchString, "$options": "i" } },
                { "content": { "$regex": searchString, "$options": "i" } }
            ]
        }).sort([['date', 'descending']]).exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion'
                })
            }
            if (!articles || articles.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda'
                })
            }

            return res.status(200).send({
                status: 'success',
                articles
            })
        });


    }

}


//End controller

module.exports = controller; 