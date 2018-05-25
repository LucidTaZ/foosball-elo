'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchConcludedSchema = new Schema({
    winner_one: {
        type: String,
        required: 'Please enter the id of winner (one)'
    },
    loser_one: {
        type: String,
        required: 'Please enter the id of loser (one)'
    },
    winner_two: {
        type: String
    },
    loser_two: {
        type: String
    },
    moment: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('MatchConcluded', MatchConcludedSchema);
