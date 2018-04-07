const {User, Poll, Option, Answer} = require('./models');

async function createUsers() {
    const user1 = await User.create({
        first_name: 'Надежда',
        last_name: 'Аникиева',
        photo: 'https://pp.userapi.com/c626717/v626717626/48f68/5A8TnsC1DfA.jpg'
    });

    const user2 = await User.create({
        first_name: 'Дарья',
        last_name: 'Полещикова',
        photo: 'https://pp.userapi.com/c840230/v840230907/71124/G2M7EDTwMQc.jpg'
    });

    const user3 = await User.create({
        first_name: 'Артем',
        last_name: 'Герасимов',
        photo: 'https://pp.userapi.com/c834402/v834402572/41920/CAM8MwwuEU4.jpg'
    });

    const user4 = await User.create({
        first_name: 'Олег',
        last_name: 'Котик',
        photo: 'https://pp.userapi.com/c619616/v619616051/1e1ca/gFj7fk1IACM.jpg'
    });

    const poll = await Poll.create({question: 'Что говорит лиса?'});

    const option1 = await Option.create({text: 'Гав'});
    const option2 = await Option.create({text: 'Мяу'});
    const option3 = await Option.create({text: 'Уруру'});

    await poll.setAuthor(user1);
    await poll.setOptions([option1, option2, option3]);

    const answer1 = await Answer.create();
    await answer1.setUser(user1);
    await answer1.setOption(option1);
}

createUsers();

