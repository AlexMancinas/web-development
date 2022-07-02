'use stric'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema =  Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
   
});

module.exports = mongoose.model('Item', ItemSchema);

