'use strict';

var mongoose = require('mongoose');
var MatchConcludedModel = mongoose.model('MatchConcluded');

var Players = require('../projections/Players');
var Matches = require('../projections/Matches');

exports.list = function(req, res) {
    res.json(Matches.all());
};

exports.show = function(req, res) {
    res.json(Matches.find(req.params.id));
};

exports.create = function(req, res) {
    var newMatchConcluded = new MatchConcludedModel(req.body);
    newMatchConcluded.save(function(err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            Matches.projectMatchConcluded(newMatchConcluded);
            Players.projectMatchConcluded(newMatchConcluded);
        }
        res.json(data);
    });
};
