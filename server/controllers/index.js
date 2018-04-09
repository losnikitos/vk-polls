const config = require('../../config');

// Отдаем HTML на клиент
module.exports = function(req, res, next) {
  return res.render('index.html', {
    stHost: config.static.host,
    apiURL: config.server.api,
    user: req.user || null
  });
};
