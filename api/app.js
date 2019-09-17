var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

// Register Mongoose models:
var PlayerRegisteredModel = require('./events/PlayerRegistered');
var MatchConcludedModel = require('./events/MatchConcluded');

var router = require('./routes/routes');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + process.env.MONGODB_HOST + '/FoosballEloDb');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Project all persistent events to in-memory projection:
var Players = require('./projections/Players');
var Matches = require('./projections/Matches');
PlayerRegisteredModel.find({}, function (err, playerEvents) {
    playerEvents.forEach(Players.projectPlayerRegistered);

    MatchConcludedModel.find({}, function (err, matchEvents) {
        matchEvents.forEach(function(e) {
            // FIXME: Order is dependent since Matches uses the current players'
            // ratings to show deltas, while Players updates them.
            Matches.projectMatchConcluded(e);
            Players.projectMatchConcluded(e);
        });
    });
});

module.exports = app;
