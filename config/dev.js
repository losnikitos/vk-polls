module.exports = {
    server: {
        // что слушаем
        port: 8000,

        // куда ходим с клиента
        api: 'http://localhost:8000/api',
    },

    static: {
        host: '',
        hmr: true
    }
};
