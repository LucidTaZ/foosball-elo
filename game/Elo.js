/**
 * Calculates the transferred rating
 * @param {int} rating
 * @param {int} opponentRating
 * @param {float} score 0 for loss, 1 for win, 0.5 for draw
 * @returns {int} Amount of rating transferred
 */
exports.calculateRatingTransfer = function (rating, opponentRating, score) {
    // Transformed ratings:
    var rPlayer = Math.pow(10, rating / 400);
    var rOpponent = Math.pow(10, opponentRating / 400);

    // Expected win chance:
    var ePlayer = rPlayer / (rPlayer + rOpponent);

    // K-factor, measure of impact:
    var K = 32;

    return Math.round(K * (score - ePlayer));
};

/**
 * Calculates the transferred ratings of a 1v1 match
 * @param {int} winnerRating
 * @param {int} loserRating
 * @returns {[int]} Amount of rating to be assigned to each input player
 */
exports.calculateMatchOutcomesTwoPlayers = function (winnerRating, loserRating) {
    return [
        this.calculateRatingTransfer(winnerRating, loserRating, 1),
        this.calculateRatingTransfer(loserRating, winnerRating, 0)
    ];
};

/**
 * Calculates the transferred ratings of a 2v2 match
 * @param {int} winnerOneRating
 * @param {int} winnerTwoRating
 * @param {int} loserOneRating
 * @param {int} loserTwoRating
 * @returns {[int]} Amount of rating to be assigned to each input player
 */
exports.calculateMatchOutcomesFourPlayers = function (winnerOneRating, winnerTwoRating, loserOneRating, loserTwoRating) {
    var winnersRating = Math.round((winnerOneRating + winnerTwoRating) / 2);
    var losersRating = Math.round((loserOneRating + loserTwoRating) / 2);

    return [
        this.calculateRatingTransfer(winnerOneRating, losersRating, 1),
        this.calculateRatingTransfer(winnerTwoRating, losersRating, 1),
        this.calculateRatingTransfer(loserOneRating, winnersRating, 0),
        this.calculateRatingTransfer(loserTwoRating, winnersRating, 0)
    ];
};
