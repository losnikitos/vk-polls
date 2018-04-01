const auth = require('./controllers/auth');

module.exports = (app) => {

    app.get('/auth/vk/callback', auth.callback);
    app.get('/auth/vk', auth.login);
    app.get('/', function (req, res) {
        res.json(req.user);
    });

    app.use('/', (req, res) => res.send('Hello world'));
};
