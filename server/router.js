const auth = require('./controllers/auth');
const index = require('./controllers/index');
const api = require('./routes/api');

module.exports = app => {
  app.get('/auth/vk/callback', auth.callback);
  app.get('/auth/vk', auth.login);
  app.use('/api', api);
  app.get('/', index);
};
