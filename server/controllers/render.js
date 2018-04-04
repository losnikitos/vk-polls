const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const cache = {};
const replaceRegexp = /{{(.+?)}}/g;
const useCache = false; // todo: менять через config

module.exports = function render(abs, options, cb) {
    const sync = !cb;

    try {
        const dir = path.dirname(abs);
        options.include = function (rel) {
            const include = options.include;
            const str = render(path.resolve(dir, rel + '.' + 'html'), options);
            options.include = include;
            return str;
        };

        // Check cache...
        let fn = useCache && cache[abs];
        if (!fn) {
            if (sync) {
                const data = fs.readFileSync(abs, 'utf8');
                fn = cache[abs] = _.template(data, {interpolate: replaceRegexp}, options);
            } else {
                return fs.readFile(abs, 'utf8', function (er, data) {
                    if (er) return cb(er);
                    fn = cache[abs] = _.template(data, {interpolate: replaceRegexp}, options);
                    cb(null, fn(options));
                });
            }
        }

        // Run and return template
        const str = fn(options);
        if (sync) return str;
        cb(null, str);
    } catch (er) {
        if (sync) throw er;
        cb(er);
    }
};
