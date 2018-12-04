var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var searchlatestpositionRouter = require('./routes/search-latest-position');
var searchpositionhistoryRouter = require('./routes/search-position-history');
var searchexistpositionRouter = require('./routes/search-exist-position');
var searchdeviceshistoryRouter = require('./routes/search-devices-history');

var app = express();

// radisからclient_idをとってくる
// var rails = require('rails');
// var connection = rails.createConnection({
// 	host: 'localhost',
// 	database: 'test',
// 	user: 'root',
// 	password: '1234'
// });
// var query = connection.query('select client_id from probe_platform;', function (results) {
//   clientId = results[0].client_id
// });


//ロガー設定
var log4js = require('log4js');
log4js.configure('log-config.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', searchlatestpositionRouter);
app.use('/', searchpositionhistoryRouter);
app.use('/', searchexistpositionRouter);
app.use('/', searchdeviceshistoryRouter);

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

module.exports = app;
