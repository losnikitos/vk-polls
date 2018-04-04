const express = require('express');
const router = require('./router');
const config = require('../config');
const app = express();
const passport = require('passport');

app.engine('html', require('./controllers/render'));
app.set('views', './views');
app.set('view engine', 'html');

if (config.static.hmr) {
    // Собираем статику на лету
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config.js');
    const webpackMiddleware = require('webpack-dev-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackMiddleware(compiler, {
        noInfo: true,
        publicPath: '/',
        reload: true
    }));

    app.use(require('webpack-hot-middleware')(compiler));
} else {
    // Раздаем уже собранную статику
    app.use(express.static(config.static.dir));
}

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: config.app.secret, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

router(app);

module.exports = app;
