module.exports = {

    app: {
        secret: 'my secret key' // для генерации и проверки сессионной куки
    },

    server: {
        port: 8080
    },

    vk: {
        // Парметры из https://vk.com/dev/implicit_flow_user
        clientID: 6433439, // https://vk.com/editapp?id=6433439&section=info
        appSecret: 'fISnKlpqoRFIo4D4KYmv',
        callbackURL: 'http://localhost:8080/auth/vk/callback',
        version: '5.73'
    }
};
