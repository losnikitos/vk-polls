const express = require('express');
const router = require('./router');
const config = require('../config');
const app = express();
const passport = require('passport');

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: config.app.secret, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

router(app);

module.exports = app;
