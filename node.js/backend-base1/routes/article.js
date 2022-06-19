'use stric'

var express = require('express');

var articleController = require('../controllers/article');

var router = express.Router();

router.get('/datos-curso', articleController.datosCurso);
router.get('/test-de-controlador', articleController.test);

module.exports = router;

