var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Register Mongoose models:
var PlayerRegisteredModel = require('./events/PlayerRegistered');
var MatchConcludedModel = require('./events/MatchConcluded');

var router = require('./routes/routes');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FoosballEloDb');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
PlayerRegisteredModel.find({}, function (err, playerEvents) {
    playerEvents.forEach(Players.projectPlayerRegistered);

    MatchConcludedModel.find({}, function (err, matchEvents) {
        matchEvents.forEach(Players.projectMatchConcluded);
    });
});

module.exports = app;
