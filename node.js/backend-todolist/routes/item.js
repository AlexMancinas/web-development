'use strict'

const express = require('express');
const ItemController = require("../controllers/item");

const router = express.Router();

router.post('/save', ItemController.save)
router.get('/items', ItemController.getItems)
router.delete('/item/:id',ItemController.delete)

module.exports = router;