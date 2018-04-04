var elo = require('../game/Elo');

var players = {};

exports.all = function () {
    return Object.values(players);
};

exports.find = function (id) {
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
    var winnerOne = players[matchConcluded.winner_one];
    var loserOne = players[matchConcluded.loser_one];

    if (!winnerOne || !loserOne) {
        console.error('Unknown winner or player');
        console.error(matchConcluded);
        return;
    }

    var deltaRatings = elo.calculateMatchOutcomesTwoPlayers(winnerOne.rating, loserOne.rating);
    winnerOne.rating += deltaRatings[0];
    loserOne.rating += deltaRatings[1];

    winnerOne.matchesPlayed++;
    loserOne.matchesPlayed++;
};

var adjustFourPlayersAveraged = function (matchConcluded) {
    var winnerOne = players[matchConcluded.winner_one];
    var loserOne = players[matchConcluded.loser_one];
    var winnerTwo = players[matchConcluded.winner_two];
    var loserTwo = players[matchConcluded.loser_two];

    if (!winnerOne || !loserOne || !winnerTwo || !loserTwo) {
        console.error('Unknown player');
        console.error(matchConcluded);
        return;
    }

    var deltaRatings = elo.calculateMatchOutcomesFourPlayers(winnerOne, winnerTwo, loserOne, loserTwo);

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
