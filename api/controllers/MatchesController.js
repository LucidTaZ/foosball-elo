'use strict';

var mongoose = require('mongoose');
var MatchConcludedModel = mongoose.model('MatchConcluded');

var Players = require('../projections/Players');
var Matches = require('../projections/Matches');

var respond = function(res) {
    return function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    };
};

exports.list = function(req, res) {
    respond(res)(null, Matches.all());
};

exports.show = function(req, res) {
    respond(res)(null, Matches.find(req.params.id));
};

exports.create = function(req, res) {
    var newMatchConcluded = new MatchConcludedModel(req.body);
    newMatchConcluded.save(respond(res));

    // FIXME: Order is dependent since Matches uses the current players'
    // ratings to show deltas, while Players updates them.
    Matches.projectMatchConcluded(newMatchConcluded);
    Players.projectMatchConcluded(newMatchConcluded);
};
