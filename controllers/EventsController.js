'use strict';

var mongoose = require('mongoose');
var PlayerRegisteredModel = mongoose.model('PlayerRegistered');
var MatchConcludedModel = mongoose.model('MatchConcluded');

var respond = function(res) {
    return function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    };
};

exports.players = function(req, res) {
    PlayerRegisteredModel.find({}, function (err, playerEvents) {
        respond(res)(null, playerEvents);
    });
};

exports.matches = function(req, res) {
    MatchConcludedModel.find({}, function (err, matchEvents) {
        respond(res)(null, matchEvents);
    });
};
