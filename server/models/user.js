// stub
class User {
    users = [];
    id = 0;

    findOrCreate = (({vkontakteId}) => {
        let user = this.users.find(user => user.vkontakteId === vkontakteId);
        if (!user) {
            this.id++;
            user = {vkontakteId: vkontakteId, id};
            this.users.push(user);
        }
        return user;
    });

    find = id => this.users.find(user => user.id === id);
}

module.exports = new User();
