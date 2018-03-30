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
        rating: 1500
    };
};

var adjust = function (rating, opponentRating, score) {
    // Transformed ratings:
    var rPlayer = Math.pow(10, rating / 400);
    var rOpponent = Math.pow(10, opponentRating / 400);

    // Expected win chance:
    var ePlayer = rPlayer / (rPlayer + rOpponent);

    // K-factor, measure of impact:
    var K = 32;

    return rating + Math.round(K * (score - ePlayer));
};

var adjustTwoPlayers = function (matchConcluded) {
    var winnerOne = players[matchConcluded.winner_one];
    var loserOne = players[matchConcluded.loser_one];

    var newWinnerOneRating = adjust(winnerOne.rating, loserOne.rating, 1);
    var newLoserOneRating = adjust(loserOne.rating, winnerOne.rating, 0);

    winnerOne.rating = newWinnerOneRating;
    loserOne.rating = newLoserOneRating;
};

var adjustFourPlayersAveraged = function (matchConcluded) {
    var winnerOne = players[matchConcluded.winner_one];
    var loserOne = players[matchConcluded.loser_one];
    var winnerTwo = players[matchConcluded.winner_two];
    var loserTwo = players[matchConcluded.loser_two];

    var winnersRating = (winnerOne.rating + winnerTwo.rating) / 2;
    var losersRating = (loserOne.rating + loserTwo.rating) / 2;

    var newWinnerOneRating = adjust(winnerOne.rating, losersRating, 1);
    var newLoserOneRating = adjust(loserOne.rating, winnersRating, 0);
    var newWinnerTwoRating = adjust(winnerTwo.rating, losersRating, 1);
    var newLoserTwoRating = adjust(loserTwo.rating, winnersRating, 0);

    winnerOne.rating = newWinnerOneRating;
    loserOne.rating = newLoserOneRating;
    winnerTwo.rating = newWinnerTwoRating;
    loserTwo.rating = newLoserTwoRating;
};

exports.projectMatchConcluded = function (matchConcluded) {
    if (matchConcluded.winner_two && matchConcluded.loser_two) {
        adjustFourPlayersAveraged(matchConcluded);
    } else {
        adjustTwoPlayers(matchConcluded);
    }
};
