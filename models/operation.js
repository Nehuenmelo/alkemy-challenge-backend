'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OperationSchema = Schema({
    concept: String,
    amount: Number,
    date: Date,
    income: Boolean
});

module.exports = mongoose.model('Operation', OperationSchema);
