'use strict';

var mongoose = require('mongoose');
var PlayerRegisteredModel = mongoose.model('PlayerRegistered');
var Players = require('../projections/Players');

var respond = function(res) {
    return function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    };
};

exports.list = function(req, res) {
    respond(res)(null, Players.all());
};

exports.show = function(req, res) {
    respond(res)(null, Players.find(req.params.id));
};

exports.create = function(req, res) {
    var newPlayerRegistered = new PlayerRegisteredModel(req.body);
    newPlayerRegistered.save(respond(res));
    Players.projectPlayerRegistered(newPlayerRegistered);
};
