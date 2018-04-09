const config = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  config.db.login,
  config.db.password,
  config.db.database,
  config.db.options
);

const User = sequelize.define('user', {
  vk_id: { type: Sequelize.INTEGER },
  first_name: { type: Sequelize.TEXT },
  last_name: { type: Sequelize.TEXT },
  photo: { type: Sequelize.TEXT }
});

const Poll = sequelize.define('poll', {
  question: { type: Sequelize.TEXT }
});

const Option = sequelize.define('option', {
  text: { type: Sequelize.TEXT }
});

const Answer = sequelize.define('answer');

Poll.Options = Poll.hasMany(Option);

// Добавляет колонку authorId в таблицу polls
Poll.belongsTo(User, { as: 'author' });

// Option.belongsToMany(User, { through: Answer });
// User.belongsToMany(Option, { through: Answer });

Answer.belongsTo(User, { as: 'user' });
Answer.belongsTo(Option, { as: 'option' });

Option.hasMany(Answer);
User.hasMany(Answer);

sequelize.sync();

module.exports = { Sequelize, sequelize, User, Poll, Option, Answer };
