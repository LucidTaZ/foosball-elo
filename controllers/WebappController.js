'use strict';

var Players = require('../projections/Players');

exports.index = function(req, res) {
    var players = Players.all();
    players.sort(function (a, b) {
        // Sort by descending rating
        return b.rating - a.rating;
    });

    res.render('index', {
        title: 'Foosball ELO',
        players: players
    });
};
