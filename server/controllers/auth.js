const passport = require('passport');
const config = require('../../config/index');
const { User } = require('../models');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use(
  new VKontakteStrategy(
    {
      clientID: config.vk.clientID,
      clientSecret: config.vk.appSecret,
      callbackURL: config.vk.callbackURL
    },
    (accessToken, refreshToken, params, profile, done) => {
      // Достаем поля из коллбека
      const { id: vk_id, first_name, last_name, sex, screen_name, photo } = profile._json;

      // Добавляем пользователя или находим, если он уже заходил
      User.findOrCreate({ where: { vk_id }, defaults: { first_name, last_name, photo } }).spread(
        (user, created) => {
          done(null, user);
        }
      );
    }
  )
);

// Пользователь добавляется в базу в момент регистрации, поэтому тут ничего не делаем
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Находим пользователя по ID
passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => done(null, user.get({ plain: true })));
});

module.exports = {
  // Редирект в user consent dialog
  login: passport.authenticate('vkontakte', { display: 'popup' }),

  // Коллбек из oauth.vk.com
  callback: passport.authenticate('vkontakte', { successRedirect: '/', failureRedirect: '/login' })
};
