const winston = require('winston');
const express = require('express');
const app = express();
const path = require('path');

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
//require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('RentMovie/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'RentMovie', 'build','index.html'));
    });
}

const port = process.env.PORT || 3900;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;