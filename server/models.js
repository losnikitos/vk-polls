const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = sequelize.define('user', {
    vk_id: {type: Sequelize.INTEGER},
    first_name: {type: Sequelize.TEXT},
    last_name: {type: Sequelize.TEXT},
    photo: {type: Sequelize.TEXT}
});

const Poll = sequelize.define('poll', {
    question: {type: Sequelize.TEXT}
});

const Option = sequelize.define('option', {
    text: {type: Sequelize.TEXT}
});

const Answer = sequelize.define('answer');

Poll.belongsTo(User, {as: 'author'}); // Добавляет колонку authorId в таблицу polls
Poll.hasMany(Option);

Answer.belongsTo(User);
Answer.belongsTo(Option);
Answer.belongsTo(Poll);

sequelize.sync();

module.exports = {User, Poll, Option, Answer};
