'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerRegisteredSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of the player'
    },
    moment: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PlayerRegistered', PlayerRegisteredSchema);
