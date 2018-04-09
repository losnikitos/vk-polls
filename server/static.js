const express = require('express');
const config = require('../config');

module.exports = app => {
  if (config.static.hmr) {
    // Собираем статику на лету
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config.js');
    const webpackMiddleware = require('webpack-dev-middleware');
    const compiler = webpack(webpackConfig);

    app.use(
      webpackMiddleware(compiler, {
        noInfo: true,
        publicPath: '/',
        reload: true
      })
    );

    app.use(require('webpack-hot-middleware')(compiler));
  } else {
    // Раздаем уже собранную статику
    app.use(express.static(config.static.dir));
  }
};
