// Из каких файлов склеиваем конфиг на каждой итерации
const configsByEnv = {
    development: ['default.js', 'dev.js'],
    production: ['default.js'],
    default: ['default.js']
};

// Узнаем окружение из переменной NODE_ENV, по умолчанию считаем 'development'
const env = process.env.NODE_ENV || 'development';

// Читаем конфиги из текущей папки
const configs = configsByEnv[env]
    .map(filename => require(`./${filename}`));

// Делаем shallow merge конфигов в порядке, который указан в configsByEnv
const mergedConfig = configs.reduce((acc, config) => ({...acc, ...config}), {});

// Дописываем тип окружения в конфиг
mergedConfig.env = env;

module.exports = mergedConfig;
