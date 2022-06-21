var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');

var indexRouter = require('./routes/index');
var projectRouter = require('./routes/project');
var authRouter = require('./routes/auth.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


axios.post('https://demo-workspace.a4.saagie.io/projects/api/platform/2/graphql', {
    query: "query{projects {id, name}}"
}, {
  headers: {
    'Content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxM0JuaTVIUjVMc3ZUblZvUzZKQ3k4d1oxMEhHY0g1X3BZclN0TGwyTnpBIn0.eyJqdGkiOiJhNTg3NTE3Ny0xZTRkLTRjNDgtODMwZS00YmM3ZGM0OGNmMWEiLCJleHAiOjE2NTU3ODAxMTcsIm5iZiI6MCwiaWF0IjoxNjU1NzM2OTE3LCJpc3MiOiJodHRwOi8vc2FhZ2llLWNvbW1vbi1rZXljbG9hazo4MDgwL2F1dGgvcmVhbG1zL2RlbW8iLCJhdWQiOlsicmVhbG0tbWFuYWdlbWVudCIsImFjY291bnQiXSwic3ViIjoiOTBhMGMwMTktZDZlYS00ZTU5LThjYjYtYTg1NzA5ZTM4ODdiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZnJvbnRlbmQiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIyOTY4ZGQ2ZS01ZWI1LTRlZDEtYWE3Ni0yODkwZTU1MzllNmIiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbIm1hbmFnZS11c2VycyIsIm1hbmFnZS1jbGllbnRzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJlc3RpYW1fZzA2X25yai5mYXNzaW5vdSBlc3RpYW1fZzA2X25yai5mYXNzaW5vdSIsInByZWZlcnJlZF91c2VybmFtZSI6ImVzdGlhbV9nMDZfbnJqLmZhc3Npbm91IiwiZ2l2ZW5fbmFtZSI6ImVzdGlhbV9nMDZfbnJqLmZhc3Npbm91IiwiZmFtaWx5X25hbWUiOiJlc3RpYW1fZzA2X25yai5mYXNzaW5vdSIsImVtYWlsIjoiZXN0aWFtX2cwNl9ucmouZmFzc2lub3VAZGVtby5hNC5zYWFnaWUuaW8ifQ.CcEahcolncK6TcB9QwtV9RFP6WyGGk6ydC27KsiRBmjYgho6SXVp-Ln3j2ie_RYps6MYDfGaXY7-5uJAdD5TW1U-FU1k0EJhRgIaiEeJRh0xhXhWGYY6gECRnu7jOiJQ2mdIFLvIcWqcahk5NWreGFowoRU4IGDR1l5FleJTpZwoDeFCEBvLZ9RIAcQ6lWabOFXUTZ2HtkK9oM_TSO8kS1zF2njaxnAa8XZTkBSQ_KFw0Qd8valhiDnHi0E0b0UR8ma6Me5CYnREE0WQ0REQwUT5Nqfd3pmUqKqGpvC_joxilLp8tyqr9cQ67jWTW7lt--Ymn4rh_zAV-H9_28Tr3Q'
  }
}).then((res) => {
  console.log(JSON.stringify(res.data))
}).catch((fail) => {
  console.error(fail)
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
