'use stric'

var mongoose = require('mongoose');
var schema = mongoose.schema;
var articleSchema = schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', articleSchema);

