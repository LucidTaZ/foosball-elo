var express = require('express');
var router = express.Router();

var playersController = require('../controllers/PlayersController');
var matchesController = require('../controllers/MatchesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Foosball ELO' });
});

router.route('/players')
    .get(playersController.list)
    .post(playersController.create);
router.route('/players/:id')
    .get(playersController.show);

/* GET matches listing. */
router.route('/matches')
    .post(matchesController.create);

module.exports = router;
