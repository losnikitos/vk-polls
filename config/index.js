const mergeOptions = require('merge-options');
const defaultConfig = require('./default');

// Узнаем окружение из переменной NODE_ENV, по умолчанию считаем 'development'
const env = process.env.NODE_ENV || 'development';

// Merge
const config = {
  development: mergeOptions(defaultConfig, require('./dev.js')),
  // testing: mergeOptions(defaultConfig, require('./testing.js')),
  production: defaultConfig
}[env];

// Дописываем тип окружения в конфиг
config.env = config.environment = env;

module.exports = config;
