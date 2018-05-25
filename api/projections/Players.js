var elo = require('../game/Elo');

var players = {};

exports.all = function () {
    return Object.values(players);
};

exports.find = function (id) {
    // TODO: Exception when not found
    return players[id];
};

exports.projectPlayerRegistered = function (playerRegistered) {
    var id = playerRegistered._id;
    players[id] = {
        id: id,
        name: playerRegistered.name,
        rating: 1500,
        matchesPlayed: 0
    };
};

var adjustTwoPlayers = function (matchConcluded) {
    var winnerOne = exports.find(matchConcluded.winner_one);
    var loserOne = exports.find(matchConcluded.loser_one);

    var deltaRatings = elo.calculateMatchOutcomesTwoPlayers(winnerOne.rating, loserOne.rating);
    winnerOne.rating += deltaRatings[0];
    loserOne.rating += deltaRatings[1];

    winnerOne.matchesPlayed++;
    loserOne.matchesPlayed++;
};

var adjustFourPlayersAveraged = function (matchConcluded) {
    var winnerOne = exports.find(matchConcluded.winner_one);
    var loserOne = exports.find(matchConcluded.loser_one);
    var winnerTwo = exports.find(matchConcluded.winner_two);
    var loserTwo = exports.find(matchConcluded.loser_two);

    var deltaRatings = elo.calculateMatchOutcomesFourPlayers(
        winnerOne.rating,
        winnerTwo.rating,
        loserOne.rating,
        loserTwo.rating
    );

    winnerOne.rating += deltaRatings[0];
    winnerTwo.rating += deltaRatings[1];
    loserOne.rating += deltaRatings[2];
    loserTwo.rating += deltaRatings[3];

    winnerOne.matchesPlayed++;
    loserOne.matchesPlayed++;
    winnerTwo.matchesPlayed++;
    loserTwo.matchesPlayed++;
};

exports.projectMatchConcluded = function (matchConcluded) {
    if (matchConcluded.winner_two && matchConcluded.loser_two) {
        adjustFourPlayersAveraged(matchConcluded);
    } else {
        adjustTwoPlayers(matchConcluded);
    }
};
