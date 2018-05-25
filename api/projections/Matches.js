var elo = require('../game/Elo');
var Players = require('./Players');

var matches = {};

exports.all = function () {
    return Object.values(matches);
};

exports.find = function (id) {
    return matches[id];
};

exports.projectMatchConcluded = function (matchConcluded) {
    var deltaRatings, players, outcome;
    if (matchConcluded.winner_two && matchConcluded.loser_two) {
        // 2v2
        var winnerOne = Players.find(matchConcluded.winner_one);
        var loserOne = Players.find(matchConcluded.loser_one);
        var winnerTwo = Players.find(matchConcluded.winner_two);
        var loserTwo = Players.find(matchConcluded.loser_two);

        deltaRatings = elo.calculateMatchOutcomesFourPlayers(
            winnerOne.rating,
            winnerTwo.rating,
            loserOne.rating,
            loserTwo.rating
        );
        players = {
            winner_one: winnerOne,
            winner_two: winnerTwo,
            loser_one: loserOne,
            loser_two: loserTwo
        };
        outcome = {
            winner_one: deltaRatings[0],
            winner_two: deltaRatings[1],
            loser_one: deltaRatings[2],
            loser_two: deltaRatings[3]
        };
    } else {
        // 1v1
        var winner = Players.find(matchConcluded.winner_one);
        var loser = Players.find(matchConcluded.loser_one);

        deltaRatings = elo.calculateMatchOutcomesTwoPlayers(
            winner.rating,
            loser.rating
        );
        players = {
            winner_one: winner,
            loser_one: loser
        };
        outcome = {
            winner_one: deltaRatings[0],
            loser_one: deltaRatings[1]
        };
    }

    var id = matchConcluded._id;
    matches[id] = {
        id: id,
        moment: matchConcluded.moment,
        players: players,
        outcome: outcome
    };
};
