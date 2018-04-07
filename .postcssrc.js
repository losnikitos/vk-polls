module.exports = {
    'plugins': {
        'postcss-import': {},
        'postcss-nested': {},
        'cssnano': {
            zindex: false
        },
        'postcss-cssnext': {
            features: {
                customProperties: {
                    warnings: false
                }
            }
        }
    }
};
