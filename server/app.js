const express = require('express');
const router = require('./router');
const serveStaticFiles = require('./static');
const config = require('../config');
const app = express();
const passport = require('passport');
const models = require('./models');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('html', require('./controllers/render'));
app.set('views', './views');
app.set('view engine', 'html');

serveStaticFiles(app);

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(
  session({
    secret: config.app.secret,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: models.sequelize
    }),
    resave: false // Не пересохранять сессию в базу, если ничего не поменялось
  })
);
app.use(passport.initialize());
app.use(passport.session());

router(app);

module.exports = app;
