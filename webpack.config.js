const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const webpack = require('webpack');
const config = require('./config');
const dev = config.environment !== 'production';

module.exports = {

    entry: dev ? ['webpack-hot-middleware/client', './src/index.js'] : ['promise-polyfill', 'whatwg-fetch', './src/index.js'],

    output: {
        path: dist,
        filename: 'index.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },

    resolve: {
        alias: {
            components: path.join(__dirname, '/src/components')
        }
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    plugins: dev ? [new webpack.HotModuleReplacementPlugin()] : null
};
