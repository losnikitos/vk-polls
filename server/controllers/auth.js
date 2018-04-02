const passport = require('passport');
const config = require('../../config/index');
const {User} = require('../models');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(new VKontakteStrategy({
        clientID: config.vk.clientID,
        clientSecret: config.vk.appSecret,
        callbackURL: config.vk.callbackURL
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
        const {id: vk_id, first_name, last_name, sex, screen_name, photo} = profile._json;
        User.findOrCreate({where: {vk_id}, defaults: {first_name, last_name, photo}})
            .spread((user, created) => {
                done(null, user);
            })
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id).then(user => done(null, user));
});

module.exports = {
    callback: passport.authenticate('vkontakte', {
        successRedirect: '/',
        failureRedirect: '/login'
    }),
    login: passport.authenticate('vkontakte', {display: 'popup'})
};
