var express = require('express');
var router = express.Router();

var webappController = require('../controllers/WebappController');
var playersController = require('../controllers/PlayersController');
var matchesController = require('../controllers/MatchesController');

router.route('/')
    .get(webappController.index);

router.route('/players')
    .get(playersController.list)
    .post(playersController.create);
router.route('/players/:id')
    .get(playersController.show);

router.route('/matches')
    .post(matchesController.create);

module.exports = router;
