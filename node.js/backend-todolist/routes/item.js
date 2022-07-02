'use strict'

const express = require('express');
const ItemController = require("../controllers/item");

const router = express.Router();


router.post('/probando', ItemController.probando);

module.exports = router;