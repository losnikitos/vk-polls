const passport = require('passport');
const config = require('../../config/index');
const User = require('../models/user');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(new VKontakteStrategy(
    {
        clientID: config.vk.clientID,
        clientSecret: config.vk.appSecret,
        callbackURL: config.vk.callbackURL
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
        const user = User.findOrCreate({...profile, vkontakteId: profile.id});
        done(null, user);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    const user = User.find(id);
    done(null, user);
});

module.exports = {
    callback: passport.authenticate('vkontakte', {
        successRedirect: '/',
        failureRedirect: '/login'
    }),
    login: passport.authenticate('vkontakte', {display: 'popup'})
};
