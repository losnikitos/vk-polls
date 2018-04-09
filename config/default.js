module.exports = {
  app: {
    secret: 'my secret key' // для генерации и проверки сессионной куки
  },

  server: {
    // что слушаем
    port: 80,

    // куда ходим с клиента
    api: 'http://localhost:8000/api'
  },

  vk: {
    // Парметры из https://vk.com/dev/implicit_flow_user
    clientID: 6433439, // https://vk.com/editapp?id=6433439&section=info
    appSecret: 'fISnKlpqoRFIo4D4KYmv',
    callbackURL: 'http://localhost:8000/auth/vk/callback',
    version: '5.73'
  },

  static: {
    host: '', // CDN
    dir: `${__dirname}/../dist`,
    hmr: false
  },

  db: {
    login: 'postgres',
    password: 'postgres',
    database: 'postgres',
    options: {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  }
};
