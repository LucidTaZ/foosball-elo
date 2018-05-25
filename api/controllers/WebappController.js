'use strict';

var Players = require('../projections/Players');
var Matches = require('../projections/Matches');

exports.index = function(req, res) {
    var players = Players.all();
    players.sort(function (a, b) {
        // Sort by descending rating
        return b.rating - a.rating;
    });

    var matches = Matches.all();
    matches.sort(function (a, b) {
        // Sort by descending moment
        return b.moment - a.moment;
    });

    res.render('index', {
        title: 'Foosball ELO',
        players: players,
        matches: matches
    });
};
