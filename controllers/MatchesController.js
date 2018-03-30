'use strict';

var mongoose = require('mongoose');
var MatchConcludedModel = mongoose.model('MatchConcluded');

var Players = require('../projections/Players');

var respond = function(res) {
    return function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    };
};

exports.create = function(req, res) {
    var newMatchConcluded = new MatchConcludedModel(req.body);
    newMatchConcluded.save(respond(res));
    Players.projectMatchConcluded(newMatchConcluded);
};
