'use strict';

var mongoose = require('mongoose');
var PlayerRegisteredModel = mongoose.model('PlayerRegistered');
var Players = require('../projections/Players');

var respondAndThen = function(res, successFunction) {
    return function(err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            successFunction()
        }
        res.json(data);
    };
};

exports.list = function(req, res) {
    res.json(Players.all());
};

exports.show = function(req, res) {
    res.json(Players.find(req.params.id));
};

exports.create = function(req, res) {
    var newPlayerRegistered = new PlayerRegisteredModel(req.body);
    newPlayerRegistered.save(function(err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            Players.projectPlayerRegistered(newPlayerRegistered)
        }
        res.json(data);
    });
};
