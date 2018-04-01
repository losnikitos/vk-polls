const app = require('./app');
const config = require('../config');

app.listen(config.port, err => {
    if (err) {
        console.error('Server startup failed:');
        console.error(err);
        return;
    }

    console.log(`Server started on port ${config.port}/`);
});
